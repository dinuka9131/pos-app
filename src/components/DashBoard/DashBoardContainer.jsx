import React from 'react'
import classes from './DashBoardContainer.module.css'
import DashBoardTile from './DashBoardTile'

const DashBoardContainer = () => {
  return (
    <div className={classes.outer}>
        <DashBoardTile title='DashBoard'/>
        <DashBoardTile title='Orders'/>
        <DashBoardTile title='Tables'/>

    </div>
  )
}

export default DashBoardContainer