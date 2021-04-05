import React from 'react'
import './../css/ProfilePage.css';
import {useContext} from 'react';
import GameContext from './../context/GameContext';
const UserGameEditList = (props) => {
    const {deleteGame} = useContext(GameContext);
    return (
        <div className="user-game-edit-list-contianer">
            <div className="user-game-edit-list-title">{props.title}</div>
            <div className="user-game-edit-list-main">
                {props.lists.map((item)=>{
                    return (
                    <div key={item.gameNum} className="user-game-item">
                        <div className="user-game-item-name">
                            {item.gameName}
                        </div>
                        <a className="user-game-item-button" href={"/game/"+item.gameNum}> view info</a>
                        <a className="user-game-item-button button-attention" onClick={()=>{
                            deleteGame(item.gameNum);
                            window.location.href="/profilePage";
                        }}> delete </a>
                    </div>
                )})}
            </div>
        </div>
    )
}

export default UserGameEditList
