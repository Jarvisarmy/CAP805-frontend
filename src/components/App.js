import {useState, useEffect} from 'react';

import './../css/App.css';
import GameContext from "../context/GameContext";
import constant from './../constant.js';
import AdminPage from './../pages/AdminPage';
import PublicPage from './../pages/PublicPage';
import ProfilePage from './../pages/ProfilePage';
import CategoryPage from './../pages/CategoryPage';
import GamesPage from './../pages/GamesPage';
import AddGame from './../components/AddGame';

import action from '../img/action.jpg';
import adventure from '../img/adventure.jpeg';
import shooter from '../img/shooter.jpg';
import strategy from '../img/strategy.jpg';

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
    const [unApprovedGames, setUnApproveGames] = useState([]);
    const [users, setUsers] = useState([]);
    const [gameCategory, setGameCategory] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);

    const getGamesbyCategory=(inputCategoryId)=>
    {    
        let gamesList = games.filter((game)=>{     
            return game.categoryId===inputCategoryId
        })
        return gamesList;
    }

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
            storeFilteredGames(games);
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

    const storeFilteredGames = (filteredGames) => {
        setFilteredGames(filteredGames);
      }


    useEffect(()=>{
        getAllGames();
    },[]);

    const getAllCategory = ()=>{
      
        fetch(constant.databaseUrl+'/categories')
        .then(response=>response.json())
        .then(result=>{
            console.log(result);
            setGameCategory(result);})
            .catch(err=>{
                console.log(err);
            });
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
//fetch request for games for admin to approve
    const getUnApprovedGames = ()=>{
        fetch(constant.databaseUrl+'/adminPage')
        .then(response=>response.json())
        .then(result=>{
            console.log(result);
            setUnApproveGames(result);
        })
        .catch(err=>{
            console.log(err);
        });
    }
// approving a game
    const approveGame = (gameNum)=>{
        console.log(gameNum);
        console.log(constant.databaseUrl+'/adminPage/' + gameNum);
        fetch(constant.databaseUrl+'/adminPage/' + gameNum)
        .then(response=>response.json()).then(result=>result.json())
        .catch(err=>{
            console.log(err);
        });
        getUnApprovedGames();
    }

//getting all users

const getAllUsers = ()=>{
    fetch(constant.databaseUrl+'/adminPage/users')
    .then(response=>response.json())
    .then(result=>{
        console.log(result);
        setUsers(result);
    })
    .catch(err=>{
        console.log(err);
    });
}

const deleteUser = (uNum)=>{
    fetch(constant.databaseUrl+'/adminPage/delete/'+ uNum)
    .then(res=>{
    })
    .catch(err=>{
        console.log(err);
    });
    getAllUsers();
    
}
    useEffect(()=>{
        getAllGames();
        getAllCategory();
        getUnApprovedGames();
        getAllUsers();
        
    },[]);
 
    return (
        <>
        <GameContext.Provider value={{games, getAllGames, deleteGame,gameCategory,storeFilteredGames,filteredGames, userLogin, unApprovedGames, approveGame, users, deleteUser}}>
         
            <Router>
                <Switch>
                    <Route exact path="/">
                        <PublicPage />
                    </Route>
                    <Route path="/profilePage">
                        <ProfilePage />
                    </Route>
                    <Route exact path="/categoryPage">
                        <CategoryPage />
                    </Route>
                    <Route path="/games">
                        <GamesPage />
                    </Route>
                    <Route path="/addGame">
                        <AddGame />
                    </Route>
                    <Route path="/loginPage">
                        <LoginPage />
                    </Route>
                    <Route path="/signupPage">
                        <SignUpPage />
                    </Route>
                    <Route path="/adminPage">
                        <AdminPage />
                    </Route>
                </Switch>
            </Router>
        </GameContext.Provider>
        </>
)};

export default App;
