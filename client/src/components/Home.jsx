import React from 'react';
import {Link, useParams} from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <div>
                <h1>Welcome to WatchParty!</h1>
                <h2>The events platform — Where sports events & common interests become friendships</h2>
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

            <div className="homeDescription">
                <div className="homeContent">
                    <div className='home-testimonial'>
                        <h2>Fans</h2>
                        <p>Discover the ultimate gathering hub on WatchParty, where enthusiasts unite over shared passions, from thrilling sports game watch parties at local bars and restaurants to a wide array of local events. By signing up, not only can you align with fellow fans of your favorite teams, but you'll also gain exclusive access to FanWide promos including drink and food specials, discounts, and more. On the move? Let us connect you with the perfect spot to revel in the excitement, no matter where you are in the nation. Dive into a world of opportunities where checking in rewards you with specials, contest entries, and valuable rewards. Beyond sports, embrace your diverse interests—be it hiking, reading, networking, or skill-sharing—with thousands who share your enthusiasm. Every day brings a new event, a new chance to engage and enrich your experiences. Join WatchParty now, and step into a realm where your passions lead to extraordinary encounters.
                        </p>

                        <blockquote>“Sometimes you just need to find a spot to root for your team with your fellow fans. WatchParty makes it insanely easy and I especially like using this when I'm traveling across the country. Whoever made this app should get an outstanding grade on their Phase 4 project.”</blockquote>
                        <div className='citeContainer'>
                        <cite>David Doan - WatchParty User</cite>
                        <img className='citeImage' src='https://media.licdn.com/dms/image/C5603AQGknzaljBVrPw/profile-displayphoto-shrink_100_100/0/1657829258011?e=1715212800&v=beta&t=sv0qUHr9HbAzZjRh67fxWs_DhTh-mvS0ESOmb_hRW4w' alt='user headshot'></img>
                        </div>
                    </div>
                    <div className="homeImageContainer">
                        <h2>Our Partners</h2>
                        <img className="homeImage" src="https://preview.redd.it/nfl-team-partners-v0-9m1wbeswj7ub1.png?width=640&crop=smart&auto=webp&s=a98e3a4b89e889c440b64c77c8f7b9ed73dfa642" alt="Description of the image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;


