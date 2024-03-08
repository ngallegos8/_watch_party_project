import React, {useState, useEffect } from "react";
import NewEventForm from "./NewEventForm";
import EventListV from "./EventListV";
import Search from "./Search";
// Need to import user (object) info from "./userLogin" after login is successful

function VenueHome() {
console.log("hello")
    const [events, setEvents] = useState([]);
    const [searchEvents, setSearchEvents] = useState("");
    const [userType, setUserType] = useState("venue");
    const [venue, setVenue] = useState(null);


    

    useEffect(() => {
        fetch("http://127.0.0.1:5555/events")
          .then(response => response.json())
          .then(setEvents)
      }, [])

    function handleNewEventFormSubmit(newEvent) {
        setEvents([...events, newEvent])
    }
    console.log(events)
    console.log(searchEvents)
    
    function handleUpdateEvent(newEvent) {
    const updatedEvents = events.map((event) => {
        if (event.id === newEvent.id) {
        return newEvent
        } else {
        return event
        }
    })
    setEvents(updatedEvents)
    }

    function removeEvent(id) {
    const newEvents = events.filter((event) => event.id !== id)
    setEvents(newEvents)
    }

    function handleEventLogout(){
        alert("logging out")

        fetch("/logout", {
            method: "DELETE"
         })
        .then(setVenue(null))

        window.location.href = "http://localhost:3000/";
    }


    
    // const displayedEvents = events.filter((events) => events.name.toLowerCase().includes(searchEvents.toLowerCase()))

    //    ALLOWS SEARCH FUNCTION TO SEARCH FOR ANY RATIONAL PARAMETER IN THE EVENT OBJECT
    const displayedEvents = events.filter((event) => {
        return event.name.toLowerCase().includes(searchEvents.toLowerCase()) ||
        event.date_time.toLowerCase().includes(searchEvents.toLowerCase()) ||
        event.venue_id.toLowerCase().includes(searchEvents.toLowerCase())
      })

    return(
        <main>
            <h1>Vender Page</h1>
            <button onClick ={handleEventLogout}>log out</button>
            <EventListV events={displayedEvents} removeEvent={removeEvent} updateEvent={handleUpdateEvent} userType={userType}/>
            
            {/* <NewEventForm> onNewEventFormSubmit={handleNewEventFormSubmit}</NewEventForm>
            <Search> search={searchEvents} setSearch={setSearchEvents} </Search>
            <EventList> events={displayedEvents} removeEvent={removeEvent} updateEvent={handleUpdateEvent}</EventList> */}
            
        </main>
    );
    
}

export default VenueHome;