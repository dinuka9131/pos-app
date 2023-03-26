import React,{useState} from 'react'
import classes from './DashBoardTile.module.css'

const DashBoardTile = (props) => {

  const [mouseState, setMouseEnterd] = useState(false)

  const mouseEnterHandler = () => {
    setMouseEnterd(true)
  }

  const mouseLeaveHandler = () => {
    setMouseEnterd(false)
  }

  return (
    <div 
      className={classes.outer}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      style={{backgroundColor: !mouseState? 'rgb(43, 42, 42)': 'gray'}}
      >
        <span className={classes.title}>{props.title}</span>
    </div>
  )
}

export default DashBoardTile