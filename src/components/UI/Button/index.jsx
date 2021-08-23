import React from 'react'

import classes from './Button.module.scss'

const Button = ({ children, type, onClick }) => {
  return <button onClick={onClick} className={classes.button} type={type}>{children}</button>
}

export default Button