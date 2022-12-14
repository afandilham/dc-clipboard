import React from 'react'
import classes from './ClipboardItem.module.css'

const ClipboardItem = (props) => {
  const deleteItem = (event) => {
    event.preventDefault();
    props.removeEvent(props.item);
  };

  return (
    <div className={classes['clipboard-item']} key={props.index}>
      <img src={props.item} alt={props.item} onClick={() => props.copyEvent(props.item)} />
      <form onSubmit={deleteItem} className={classes.form}>
        <button className={classes.button}>
          <svg
            className="w-6 h-6 text-red-200 hover:text-red-500 border-gray-700"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </div>
  )
}

export default ClipboardItem