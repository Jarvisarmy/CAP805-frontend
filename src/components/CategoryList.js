import React from 'react'
import {useContext} from "react";
import CategoryItem from "./CategoryItem"
import GameContext from "../context/GameContext";


const CategoryList = () => {
    const {gameCategory,games,getGamesbyCategory} = useContext(GameContext)

    
    return (
        <div className="grid grid-column-2">
           
                {gameCategory.map((category) => (<CategoryItem
                    category={category} games={games} getGamesbyCategory={getGamesbyCategory} >
                </CategoryItem>))}

                  </div>
         
     
    )
}

export default CategoryList
