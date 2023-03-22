import React from 'react'
import classes from './FoodTypeTile.module.css'
import breakfast_image from '../../Assets/breakfast.png'

const FoodTypeTile = () => {
  return (
    <div className={classes.outer}>
        <img  className={classes.image}src={breakfast_image}/>
        <span className={classes.mainTitle}>Breakfast</span>
        <span className={classes.subTitle}>13 Items</span>
    </div>
  )
}

export default FoodTypeTile