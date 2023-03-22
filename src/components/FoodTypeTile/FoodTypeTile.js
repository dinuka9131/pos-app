import React ,{useState} from 'react'
import classes from './FoodTypeTile.module.css'
import breakfast_image from '../../Assets/breakfast.png'

const FoodTypeTile = () => {

  const [mouseState, setMouseEntered] = useState(false)

  const mouseEnterHandler = () => {
    setMouseEntered(true)
  }

  const mouseLeaveHandler = () => {
    setMouseEntered(false)
  }

  return (
    <div 
      className={classes.outer} 
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      style={{backgroundColor: !mouseState? 'yellow':'orange'}}
    >
        <img  className={classes.image}src={breakfast_image}/>
        <div className={classes.titleHolder}>
            <span className={classes.mainTitle}>Breakfast</span>
            <span className={classes.subTitle}>13 Items</span>
        </div>
    </div>
  )
}

export default FoodTypeTile