import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';

function VenueSignup() {
    const [user, setUser] = useState(null)
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [location, setLocation] = useState("")
    const [venueName, setVenueName] = useState("")

    useEffect(() => {
        fetch("/check_session").then((r) => {
            if (r.ok) {
                r.json()
                .then((user) => setUser(user))
            }
        })
    }, [])


    function handleSignup(e){
        e.preventDefault()
        fetch("/signup/venue", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: name,
                password: password,
                location: location,
                venue_name: venueName
            })
        })
        .then(r => r.json())
        .then(data => setUser(data))
    }

    function handleLogout(){
        fetch("/logout", {
            method: "DELETE"
        })
        .then(setUser(null))
    }

    if(user){
        return (
            <>
            <h1>Welcome, {user.username}</h1>
            <button onClick={handleLogout}>Logout</button>
            </>
        )
    }
    else {
        return(
            <div className='vendor-signup'>
                <form className='login-form' onSubmit={handleSignup}>
                <h1 className="form-title">Sign up as a Venue</h1>
                <p className="venue-login-link">Already have a Venue account? <Link to='/login/venue'> Log in</Link></p>
                        <label>Create Username</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                        <label>Create Password</label>
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        <label>Enter Location</label>
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}></input>
                        <label>Enter Venue Name</label>
                        <input type="text" value={venueName} onChange={(e) => setVenueName(e.target.value)}></input>
                        <button type="submit">Log in</button>
                </form>
            </div>
        )
    }
}

export default VenueSignup;