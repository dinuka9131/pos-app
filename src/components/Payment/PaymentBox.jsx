import React from 'react'
import Button from './Button'
import classes from './PaymentBox.module.css'

const PaymentBox = () => {
  return (
    <div className={classes.mainOuter}>
        <div className={classes.subOuter}>
            <span>Sub Total</span>
            <span>Rs. 7895.36</span>
        </div>
        <hr />
        <div className={classes.taxOuter}>
            <span>Tax 10%</span>
            <span>Rs. 789.50</span>
        </div>
        <hr />
        <div className={classes.totalOuter}>
            <span>Total Payment</span>
            <br />
            <Button>Rs. 9500.00</Button>
        </div>
    </div>
  )
}

export default PaymentBox