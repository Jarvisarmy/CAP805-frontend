import {useState, useEffect} from 'react';

import './../css/App.css';
import GameContext from "../context/GameContext";
import constant from './../constant.js';
import PublicPage from './../pages/PublicPage';
import ProfilePage from './../pages/ProfilePage';
import CategoryPage from './../pages/CategoryPage';

import action from '../img/action.jpg';
import adventure from '../img/adventure.jpeg';
import shooter from '../img/shooter.jpg';
import strategy from '../img/strategy.jpg';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    const [games, setGames] = useState([]);

   
    const [gameCategory, setGameCategory] = useState([]);


    const getGamesbyCategory=(inputCategoryId)=>
    {    
      let gamesList = games.filter((game)=>{     
      return game.categoryId===inputCategoryId
    }
    )
return gamesList;
}

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

    const getAllCategory = ()=>{
      
        fetch(constant.databaseUrl+'/categories')
        .then(response=>response.json())
        .then(result=>{
            console.log(result);
            setGameCategory(result);
        })
        .catch(err=>{
            console.log(err);
        });
    }
    useEffect(()=>{
        getAllCategory();
    },[]);
 
    return (
        <>
        <GameContext.Provider value={{games, getAllGames, deleteGame,gameCategory,getGamesbyCategory }}>
         
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
                </Switch>
            </Router>
        </GameContext.Provider>
        </>
)};

export default App;
