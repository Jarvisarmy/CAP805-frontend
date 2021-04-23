import React from 'react'
import { FaWindowClose } from "react-icons/fa";
import GameContext from "../context/GameContext";
import constant from './../constant.js';
import {useState} from 'react';
import { useContext } from "react";
import ModalContext from "../context/ModalContext";



const GameItem = (props) => {
    const { showModalMsg } = useContext(ModalContext);
    const {games,getGamesByCategoryId,user,userLogin,loginStatus} = useContext(GameContext);
    const [gamesbyCategory, setGamesBycategory] = useState([]);
    const [selectedRating, setSelectedRating] = useState("");

   // const [gamesById, setFilteredGames] = useState("");
    

    //alert(JSON.stringify(props));
   // alert(props.item.categoryId);

 
  
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
          setTimeout(function(){getGamesByCategoryId(props.item.categoryId) }, 2000);
     
        
          
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
 //alert (loginStatus)
 
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
             
            </div>
            <a className="game-url" href={props.item.gameUrl} target="_blank"> {props.item.gameUrl} </a>
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

    
       
    
            {loginStatus == true ? (
            <p className="rate-description" onChange={(evt) => {
            
                setSelectedRating(evt.target.value);
              }}>
              Rate this Game <br/>
              <input className="radio-rating" type="radio" value="1" name="rating" /> 1
              <input className="radio-rating" type="radio" value="2" name="rating" /> 2
              <input className="radio-rating" type="radio" value="3" name="rating" /> 3
              <input className="radio-rating" type="radio" value="4" name="rating" /> 4
              <input className="radio-rating" type="radio" value="5" name="rating" /> 5            
               
            <button className="radio-rating" onClick={addRating}
          >Submit</button>   
          </p> 
            ): (<p></p>)}
                
            </div>
            </>
    )
}

export default GameItem
