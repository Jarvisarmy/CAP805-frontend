import React from 'react';
import GameItem from './GameItem.js';
import {useState, useEffect} from 'react';
import constant from './../constant.js';
const GameList = () => {
    const [games, setGames] = useState([]);
    const getAllGames = ()=>{
        fetch(constant.databaseUrl+'/games')
        .then(response=>response.json())
        .then(result=>{
            console.log(result);
            setGames(result);
        })
        .catch(err=>{
            console.log(err);
        });
    }
    const deleteGame = (gNum)=>{
        fetch(constant.databaseUrl+'/games/delete/'+gNum)
        .then(res=>{
            
        })
        .catch(err=>{
            console.log(err);
        });
        getAllGames();
    }
    useEffect(()=>{
        getAllGames();
    },[]);
    return (
        <section className="game-list-continer">
            {games.map((game)=>{
                return <GameItem key={game.gameNum} item={game} onDeleteGame={deleteGame} />
            })}
        </section>
    )
}

export default GameList
