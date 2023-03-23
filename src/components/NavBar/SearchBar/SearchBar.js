import React from 'react'
import searchIcon from '../../../Assets/search.png'
import classes from './SearchBar.module.css'

const SearchBar = () => {
  return (
    <div className={classes.outer}>
        <img className={classes.image} src={searchIcon} />
        <input className={classes.input} type="text" placeholder='Search'/>
    </div>
  )
}

export default SearchBar