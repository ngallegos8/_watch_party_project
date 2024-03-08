import React, { useState } from "react";

function EventCard({ event, removeEvent, updateEvent}) {
  
  const [attendingCount, setAttendingCount] = useState(event.attending_count)
  const [venue, setVenue] = useState("")
  const [name, setName] = useState(event.name)
  const [dateTime, setDateTime] = useState(event.date_time)
  const [description, setDescription] = useState(event.description)
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [newEvent, setNewEvent] = useState()
  const [userType, setUserType] = useState("user");


  function handleDelete() {
    fetch(`/events/${event.id}`, {
      method: "DELETE"
    })
    removeEvent(event.id)
  }


  function handleHost() {
    alert("Hosted"); 
    console.log(venue)
    fetch(`/events/host/${event.id}`, {
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
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
    }


    function handleAttend() {
        alert("Attending!");
        setAttendingCount(prevCount => prevCount + 1)
        fetch(`http://127.0.0.1:5555/events/attend/${event.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ attending_count: event.attending_count + 1 })
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
          }
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
      }
      
  function handleUnHost(){
    alert("Unhosted")
    const drop = 0;
    alert(drop)
    fetch(`/events/${event.id}`, {
      method: "PATCH", 
      headers: {
          "Content-Type": "application/json", 
      },
      body: JSON.stringify({ [event.venue_id]: drop }), 
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
        e.preventDefault();
      
        // Format datetime to ISO 8601 format
        const formattedDateTime = new Date(dateTime).toISOString();
        console.log("Formatted Date Time:", formattedDateTime); 
      
        fetch(`/events/${event.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: name,
            date_time: formattedDateTime, 
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
          setName(updatedEventData.name);
          setDateTime(updatedEventData.date_time);
          setDescription(updatedEventData.description);

          updateEvent(updatedEventData);
        })
        .then(() => setShowUpdateForm(false))
        .catch(error => console.error('Error updating event:', error));
      }
      

  return (
    <li className="card">
      <h4>{event.name}</h4>
      <p>Date: {event.date_time}</p>
      <p>Description: {event.description}</p>
      <p>RSVP's: {attendingCount}</p>
      <p>Hosted By: {event.venue_id}</p>
      {/* <button onClick={handleAttend}>I want to attend this!</button> */}
      {userType === "user" && (
        <button onClick={handleAttend}>I want to attend this!</button>
      )}
      {userType === "venue" && (
        <button onClick={handleHost}>Host Event</button>
      )}
      <button onClick={() => setShowUpdateForm(!showUpdateForm)}>
        {showUpdateForm ? "Hide Update Form" : "Update Event"}
      </button>
      <button onClick={handleDelete} className="remove-event">Delete Event</button>
      {showUpdateForm && (
        <div>
          <h2>Update Event</h2>
          <form onSubmit={handleUpdateSubmit}>
            <label>Update Name:</label>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <label>Update Date/Time of Event:</label>
            <input type="text" name="dateTime" value={dateTime} onChange={(e) => setDateTime(e.target.value)}/>
            <label>Update Description of Event (100 Chars Max)</label>
            <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button type="submit">Save Changes</button>
            </form>
            <button onClick={handleHost} >Host Event</button><button onClick={handleUnHost}>Un-host</button>
        </div>
      )}
    </li>
  );

//   return (
//     <li className="card">
//       {/* <img src={event.image} alt={event.name} />  */}
//       <h4>{event.name}</h4>
//       <p>Date: {event.date_time}</p>
//       <p>Description: {event.description}</p>
//       <p>RSVP's: {attendingCount}</p>
//       <p>Hosted By: {event.venue_id}</p>
//       <button onClick={handleAttend}>I want to attend this!</button>

//       {/* NEED (Terenary?) LOGIC TO SHOW 'I WANT TO ATTEND vs. HOST' BASED ON IF YOU ARE A USER OR VENUE */}
//       {/* <button onClick={handleAttend} className="attend-event" value={attendingCount} onChange={(e) => setAttendingCount={e.target.value}}></button> */}

//       {/* Toggle button to show/hide update form */}
//       <button onClick={() => setShowUpdateForm(!showUpdateForm)}>
//         {showUpdateForm ? "Hide Update Form" : "Update Event"}
//       </button>

//       <button onClick={handleDelete} className="remove-event">Delete Event</button>

//       {showUpdateForm && (
//         <div>
//             <h2>Update Event</h2>
//             <form onSubmit={handleUpdateSubmit}>
//                 <label>Update Name:</label>
//                 <input type="text" name="name" placeholder={event.name} value={name} onChange={(e) => setName(e.target.value)}/>
//                 <label>Update Date/Time of Event:</label>
//                 <input type="text" name="dateTime" placeholder={event.date_time} value={dateTime} onChange={(e) => setDateTime(e.target.value)}/>
//                 <label>Update Description of Event (100 Chars Max)</label>
//                 <input type="text" name="description" placeholder={event.description} value={description} onChange={(e) => setDescription(e.target.value)}/>
//             {/* <button type="submit" onSubmit={setShowUpdateForm}>Save Changes</button> */}
//             <button type="submit">Save Changes</button>
//             </form>
//             <button onClick={handleHost} >Host Event</button>
//         </div>
//         )}
//     </li>
//   );
}

export default EventCard;