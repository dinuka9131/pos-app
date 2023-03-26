import React from 'react'
import CartItemContainer from '../Cart/CartItemContainer'
import PaymentBox from '../Payment/PaymentBox'
import classes from './RightPanel.module.css'

const RightPanel = () => {
  return (
    <div className={classes.outer}>
        <CartItemContainer/>
        <PaymentBox/>
    </div>
  )
}

export default RightPanel