import React from 'react'

import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';
import GamesList from '../components/GameList.js';
import PopupModal from '../components/PopupModal.js';

const GamesPage = () => {
    return (
        <div>
        <Header/>
        <Navigation/>
        <GamesList/>   
        <PopupModal  /> 
        </div>
    )
}

export default GamesPage

