import React, {useState, useEffect } from "react";
import NewEventForm from "./NewEventForm";
import EventList from "./EventList";
import Search from "./Search";
// Need to import user (object) info from "./userLogin" after login is successful

function UserHome({ onLogin }) {
console.log("hello")
    const [events, setEvents] = useState([]);
    const [searchEvents, setSearchEvents] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:5555/events")
          .then(response => response.json())
          .then(setEvents)
      }, [])

    function handleNewEventFormSubmit(newEvent) {
        setEvents([...events, newEvent])
    }
    // console.log(events)
    // console.log(searchEvents)
    
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

    // const displayedEvents = events.filter((events) => events.name.toLowerCase().includes(searchEvents.toLowerCase()))

    //    ALLOWS SEARCH FUNCTION TO SEARCH FOR ANY RATIONAL PARAMETER IN THE EVENT OBJECT
    // const displayedEvents = events.filter((event) => {
    //     console.log(event)
    //     return event.name.toLowerCase().includes(searchEvents.toLowerCase()) ||
    //     event.date_time.toLowerCase().includes(searchEvents.toLowerCase()) ||
    //     event.venue_id.toLowerCase().includes(searchEvents.toLowerCase())
    //   })

    const displayedEvents = events.filter((event) => {
        if (event.name || event.date_time || event.venue_id) {
            return event.name.toLowerCase().includes(searchEvents.toLowerCase()) ||
                   event.date_time.toLowerCase().includes(searchEvents.toLowerCase()) ||
                   event.venue_id.toLowerCase().includes(searchEvents.toLowerCase());
        }
        return false;
    });

    return(
        <main>
            <h1>Welcome</h1>
            <Search search={searchEvents} setSearch={setSearchEvents} />
            <EventList events={displayedEvents} removeEvent={removeEvent} updateEvent={handleUpdateEvent}/>
            <NewEventForm onNewEventFormSubmit={handleNewEventFormSubmit} />
        </main>
    );
}

export default UserHome;