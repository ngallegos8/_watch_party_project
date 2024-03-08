import React, { useState } from "react";

function NewEventForm({ onNewEventFormSubmit }) {
  const [name, setName] = useState("")
  const [dateTime, setDateTime] = useState("")
  const [description, setDescription] = useState("")


  function handleSubmit(e) {
    e.preventDefault()
    // Format datetime to ISO 8601 format
    const formattedDateTime = new Date(dateTime).toISOString();

    const newEvent = {
        name: name,
        date_time: formattedDateTime,
        description: description
    }
    fetch("http://127.0.0.1:5555/events", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEvent)
    })
    .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update event');
        }
        return response.json();
      })
    .then(onNewEventFormSubmit)
        setName(newEvent.name)
        setDateTime(newEvent.formattedDateTime)
        setDescription(newEvent.description)
}

  return (
    <div className="new-event-form" onSubmit={handleSubmit}>
      <h2 className='form-title'>New Event Form</h2>
      <form>
        <input type="text" name="name" placeholder="Event name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" name="dateTime" placeholder="Date and Time of Event" value={dateTime} onChange={(e) => setDateTime(e.target.value)}/>
        <input type="text" name="description" placeholder="Brief Description of Event (100 Chars Max)" value={description} onChange={(e) => setDescription(e.target.value)}/>

        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default NewEventForm;