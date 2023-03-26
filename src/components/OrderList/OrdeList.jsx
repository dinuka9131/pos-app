import React from 'react'
import classes from './OrderList.module.css'

const OrdeList = (props) => {
  return (
    <div>
            <div className={classes.detailsOuter}>
                <span className={classes.orderNumber}>{props.Heading}</span>
                <span className={classes.orderStatus}style={{backgroundColor:props.Color}}>{props.Progress}</span>
            </div>
            <hr />
    </div>
  )
}

export default OrdeList