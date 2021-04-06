
import GameList from './../components/GameList.js';
import Header from './../components/Header.js';
import Navigation from './../components/Navigation.js';
import Home from './../components/Home.js';
import Footer from './../components/Footer.js';
import {useContext} from 'react';
import GameContext from "../context/GameContext";
const PublicPage = (props) => {
    const {games} = useContext(GameContext);
    
    return (
        <>
        <Header/>
        <Navigation/>
            <GameList list={games} />
            <Home/>
            <Footer/>
          
        
        </>
    )
}

export default PublicPage