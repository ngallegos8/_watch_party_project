import React from 'react';
import {Link, useParams} from "react-router-dom";

function NavBar(){
    return(
     <div>
        <nav className="navBar">
            <Link to="/">  Home    </Link>

            <Link to="/signup/user">  Create Account    </Link>

            <Link to="/signup/venue">   Create Venue    </Link>

            <Link to="/login/user">  User Login    </Link>

            <Link to="/login/venue">   Venue Login    </Link>
            
            
        </nav>
     </div>


    )


}
export default NavBar
