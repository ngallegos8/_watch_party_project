import React from "react";
import EventCardV from "./EventCardV";

function EventList({ events, removeEvent, updateEvent }) {   
  console.log(events)

  const eventList = events.map(event => {
    return <EventCardV key={event.id} event={event} removeEvent={removeEvent} updateEvent={updateEvent}/>  
  })
 console.log(eventList)
  return (
      <>
        <h1>Events near you</h1>
        <ul className="cards">{eventList}</ul>
      </>
  );
}


export default EventList;