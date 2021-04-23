import React from 'react'
import './../css/ProfilePage.css';
import {useContext} from 'react';
import GameContext from './../context/GameContext';
import {Link} from 'react-router-dom';
import constant from './../constant.js';
import {useState, useEffect} from 'react';
const UserGameEditList = (props) => {
    const {userLogin} = useContext(GameContext);
    const [list, setList] = useState([]);
    const deleteGame = (gNum)=>{
        fetch(constant.databaseUrl+'/games/delete/'+gNum,{
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            credentials: 'include'
        })
        .then(res=>{
            console.log("successfully delete");
            window.location.href="/profilePage";
        })
        .catch(err=>{
            console.log(err);
        });
        
    }
    useEffect(()=>{
        setList(props.lists);
    },[props.lists])
    return (
        <div className="user-game-edit-list-contianer">
            <div className="user-game-edit-list-title">{props.title}</div>
            <div className="user-game-edit-list-main">
                {list.map((item)=>{
                    return (
                    <div key={item.gameNum+item.gameName} className="user-game-item">
                        <div className="user-game-item-name">
                            {item.gameName}
                        </div>
                        <Link className="user-game-item-button" to={"/game/"+item.gameNum}> view info</Link>
                        <a className="user-game-item-button button-attention" onClick={()=>{
                            deleteGame(item.gameNum);
                            
                        }}> delete </a>
                    </div>
                )})}
            </div>
            <Link id="goback" className="hidden" to="/profilePage"></Link>
        </div>
    )
}

export default UserGameEditList
