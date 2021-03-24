import AddGame from './../components/AddGame.js';
import Header from './../components/Header.js';
import Navigation from './../components/Navigation.js';
import UserGameEditList from './../components/UserGameEditList';
import constant from './../constant.js';
import './../css/ProfilePage.css';
import {useState,useEffect} from 'react';


const ProfilePage = (props) => {
    const [searchInput, setSearchInput] = useState("");
    const [games,setGames] = useState([]);
    // these is fake lists, will be replaced by the data pulled from database later
    const getGamesByUser = ()=> {
        fetch(constant.databaseUrl+'/games?user=1')
        .then(response=>response.json())
        .then(result=>{
            setGames(result);
        })
        .catch(err=>{
            console.log(err);
        });
    }
    useEffect(()=>{
        getGamesByUser()
    },[games]);
    return (
        <>
            <Header/>
            <Navigation/>
            <div className="user-profile-contianer">
                <div className="user-info-container">
                    <div className="user-name">
                        Jarvis Zhang
                    </div>
                    <div className="user-info-detail">
                        <div className ="user-info-item">
                            username@gmail.com
                        </div>
                        <div className ="user-info-item">
                            410-322-4255
                        </div>
                        <div className="user-info-item">
                            130 columbia st, Waterloo, Ontario
                        </div>
                        <a className="user-save" href="/profilePage">
                            save
                        </a>
                    </div>
                </div>
                <div className="user-games-container">
                    <input className="user-games-search" placeholder="Search" value={searchInput} >
                    </input>
                    <div className="user-games-pane">
                        <UserGameEditList title="user-review games" lists={games} />
                        <UserGameEditList title="approved games" lists={games} />
                    </div>
                </div>
                <a className="add-game-button" href="/addGame">Upload game</a>
            </div> 
            
        </>
    )
}

export default ProfilePage