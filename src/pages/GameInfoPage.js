import React from 'react';
import {useState,useEffect} from 'react';
import constant from './../constant.js';
const GameInfoPage = (props) => {
    const [game, setGame] = useState({
        gameName: "",
        gameUrl: "",
        gameDescription: "",
        gameCategory: ""
    });
    const getGameById = (id) =>{
        console.log(constant.databaseUrl+'/game/'+id);
        fetch(constant.databaseUrl+'/game/'+id)
        .then(response=>response.json())
        .then(result=>{
            setGame(result);
        })
        .catch(err=>{
            console.log(err);
        });
    }
    useEffect(()=>{
        getGameById(props.gameId);
    },[]);
        return (
            <div>
                <p>{game.gameName}</p>
                <p>{game.gameUrl}</p>
                <p>{game.gameDescription}</p>
                <p>{game.categoryId}</p>
            </div>
        )
}

export default GameInfoPage
