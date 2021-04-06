import React from 'react'
import { FaWindowClose } from "react-icons/fa";


const GameItem = (props) => {
    
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
                <button className = "btn btn-danger" onClick={()=>{
                    props.onDeleteGame(props.item.gameNum)
                }} href="/" >delete </button>
            </div>
            <a className="game-url" href={props.item.gameUrl}> {props.item.gameUrl} </a>
            <p className="game-description">
                {props.item.gameDescription}
            </p>
        
        </div>
    )
}

export default GameItem
