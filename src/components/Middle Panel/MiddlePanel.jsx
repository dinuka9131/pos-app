import React from 'react'
import FoodTileContainer from '../FoodTypeTile/FoodTileContainer'
import ItemTileContainer from '../ItemTile/ItemTileContainer'
import SearchBar from '../NavBar/SearchBar/SearchBar'
import classes from './MiddlePanel.module.css'

const MiddlePanel = () => {
  return (
    <div className={classes.outer}>
        <SearchBar/>
        <FoodTileContainer/>
        <hr className={classes.hr}/>
        <ItemTileContainer/>
    </div>
  )
}

export default MiddlePanel