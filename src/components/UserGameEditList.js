import React from 'react'
import './../css/ProfilePage.css';
const UserGameEditList = (props) => {
    return (
        <div clsssName="user-game-edit-list-contianer">
            <div className="user-game-edit-list-title">{props.title}</div>
            <div className="user-game-edit-list-main">
                {props.lists.map((item)=>{
                    return (
                    <div key={item.gameNum} className="user-game-item">
                        <div className="user-game-item-name">
                            {item.gameName}
                        </div>
                        <a className="user-game-item-button"> view info</a>
                        <a className="user-game-item-button button-attention"> delete </a>
                    </div>
                )})}
            </div>
        </div>
    )
}

export default UserGameEditList
