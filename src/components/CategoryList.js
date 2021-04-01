import React from 'react'
import {useContext} from "react";
import CategoryItem from "./CategoryItem"
import GameContext from "../context/GameContext";


const CategoryList = () => {
    const {gameCategory,games} = useContext(GameContext)

    
    return (
        <div className="grid grid-column-2">
           
                {gameCategory.map((category) => (<CategoryItem key={category.categoryId}
                    category={category} games={games} >
                </CategoryItem>))}
                  </div>        
         )
}

export default CategoryList
