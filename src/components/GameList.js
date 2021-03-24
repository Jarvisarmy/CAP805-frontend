import React from 'react';
import GameItem from './GameItem.js';
import {useState, useEffect} from 'react';
import {useContext} from 'react';
import GameContext from "../context/GameContext";
const GameList = (props) => {
    const {deleteGame} = useContext(GameContext);
    return (
        <>
       
     
        <section className="game-list-continer">
             {props.list.map((game)=>{
                return <GameItem key={game.gameNum} item={game} onDeleteGame={deleteGame} />
            })}
        </section>
      
        </>
    )
}

export default GameList
