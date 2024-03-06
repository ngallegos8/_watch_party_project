import React, {useState} from "react";
import { useHistory } from "react-router-dom";


function UserLogin( {onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory()

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
        <form onSubmit={handleSubmit}>
          <label>username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)}></input>
          <label>password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <button type="submit">Log In</button>
        </form>
      )
}

export default UserLogin;
