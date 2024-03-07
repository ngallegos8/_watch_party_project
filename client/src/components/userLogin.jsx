import React, {useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


function UserLogin( {onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory()
    const [user, setUser] = useState(null);


    useEffect(() => {

        fetch("/check_session").then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
          }
        });
      }, []);
    

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            return r.json();
          } else {
            throw new Error("Invalid username or password");
          } 
        })
        .then((user) => {
            onLogin(user.username, user.password);
            // Redirect to UserHome after successful login
            history.push("/user/home"); // Assuming the route for UserHome is '/user/home'
          })
          .catch((error) => {
            console.error("Login failed:", error);
          });
      }
    
      return(
        <div className="user-login">
            <h1>Log in to WatchParty</h1>
            <form onSubmit={handleSubmit}>
              <label>Enter Username</label>
              <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
              <label>Enter Password</label>
              <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
              <button type="submit">Log In</button>
            </form>
          </div>
      );
};

export default UserLogin;
