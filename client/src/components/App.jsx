import React, { useEffect, useState } from "react";
import { Switch, Route, Routes, createBrowserRoute, RouterProvider, BrowserRouter } from "react-router-dom";
import NavBar from './navBar'
import Signup from'./signup'
import VenueSignup from './venue_signup'
import Home from './Home'
import UserLogin from './userLogin'
import VenueLogin from './venueLogin'
<<<<<<< HEAD
import UserHome from './UserHome'
import VenueHome from './VenueHome'

=======
>>>>>>> alan
//import UserLogin from './userLogin'




function App() {
  const [user, setUser] = useState(null);
<<<<<<< HEAD
  // const [venue, setVenue] = useState(null);
  console.log(UserHome)

=======
  const [venue, setVenue] = useState(null);

  useEffect(() => {

    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) return <UserLogin onLogin={setUser} />;

>>>>>>> alan
  // useEffect(() => {

  //   fetch("/check_session").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // if (!user) return <UserLogin onLogin={setUser} />;

  // useEffect(() => {

  //   fetch("/check_session").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // if (!user) return <UserLogin onLogin={setUser} />;

  //  useEffect(() => {

  //   fetch("/check_session").then((r) => {
  //      if (r.ok) {
  //        r.json().then((venue) => setVenue(venue));
  //      }
       
  //    });
  //  }, []);

  //   if (!venue) return <VenueLogin onLogin={setVenue} />;

 
  return(
    <BrowserRouter>
      <NavBar/>
  
    
          <Switch>

          <Route exact path="/signup/user">
            <Signup />
          </Route>
          <Route exact path="/signup/venue">
            <VenueSignup />
          </Route>
          <Route exact path="/login/user">
            <UserLogin onLogin={setUser}/>
          </Route>
          <Route exact path="/login/venue">
            <VenueLogin />
            {/* <VenueLogin onLogin={setVenue}/> */}
          </Route>
<<<<<<< HEAD
          <Route exact path="/user/home">
            <UserHome onLogin={setUser}/>
          </Route>
          <Route exact path="/venue/home">
            <VenueHome />
          </Route>
=======
>>>>>>> alan
          <Route path="/">
            <Home/>
          </Route>
          </Switch>
     
        

    </BrowserRouter>


  );

}

export default App