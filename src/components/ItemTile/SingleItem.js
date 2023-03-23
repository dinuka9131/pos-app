import React from 'react'
import classes from './SingleItem.module.css'
import reduceImg from '../../Assets/reduce.png'
import addImg from '../../Assets/add.png'

const SingleItem = () => {
  return (
    <div className={classes.outer}>
        <span className={classes.time}>15 Minutes</span>
        <div className={classes.titleHolder}>
            <span className={classes.mainTitle}>Roast Chicken</span>
            <span className={classes.subTitle}>Rs. 500.00</span>
        </div>
        <div className={classes.symbolOuter}>
            <img className={classes.reduce} src={reduceImg}/>
            <img className={classes.add} src={addImg}/>

        </div>
    </div>
  )
}

export default SingleItem