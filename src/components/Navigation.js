import React from 'react'
import {useContext} from 'react';
import GameContext from "../context/GameContext";
import {Link} from "react-router-dom"


const Navigation = () => {
    const {userLogout} = useContext(GameContext);
    const {loginStatus} = useContext(GameContext);
    console.log(loginStatus);
    const logout = ()=>{
        userLogout();
        <Link to="/loginPage"></Link>
    }
   // <li><a href="/loginPage"> login/signup</a></li>
    return (
        <>
        <div>
        <header>
        <nav>
        <ul>
            <li><Link to = "/">Home</Link></li> 
            <li><Link to = "/profilePage">Profile</Link></li>
            <li><Link to = "/categoryPage">Games</Link></li>
            {!loginStatus ? <li><Link to = "/loginPage">login/signup</Link></li> : <li><button type="button" onClick = {logout} className="btn  login-btn btn-primary" >Log Out</button></li>}
            <li><a href="">Contact </a> </li>
           

        </ul>
    </nav>
    </header>
        </div>
        <div>
        <nav>
        
        </nav>
    </div>
        </>
    )
}

export default Navigation
