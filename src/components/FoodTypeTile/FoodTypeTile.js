import React ,{useState} from 'react'
import classes from './FoodTypeTile.module.css'
import breakfast_image from '../../Assets/breakfast.png'

const FoodTypeTile = (props) => {

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
      style={{backgroundColor: !mouseState? '#b4fff6':'#47ecd9'}}
    >
        <img  className={classes.image}src={breakfast_image}/>
        <div className={classes.titleHolder}>
            <span className={classes.mainTitle}>{props.heading}</span>
            <span className={classes.subTitle}>13 Items</span>
        </div>
    </div>
  )
}

export default FoodTypeTile