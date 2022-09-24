import React from 'react'
import ClipboardProvider from './context/ClipboardProvider'
import ClipboardForm from './components/ClipboardForm'
import ClipboardLists from './components/ClipboardLists'
import classes from './App.module.css'

const App = () => {
  return (
    <ClipboardProvider>
      <div className={classes.app}>
        <ClipboardForm />
        <ClipboardLists />
      </div>
    </ClipboardProvider>
  )
}

export default App