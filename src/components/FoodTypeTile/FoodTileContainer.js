import React from 'react'
import classes from './FoodTileContainer.module.css'
import FoodTypeTile from './FoodTypeTile'
import img1 from '../../Assets/breakfast.png'
import img2 from '../../Assets/lunch.png'
import img3 from '../../Assets/dinner.png'
import img4 from '../../Assets/drinks.png'
import img5 from '../../Assets/dessert.png'
import img6 from '../../Assets/soup.png'

const FoodTileContainer = () => {
  return (
    <div className={classes.container}>
        <FoodTypeTile source={img1} heading='Breakfast' defColor='#b4fff6' onColor='#2fffe6'/>
        <FoodTypeTile source={img2} heading='Lunch' defColor='#a4ffb8' onColor='#45ff6e'/>
        <FoodTypeTile source={img3} heading='Dinner' defColor='#fff6a4' onColor='#ffea2c'/>
        <FoodTypeTile source={img4} heading='Drinks' defColor='#9bb7ff' onColor='#2764ff'/>
        <FoodTypeTile source={img5} heading='Desserts' defColor='#ffb4b4' onColor='#ff8282'/>
        <FoodTypeTile source={img6} heading='Soup' defColor='#fdb4ff' onColor='#fc7cff'/>
    </div>
  )
}

export default FoodTileContainer