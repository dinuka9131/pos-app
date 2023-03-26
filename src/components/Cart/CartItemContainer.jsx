import React from 'react'
import CartItem from './CartItem'
import classes from './CartItemContainer.module.css'

const CartItemContainer = () => {
  return (
    <div className={classes.mainOuter}>
        <div>
            <span className={classes.table}>Table 05</span>
            <div className={classes.customerOuter}>
                <span className={classes.customerName}>Customer Name</span>
                <span className={classes.cashierId}>Cashier ID. C0145</span>
            </div>
        </div>
        <div className={classes.itemOuter}>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
        </div>
    </div>
  )
}

export default CartItemContainer