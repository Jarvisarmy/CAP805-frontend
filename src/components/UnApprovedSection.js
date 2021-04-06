import React from 'react'
import {useContext} from 'react';
import GameContext from "../context/GameContext";
import ApproveItem from './ApproveItem.js';
import UserList from './UserList.js';
import GameItem from './GameItem.js';
const UnApprovedSection = () => {
    const {unApprovedGames, deleteGame, deleteUser, approveGame, users, games, filteredGames} = useContext(GameContext);
    return (
        <div className = "admin-layout grid grid-col-3 ">
            <section className = "unapproved-list">
            {unApprovedGames.map((game)=>{
                return <ApproveItem key={game.gameNum} item={game} onDeleteGame={deleteGame} onApproveGame = {approveGame}/>
            })}

            </section>
            <section className = "user-list">
            {users.map((user)=>{
                return <UserList key={user.userNum} item={user} onDeleteUser={deleteUser}/>
            })}
            </section>

            <section className="game-list-continer">
             {games.map((game)=>{
                return <GameItem key={game.gameNum} item={game} onDeleteGame={deleteGame} />
            })}
        </section>
            
        </div>
    )
}

export default UnApprovedSection
