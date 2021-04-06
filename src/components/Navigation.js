import React from 'react'

const Navigation = () => {
    return (
        <>
        <div>
        <header>
        <nav>
        <ul>
            <li><a href="/">Home </a></li>
            <li><a href="/categoryPage"> Categorygit </a></li>            
            <li><a href="/profilePage"> Profile </a></li>
            <li><a href="/"> Games</a></li>
            <li><a href="/loginPage">Login/SignUp </a></li>
            <li><a href="">Contact </a> </li>
           

        </ul>
    </nav>
    </header>
        </div>
        <div>
        <nav>
        <ul>
            <li>
                <a href="/"> Public Page</a>
            </li>
            <li>
                <a href="/profilePage"> Profile Page</a>
            </li>
        </ul>
        </nav>
    </div>
        </>
    )
}

export default Navigation
