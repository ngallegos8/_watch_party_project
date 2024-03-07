import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import App from "./App"

function VenueLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const [venue, setVenue] = useState(null);

  useEffect(() => {

    fetch("/check_session").then((r) => {
       if (r.ok) {
         r.json().then((venue) => setVenue(venue));
       }
       
     });
   }, []);
  //  if (!venue) return <App/>;
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login/venue", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => {
        setIsLoading(false);
        if (r.ok) {
          return r.json();
        } else {
          throw new Error("Invalid username or password");
        }
      })
      .then((venue) => {
        setVenue(venue.username, venue.password);
       
        history.push("/venue/home"); 
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  }

  return (
        <div className="vendor-login">
            <h1>Venue Log In</h1>
            <form onSubmit={handleSubmit}>
              <label>Enter Username</label>
              <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
              <label>Enter Password</label>
              <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type="submit">Log In</button>
            </form>
        </div>
  );
}

export default VenueLogin;
