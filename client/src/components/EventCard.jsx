import React, { useState } from "react";

function EventCard({ event, removeEvent, updateEvent }) {
  
  const [attend, setAttend] = useState("")
  const [attendingCount, setAttendingCount] = useState("")
  const [venue, setVenue] = useState("")
  const [name, setName] = useState(event.name)
  const [dateTime, setDateTime] = useState(event.date_time)
  const [description, setDescription] = useState(event.description)
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [newEvent, setNewEvent] = useState()


  function handleDelete() {
    fetch(`/events/${event.id}`, {
      method: "DELETE"
    })
    removeEvent(event.id)
  }


  function handleHost() {
    alert("Hosted"); 
    console.log(venue)
    fetch(`/events/${event.id}`, {
        method: "PATCH", 
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify({ [event.venue_id]: venue.id }), 
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }
        // Handle successful response here
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        // Handle error here
    });
}

  function handleUpdateSubmit(e) {
<<<<<<< HEAD
    e.preventDefault();
    
    // Format datetime to ISO 8601 format
    const formattedDateTime = new Date(dateTime).toISOString();
  
    fetch(`http://127.0.0.1:5555/events/${event.id}`, {
=======
    e.preventDefault()
    fetch(`/events/${event.id}`, {
>>>>>>> jeff
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        date_time: formattedDateTime, // Send the formatted datetime
        description: description
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to update event');
      }
      return response.json();
    })
    .then(updatedEventData => {
      // Update the state variables with the new values from the server response
      setName(updatedEventData.name);
      setDateTime(updatedEventData.date_time);
      setDescription(updatedEventData.description);
      // Optionally, you can update other state variables as needed
  
      // You can also call updateEvent if needed
      updateEvent(updatedEventData);
    })
    .then(() => setShowUpdateForm(false))
    .catch(error => console.error('Error updating event:', error));
  }

  function handleAttend() {
    fetch(`/events/${event.attending_count}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({attending_count: attendingCount})
    })
    removeEvent(event.id)
  }

  return (
    <li className="card">
      {/* <img src={event.image} alt={event.name} />  */}
      <h4>{event.name}</h4>
      <p>When: {event.date_time}</p>
      <p>{event.description}</p>

      {/* NEED (Terenary?) LOGIC TO SHOW 'I WANT TO ATTEND vs. HOST' BASED ON IF YOU ARE A USER OR VENUE */}
      {/* <button onClick={handleAttend} className="attend-event" value={attendingCount} onChange={(e) => setAttendingCount={e.target.value}}></button> */}

      {/* Toggle button to show/hide update form */}
      <button onClick={() => setShowUpdateForm(!showUpdateForm)}>
        {showUpdateForm ? "Hide Update Form" : "Update Event"}
      </button>

      <button onClick={handleDelete} className="remove-event">Delete Event</button>
<<<<<<< HEAD
      {showUpdateForm && (
        <div>
            <h2>Update Event</h2>
            <form onSubmit={handleUpdateSubmit}>
                <label>Update Name:</label>
                <input type="text" name="name" placeholder={event.name} value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Update Date/Time of Event:</label>
                <input type="text" name="dateTime" placeholder={event.date_time} value={dateTime} onChange={(e) => setDateTime(e.target.value)}/>
                <label>Update Description of Event (100 Chars Max)</label>
                <input type="text" name="description" placeholder={event.description} value={description} onChange={(e) => setDescription(e.target.value)}/>
            {/* <button type="submit" onSubmit={setShowUpdateForm}>Save Changes</button> */}
            <button type="submit">Save Changes</button>
            </form>
        </div>
        )}
=======

        <h2>Update Event</h2>
        <form onSubmit={handleUpdateSubmit}>
            <input type="text" name="name" placeholder="Update Event name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" name="dateTime" placeholder="Update Date and Time of Event" value={dateTime} onChange={(e) => setDateTime(e.target.value)}/>
            <input type="text" name="description" placeholder="Update Description of Event (100 Chars Max)" value={description} onChange={(e) => setDescription(e.target.value)}/>

            <button type="submit">Add Event</button>
        </form>
        <button onClick={handleHost} >Host Event</button>
>>>>>>> jeff
    </li>
  );
}

export default EventCard;