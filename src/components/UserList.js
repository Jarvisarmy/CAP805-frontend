import React from 'react'
import { FaWindowClose } from "react-icons/fa";


const GameItem = (props) => {
    
    return (
        <div className="game-container">
            <div className="grid grid-col-2 game-top-area">        
      
                <p className="user-name">
                    {props.item.userName}
                </p>
                {/*
                <FaWindowClose className="grid-x-right" onClick={()=>{
                    props.onDeleteGame(props.item.gameNum)
                }}/>
                */}
                <button className = "btn btn-danger"onClick={()=>{
                    props.onDeleteUser(props.item.userNum)
                }} href="/" >delete </button>
                <p>
                    First Name: {props.item.firstName}
                    <br></br>
                    Last Name: {props.item.lastName}
                    <br></br>
                    Email: {props.item.email}
                </p>
            </div>
        
        </div>
    )
}

export default GameItem
