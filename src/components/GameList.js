import React from 'react';
import GameItem from './GameItem.js';
import {useState, useEffect} from 'react';
import {useContext} from 'react';
import GameContext from "../context/GameContext";
const GameList = () => {
    const {games,deleteGame} = useContext(GameContext);
    return (
        //To check
        <section className="game-list-continer">
            {games.map((game)=>{
                return <GameItem key={game.gameNum} item={game} onDeleteGame={deleteGame} />
            })}
        </section>
    )
}

export default GameList
