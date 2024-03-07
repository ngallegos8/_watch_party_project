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
                    <Link to="/signup/user"> <button >Join WatchParty</button> </Link><p></p>
                    <p>Sign up to join the fun!</p>
                    <Link to="/login/user"> <button >User Login</button> </Link><p></p>
                </div>

                <div>
                    <h3>Venue</h3>
                    <Link to="/signup/venue">   <button>Join WatchParty Pro</button> </Link><p></p>
                    <p>Sign up as a venue to host events</p>
                    <Link to="/login/venue">   <button>Venue Login</button>    </Link><p></p>
                </div>
            </div>
        </div>
    );
};

export default Home;


