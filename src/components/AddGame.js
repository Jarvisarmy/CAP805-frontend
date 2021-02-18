import React from 'react'
import {useState} from 'react';
import constant from './../constant.js';
const AddGame = () => {
    const [gameName, setGameName] = useState("");
    const [gameUrl, setGameUrl] = useState("");
    const [gameDescription, setGameDescription] = useState("");
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
                gameDescription: gameDescription
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
            // clear the title and description
            setGameName("");
            setGameUrl("");
            setGameDescription("");
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
            <div className = "form-control-container">
                <label htmlFor="gameDescription"> Description </label>
                <textarea className="form-control" id="gameDescription" value={gameDescription} onChange={(event)=>{
                    setGameDescription(event.target.value);
                }}> </textarea>
                <span className="error">{errorDescription}</span>
            </div>
            <div className="form-control-container">
                <button className="btn btn-primary" type="button" onClick={addGame}>Save Game </button>
            </div>
        </form>
    </section>
    )
}

export default AddGame
