import React from "react";
import EventCard from "./EventCard";

function EventList({ events, removeEvent, updateEvent, userType}) {   
  console.log(events)

  const eventList = events.map(event => {
    return <EventCard key={event.id} event={event} removeEvent={removeEvent} updateEvent={updateEvent} userType={userType}/>  
  })
 console.log(eventList)
  return (
      <>
        <h1 className='page-title'>Events near you</h1>
        <ul className="cards">{eventList}</ul>
      </>
  );
}


export default EventList;