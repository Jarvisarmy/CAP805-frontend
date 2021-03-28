import React from 'react'
import { FaWindowClose } from "react-icons/fa";
import constant from './../constant.js';
import {useState} from 'react';


const GameItem = (props) => {
    const [selectedRating, setSelectedRating] = useState("");
  //  alert(JSON.stringify(props));
    const addRating = ()=>{      
                alert("AddRating")  
                alert("Game num"+props.item.gameNum)      
            const newRating={
               
                gameNum: props.item.gameNum,
                rating: selectedRating,
                userNum: 1
            }; 
            alert("New Rating"+JSON.stringify(newRating))      
            fetch(constant.databaseUrl+'/games/addRate', {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(newRating)
            })
            .then(res=>{
            })
            .catch(err=>{
                console.log(err);
            });
         
        
    }
    
    return (
        <div className="game-container">
            <div className="grid grid-col-2 game-top-area">        
      
                <p className="game-name">
                    {props.item.gameName}
                </p>
                {/*
                <FaWindowClose className="grid-x-right" onClick={()=>{
                    props.onDeleteGame(props.item.gameNum)
                }}/>
                */}
                <a onClick={()=>{
                    props.onDeleteGame(props.item.gameNum)
                }} href="/" >delete </a>
            </div>
            <a className="game-url" href={props.item.gameUrl}> {props.item.gameUrl} </a>
            <p className="game-description">
                {props.item.gameDescription}
            </p>
            <br/><br/>
            <p className="rate-description" onChange={(evt) => {
            
                setSelectedRating(evt.target.value);
              }}>
              Rate this Game <br/>
              <input className="radio-rating" type="radio" value="1" name="1" /> 1
              <input className="radio-rating" type="radio" value="2" name="2" /> 2
              <input className="radio-rating" type="radio" value="3" name="3" /> 3
              <input className="radio-rating" type="radio" value="4" name="3" /> 4
              <input className="radio-rating" type="radio" value="5" name="3" /> 5            
            </p>    
            <button className="radio-rating" onClick={addRating}>Submit</button>    
        </div>
    )
}

export default GameItem
