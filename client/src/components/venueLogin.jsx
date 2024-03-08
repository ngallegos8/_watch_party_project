import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
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
            <div className="header-top"></div>
            <form className='login-form' onSubmit={handleSubmit}>
            <h1 className="form-title">Venue Log In</h1>
            <p className="venue-signup-link">Don't have a Venue account yet? <Link to='/signup/venue'> Sign up</Link></p>
              <label>Enter Username</label>
              <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
              <label>Enter Password</label>
              <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type="submit">Log In</button>
              <p className='user-signup-link'><Link to="/">Go back to Home</Link></p>
            </form>
        </div>
  );
}

export default VenueLogin;
