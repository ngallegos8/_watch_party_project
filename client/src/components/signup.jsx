import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function Signup() {
    const [user, setUser] = useState(null)
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();

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
        fetch("/signup/user", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: name,
                password: password
            })
        })
        .then(r => r.json())
        .then(data => {
            setUser(data);
            // Redirect to UserHome if signup is successful
            history.push("/user/home");
        })
        .catch(error => {
            // Handle error if needed
            console.error("Error during signup:", error);
        });
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
        return (
            <div className='user-signup'>
                <div className="header-top"></div>

                    <form className='login-form' onSubmit={handleSignup}>
                    <h1 className="form-title">Sign up for WatchParty</h1>
                    <p className='user-login-link'>Already a member? <Link to="/login/user">Log in</Link></p>

                    <div>
                        <label>Create Username</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                        <label>Create Password</label>
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        <button type="submit">Sign Up</button>
                    </form>
   
            </div>
        );
    };
};

export default Signup;