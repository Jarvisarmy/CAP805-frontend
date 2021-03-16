import React from 'react'

import {useContext} from "react";
import { useHistory } from 'react-router-dom';
import GameContext from "../context/GameContext";



const CategoryItem = (props) => {
    const history = useHistory();
    const goToGamesPage = () => history.push('/');
    const {games, storeFilteredGames} = useContext(GameContext);

  


const filterGames = ()=>{   
            storeFilteredGames(games)        
}


    return (
        <>
    
        <div className="container">       
     
      <span className = "categoryBox"> <img src={props.category.categoryImage} style={{width: "300px",height:"300px"}}  alt=""  onClick={()=>{

        
       // filterGames()
        goToGamesPage()
  }
      }
    ></img></span>
   <center> <span className="catogoryName">{props.category.categoryName}</span></center>
          </div>
        

            
       
</>
     

            
      
    )
}

export default CategoryItem
