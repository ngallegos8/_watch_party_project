import React from 'react';
import {Link, useParams} from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <div>
                <h1>Welcome to WatchParty!</h1>
                <h2>The events platform — Where interests become friendships</h2>
            </div>

            <div className="user-venue-container"> 
                <div>
                    <h3>User</h3>
                    <Link to="/signup/user"> <button className='btn'>Join WatchParty</button> </Link>
                    <p className="text">Sign up to join the fun!</p>
                    <Link to="/login/user"> <button className="btn">User Login</button> </Link>
                </div>

                <div>
                    <h3>Venue</h3>
                    <Link to="/signup/venue">   <button className='btn'>Join WatchParty Pro</button> </Link>
                    <p className="text">Sign up as a venue to host events</p>
                    <Link to="/login/venue">   <button className="btn">Venue Login</button>    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;


