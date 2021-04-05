import {useState, useEffect} from 'react';

import './../css/App.css';
import GameContext from "../context/GameContext";
import ModalContext from "../context/ModalContext";
import constant from './../constant.js';
import PublicPage from './../pages/PublicPage';
import ProfilePage from './../pages/ProfilePage';
import CategoryPage from './../pages/CategoryPage';
import GamesPage from './../pages/GamesPage';
import AddGamePage from './../pages/AddGamePage';
import GameInfoPage from '../pages/GameInfoPage';

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

   
    const [gameCategory, setGameCategory] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    
    const [popupModaMessage, setPopupModalMessage] = useState({
        msg: '',
        visible: false
      });
    

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

      const showModalMsg = () => {
     
        setPopupModalMessage({"msg":"Rating Added successfully", "visible":true});
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

        const hidePopupModal = () => {
            setPopupModalMessage({
              msg: "",
              visible: false
            })
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
        getAllCategory();
        
    },[]);
 
    return (
        <>
        <GameContext.Provider value={{games, getAllGames, deleteGame,gameCategory,storeFilteredGames,filteredGames, userLogin,user }}>
        <ModalContext.Provider value = {{showModalMsg,popupModaMessage,hidePopupModal}}>
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
                        <AddGamePage />
                    </Route>
                    <Route path="/loginPage">
                        <LoginPage />
                    </Route>
                    <Route path="/signupPage">
                        <SignUpPage />
                    </Route>
                    <Route path="/game/:id" render={(props) => <GameInfoPage gameId={props.match.params.id} />} />
                </Switch>
            </Router>
            </ModalContext.Provider>
        </GameContext.Provider>
        </>
)};

export default App;
