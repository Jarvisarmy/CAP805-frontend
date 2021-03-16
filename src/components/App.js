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

    const gameCategoryInit = [{
        "id": 1,
        "categoryName": "Action",
        "categoryImage": action,
         
      },
      {
        "id": 2,
        "categoryName": "Adventure",
        "categoryImage": adventure,
       
      },
      {
        "id": 3,
        "categoryName": "Strategy",
        "categoryImage": strategy,
        
      },
      {
        "id": 4,
        "categoryName": "Shooter",
        "categoryImage": shooter,
     
      }
    
    ];
    const [gameCategory, setGameCategory] = useState(gameCategoryInit);


    const getGamesbyCategory=(inputCategoryId)=>
    {
     // alert("Input CategoryId"+inputCategoryId)
      let gamesList = games.filter((game)=>{
      //  alert("Product:"+JSON.stringify(product));
      return game.categoryId===inputCategoryId
    }
    )
//alert("Product List"+JSON.stringify(productList))
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
