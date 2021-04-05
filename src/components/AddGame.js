import React from 'react'
import {useState,useEffect} from 'react';
import constant from './../constant.js';
import {useContext} from 'react';
import GameContext from "../context/GameContext";
import "./../css/ProfilePage.css";
const AddGame = (props) => {
    const [gameCategory,setGameCategory] =useState([]);
    const [gameName, setGameName] = useState("");
    const [gameUrl, setGameUrl] = useState("");
    const [gameDescription, setGameDescription] = useState("");
    const [selectedGameCategory, setSelectedGameCategory] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorUrl, setErrorUrl] = useState("");
    const [errorDescription, setErrorDescription] = useState("");
    const [errorCategory,setErrorCategory] = useState("");
    const getAllCategory = ()=>{
      
        fetch(constant.databaseUrl+'/categories')
        .then(response=>response.json())
        .then(result=>{
            setGameCategory(result);
        })
        .catch(err=>{
         });
    }
    const validateForm = ()=>{
        var isValid = true;
        var reUrl = new RegExp(/^(http(s?):\/\/)?(www\.)+[a-zA-Z0-9\.\-\_]+(\.[a-zA-Z]{2,3})+(\/[a-zA-Z0-9\_\-\s\.\/\?\%\#\&\=]*)?$/);
        var reHttp = new RegExp(/^(http(s?):\/\/)(www\.)+[a-zA-Z0-9\.\-\_]+(\.[a-zA-Z]{2,3})+(\/[a-zA-Z0-9\_\-\s\.\/\?\%\#\&\=]*)?$/)
        if (gameName === "") {
            setErrorName("name cannot be empty")
            isValid = false;
        } else {
            setErrorName("");
        }
        if (!reUrl.test(gameUrl)) {
            setErrorUrl("the provided URL is not valid");
            isValid = false;
        } else {
            if (!reHttp.test(gameUrl)) {
                setErrorUrl("for safety, the URL must start with http or https");
                isValid=false;
            } else {
                setErrorUrl("");
            }
        }
        if (gameDescription.length < 100) {
            setErrorDescription("the description must contains at least 100 characters");
            isValid = false;
        } else {
            setErrorDescription("");
        }
        if (selectedGameCategory === "") {
            setErrorCategory("the category must be selected");
            isValid = false;
        } else {
            setErrorCategory("");
        }
        if (isValid) {
            setErrorName("");
            setErrorUrl("");
            setErrorCategory("");
            setErrorDescription("");
        }
        return isValid;
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
            .then(response=>response.json())
            .then(res=>{
                console.log("msg: "+res);
                if (res === "namefail") {
                    setErrorName("the game name already exists");
                } else if (res === "urlfail") {
                    setErrorUrl("the game URL already exists");
                } else if (res === "other") {
                    setErrorName("something wrong");
                    
                } else {
                    setGameName("");
                    setGameUrl("");
                    setGameDescription("");
                    setSelectedGameCategory("");
                    window.location.href="/profilePage";
                }
            })
            .catch(err=>{
                
            });
            
        }
    }
    useEffect(()=>{
        getAllCategory();
    },[])
    return (
        <section>
        <form>
            <div className="form-control-container">
                <label htmlFor="gameName"> Game Name </label>
                <input className="form-control" type="text" id="gameName" value={gameName} onChange={(event)=>{
                    setGameName(event.target.value);
                }}/>
                <span className="alert-content" >{errorName}</span>
            </div>
            <div className="form-control-container">
                <label htmlFor="gameUrl"> Game URL </label>
                <input className="form-control" type="text" id="gameUrl" value={gameUrl} onChange={(event)=>{
                    setGameUrl(event.target.value);
                }}/>
                <span className="alert-content" >{errorUrl}</span>
            </div>
            <div className="form-control-container">             
            <label htmlFor="selectedGameCategory"> Category </label>
                <select id="selectedGameCategory" className="form-control" onChange={(evt) => {
            
                    setSelectedGameCategory(evt.target.value);
                  }}>
                    <option>Choose category</option>
        
                    {gameCategory.map((category) => (
        
                        <option key={category.categoryId} value={category.categoryId} >{category.categoryName} </option>
                        )
                    )}
                  </select>
                  <span className="alert-content" >{errorCategory}</span>

            
            </div>
            <div className = "form-control-container">
                <label htmlFor="gameDescription"> Description </label>
                <textarea className="form-control" id="gameDescription" value={gameDescription} onChange={(event)=>{
                    setGameDescription(event.target.value);
                }}> </textarea>
                <span className="alert-content">{errorDescription}</span>
            </div>
            <div className="form-control-container">
                <a type="button" onClick={addGame}>Save Game </a>
                <a type="button" onClick={props.turnOffMadal}> cancel</a>
            </div>
        </form>
    </section>
    )
}

export default AddGame
