import React from 'react'

import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';
import GamesList from '../components/GameList.js';

const GamesPage = () => {
    return (
        <div>
        <Header/>
        <Navigation/>
        <GamesList/>    
        </div>
    )
}

export default GamesPage

