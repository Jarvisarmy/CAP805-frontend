import {useState, useEffect} from 'react';

import './../css/App.css';
import GameContext from "../context/GameContext";
import constant from './../constant.js';
import PublicPage from './../pages/PublicPage';
import ProfilePage from './../pages/ProfilePage';
import LoginPage from './../pages/LoginPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    const [games, setGames] = useState([]);
    const getAllGames = ()=>{
        fetch(constant.databaseUrl+'/games')
        .then(response=>response.json())
        .then(result=>{
            console.log(result);
            setGames(result);
        })
        .catch(err=>{
            console.log(err);
        });
    }
    const deleteGame = (gNum)=>{
        fetch(constant.databaseUrl+'/games/delete/'+gNum)
        .then(res=>{
            
        })
        .catch(err=>{
            console.log(err);
        });
        getAllGames();
        
    }
    useEffect(()=>{
        getAllGames();
    },[]);
    return (
        <>
        <GameContext.Provider value={{games, getAllGames, deleteGame, }}>
         
            <Router>
                <Switch>
                    <Route exact path="/">
                        <PublicPage />
                    </Route>
                    <Route path="/profilePage">
                        <ProfilePage />
                    </Route>
                    <Route path="/loginPage">
                        <LoginPage />
                    </Route>
                </Switch>
            </Router>
        </GameContext.Provider>
        </>
)};

export default App;
