import {useState, useEffect} from 'react';

import './../css/App.css';
import GameContext from "../context/GameContext";
import constant from './../constant.js';
import PublicPage from './../pages/PublicPage';
import ProfilePage from './../pages/ProfilePage';
import LoginPage from './../pages/LoginPage';
import SignUpPage from './../pages/SignUpPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    const [games, setGames] = useState([]);
    const [user, setUser] = useState({
        userName : "",
        password : "",
    });
    
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

    const userLogin = (user)=>{
        fetch(constant.databaseUrl+'/loginPage', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(user)
        })
        .then(response=>response.json()).then(result=>{
            //result = setUser(result);
            //console.log(result[0]);
            let userObj = {
                user: result[0].userName,
                password: result[0].password
            }
            //console.log(userObj)
            setUser(userObj);
            console.log(user);
            //localStorage.setItem(JSON.stringify("user-info", result))
        })
        .catch(err=>{
            console.log(err);
        });
    }

    useEffect(()=>{
        getAllGames();
    },[]);
    return (
        <>
        <GameContext.Provider value={{games, getAllGames, deleteGame, userLogin, }}>
         
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
                    <Route path="/signupPage">
                        <SignUpPage />
                    </Route>
                </Switch>
            </Router>
        </GameContext.Provider>
        </>
)};

export default App;
