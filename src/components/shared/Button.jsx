import React from 'react'
import classes from './Button.module.css'

const Button = ({ onClick, children, color }) => {
  let selectedColor;

  switch(color) {
    case 'transparent':
      selectedColor = 'text-gray-800 bg-transparent hover:text-gray-300 hover:bg-gray-700';
      break;
    case 'gray':
      selectedColor = 'text-gray-800 bg-gray-400 hover:text-gray-200 hover:bg-gray-800';
      break;
  }

  return (
    <button onClick={onClick} className={`${classes.button} ${selectedColor}`}>
      { children }
    </button>
  )
}

export default Button