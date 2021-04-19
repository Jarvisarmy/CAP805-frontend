import React from 'react'
import {useContext} from 'react';
import GameContext from "../context/GameContext";



const Navigation = () => {
    const {userLogout} = useContext(GameContext);
    const {loginStatus} = useContext(GameContext);
    console.log(loginStatus);
    const logout = ()=>{
        userLogout();
    }
   // <li><a href="/loginPage"> login/signup</a></li>
    return (
        <>
        <div>
        <header>
        <nav>
        <ul>
            <li><a href="/">Home </a></li> 
            <li><a href="/profilePage"> Profile </a></li>
            <li><a href="/categoryPage"> Games</a></li>
            {!loginStatus ? <li><a href="/loginPage">Login/SignUp </a></li> : <li><button type="button" onClick = {logout} className="btn  login-btn btn-primary" >Log Out</button></li>}
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
