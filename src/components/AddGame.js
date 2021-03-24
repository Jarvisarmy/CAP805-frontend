import React from 'react'
import {useState} from 'react';
import constant from './../constant.js';
import {useContext} from 'react';
import GameContext from "../context/GameContext";
const AddGame = () => {
    const {getAllGames,gameCategory} = useContext(GameContext);
    const [gameName, setGameName] = useState("");
    const [gameUrl, setGameUrl] = useState("");
    const [gameDescription, setGameDescription] = useState("");
    const [selectedGameCategory, setSelectedGameCategory] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorUrl, setErrorUrl] = useState("");
    const [errorDescription, setErrorDescription] = useState("");
    const validateForm = ()=>{
        return true;
    }
    const addGame = ()=>{
        if(validateForm()) {
                        
            const newGame={
                gameName: gameName,
                gameUrl: gameUrl,
                gameDescription: gameDescription,
                categoryId: parseInt(selectedGameCategory),
                // let assume all form is added by user 1 first, we can replace this after finish user cookie
                userNum: 1
            }; 
         
            fetch(constant.databaseUrl+'/games/add', {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(newGame)
            })
            .then(res=>{
            })
            .catch(err=>{
                console.log(err);
            });
            getAllGames();
            // clear the title and description
            setGameName("");
            setGameUrl("");
            setGameDescription("");
            setSelectedGameCategory("");
            
        }
    }
    return (
        <section>
        <form>
            <div className="form-control-container">
                <label htmlFor="gameName"> Game Name </label>
                <input className="form-control" type="text" id="gameName" value={gameName} onChange={(event)=>{
                    setGameName(event.target.value);
                }}/>
                <span className="error" >{errorName}</span>
            </div>
            <div className="form-control-container">
                <label htmlFor="gameUrl"> Game URL </label>
                <input className="form-control" type="text" id="gameUrl" value={gameUrl} onChange={(event)=>{
                    setGameUrl(event.target.value);
                }}/>
                <span className="error" >{errorUrl}</span>
            </div>
            <div className="form-control-container">             
            <label htmlFor="selectedGameCategory"> Category </label>
                <select id="selectedGameCategory" className="form-control" onChange={(evt) => {
            
                    setSelectedGameCategory(evt.target.value);
                  }}>
                    <option>Choose category</option>
        
                    {gameCategory.map((category) => (
        
                      <option value={category.categoryId} >{category.categoryName} </option>
                    )
                    )
                    }
                  </select>
            
            </div>
            <div className = "form-control-container">
                <label htmlFor="gameDescription"> Description </label>
                <textarea className="form-control" id="gameDescription" value={gameDescription} onChange={(event)=>{
                    setGameDescription(event.target.value);
                }}> </textarea>
                <span className="error">{errorDescription}</span>
            </div>
            <div className="form-control-container">
                <a type="button" onClick={addGame} href="/">Save Game </a>
            </div>
        </form>
    </section>
    )
}

export default AddGame
