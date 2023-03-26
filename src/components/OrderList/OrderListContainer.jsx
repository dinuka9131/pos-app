import React from 'react'
import OrdeList from './OrdeList'
import classes from './OrderListContainer.module.css'

const OrderListContainer = () => {
  return (
    <div className={classes.mainOuter}>
        <span className={classes.title}>TODAY ORDERS</span>
        <OrdeList Heading='#0-1026' Progress='IN-PROGRESS' Color='rgb(126, 166, 241)'/>
        <OrdeList Heading='#0-1027' Progress='CANCELLED' Color='rgb(231, 76, 56)'/>
        <OrdeList Heading='#0-1028' Progress='DONE' Color='rgb(89, 235, 121)'/>
        <OrdeList Heading='#0-1029' Progress='IN-PROGRESS' Color='rgb(126, 166, 241)'/>
        <OrdeList Heading='#0-1030' Progress='CANCELLED' Color='rgb(231, 76, 56)'/>
    </div>
  )
}

export default OrderListContainer