import {useEffect, useState} from "react";

function Signup() {
    const [user, setUser] = useState(null)
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

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
        return (
            <div className='user-signup'>
                <div>
                    <h1>New User Account</h1>
                    <form onSubmit={handleSignup}>
                        <label>Create Username</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        <label>Create Password</label>
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        <button type="submit">Log in</button>
                    </form>
                </div>
            </div>
        );
    };
};

export default Signup;