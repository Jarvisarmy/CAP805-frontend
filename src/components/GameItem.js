import React from 'react'
import { FaWindowClose } from "react-icons/fa";
import GameContext from "../context/GameContext";
import constant from './../constant.js';
import {useState} from 'react';
import { useContext } from "react";
import ModalContext from "../context/ModalContext";



const GameItem = (props) => {
    const { showModalMsg } = useContext(ModalContext);
    const {user} = useContext(GameContext);
 
    const [selectedRating, setSelectedRating] = useState("");
   // const [gamesById, setFilteredGames] = useState("");
    

  //  alert(JSON.stringify(props));
    const addRating = ()=>{      
             
            const newRating={
               
                gameNum: props.item.gameNum,
                rating: selectedRating,
                userNum: 1
            }; 
          
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
         
          //  alert("Rating Added successfully")  
          showModalMsg();
          
    }
    
    const getGameById= (id) =>{
       
        fetch(constant.databaseUrl+'/game/'+id)
        .then(response=>response.json())
        .then(result=>{
              
   
        })
        .catch(err=>{
            console.log(err);
        });
    }
 
 
    return (
        <>
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
                <button className = "btn btn-danger" onClick={()=>{
                    props.onDeleteGame(props.item.gameNum)
                }} href="/" >delete </button>
            </div>
            <a className="game-url" href={props.item.gameUrl}> {props.item.gameUrl} </a>
            <p className="game-description">
                {props.item.gameDescription}
            </p>
            
          
            {props.item.rating !=null ?
            ( <p className="game_rating">
                Rating: {(props.item.rating).toFixed(1)}          
        </p>) : ( <p className="game_rating">
        Rating: {(props.item.rating)}          
         </p>) }
        <br/>
            {user.userName ==="" ? (
            <p className="rate-description" onChange={(evt) => {
            
                setSelectedRating(evt.target.value);
              }}>
              Rate this Game <br/>
              <input className="radio-rating" type="radio" value="1" name="1" /> 1
              <input className="radio-rating" type="radio" value="2" name="2" /> 2
              <input className="radio-rating" type="radio" value="3" name="3" /> 3
              <input className="radio-rating" type="radio" value="4" name="3" /> 4
              <input className="radio-rating" type="radio" value="5" name="3" /> 5            
               
            <button className="radio-rating" onClick={addRating}
          >Submit</button>   
          </p> 
            ): (<p></p>)}
                
            </div>
            </>
    )
}

export default GameItem
