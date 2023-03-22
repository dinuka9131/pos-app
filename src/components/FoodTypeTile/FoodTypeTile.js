import React from 'react'
import classes from './FoodTypeTile.module.css'
import breakfast_image from '../../Assets/breakfast.png'

const FoodTypeTile = () => {
  return (
    <div className={classes.outer}>
        <img  className={classes.image}src={breakfast_image}/>
        <div className={classes.titleHolder}>
            <span className={classes.mainTitle}>Creakfast</span>
            <span className={classes.subTitle}>13 Items</span>
        </div>
    </div>
  )
}

export default FoodTypeTile