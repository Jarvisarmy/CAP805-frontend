
import GameList from './../components/GameList.js';
import Header from './../components/Header.js';
import Navigation from './../components/Navigation.js';
import {useContext} from 'react';
import GameContext from "../context/GameContext";
const PublicPage = (props) => {
    const {games} = useContext(GameContext);
    
    return (
        <>
        <Header/>
        <Navigation/>
            <GameList list={games} />
        
        </>
    )
}

export default PublicPage