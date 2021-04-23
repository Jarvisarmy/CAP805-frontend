import React from 'react'

const adminGameItem = (props) => {
    return (
        <div>
            <div className="game-container">
            <div className="grid grid-col-3 game-top-area">        
      
                <p className="game-name">
                    {props.item.gameName}
                </p>
                {/*
                <FaWindowClose className="grid-x-right" onClick={()=>{
                    props.onDeleteGame(props.item.gameNum)
                }}/>
                */}
                <button className="btn btn-danger"onClick={()=>{
                    props.onDeleteGame(props.item.gameNum)
                }} href="/adminPage" >delete </button>
            </div>
            <a className="game-url" href={props.item.gameUrl}> {props.item.gameUrl} </a>
            <p className="game-description">
                {props.item.gameDescription}
            </p>
        
        </div>
        </div>
    )
}

export default adminGameItem
