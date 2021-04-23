import React from 'react';
import {useState,useEffect} from 'react';
import constant from './../constant.js';
import './../css/ProfilePage.css';
import GameContext from './../context/GameContext';
import {useContext} from 'react';
import {Link} from 'react-router-dom';


const GameInfoPage = (props) => {
    const [categoryName, setCategoryName] = useState("");
    const [game, setGame] = useState({
        gameName: "",
        gameUrl: "",
        gameDescription: "",
        categoryId: 0
    });
    const getGameById = (id) =>{
        console.log(constant.databaseUrl+'/game/'+id);
        fetch(constant.databaseUrl+'/game/'+id)
        .then(response=>response.json())
        .then(result=>{
            setGame(result);
            getCategoryNameByCategoryId(result.categoryId);

        })
        .catch(err=>{
            console.log(err);
        });
    }
    const getCategoryNameByCategoryId = (id)=>{
        if (id !== 0) {
            var name = [];
            fetch(constant.databaseUrl+'/categories')
            .then(response=>response.json())
            .then(result=>{
                name = result.filter(category=>category.categoryId === id);
                if (name.length === 0) {
                    setCategoryName('category of this game cannot be found');
                } else {
                    console.log(name[0].categoryName);
                    setCategoryName(name[0].categoryName);
                }
            })
            .catch(err=>{
                console.log(err);
                setCategoryName('category of this game cannot be found');
            });
        } else {
            setCategoryName('category of this game cannot be found');
        }
    }
    useEffect(()=>{
        getGameById(props.gameId);
    },[]);
        return (
            <div className="game-info-container">
                <p className="game-info-name">Game Name: {game.gameName}</p>
                <p className="game-info-url">Game URL: <a href={game.gameUrl} rel="">{game.gameUrl}</a></p>
                <p className="game-info-desc">Game Description: {game.gameDescription}</p>
                <p className="game-info-category">Game Type:{categoryName} </p>
                <Link className="back-button" to="/profilePage">Back</Link>
            </div>
        )
}

export default GameInfoPage
