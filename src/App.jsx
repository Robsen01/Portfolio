import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Background from './assets/Background2.png'

function App() {
  return (
    <>
      <div class='app'>
        <Header></Header>
        <Body></Body>
      </div>
    </>
  )
}

export default App
