import React from 'react'
import DashBoardContainer from '../DashBoard/DashBoardContainer'
import MainLogo from '../NavBar/MainLogo'
import OrderListContainer from '../OrderList/OrderListContainer'
import classes from './LeftPanel.module.css'

const LeftPanel = () => {

  return (
    <div className={classes.outer}>
        <MainLogo/>
        <DashBoardContainer/>
        <OrderListContainer/>
    </div>
  )
}

export default LeftPanel