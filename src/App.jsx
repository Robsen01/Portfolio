import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import Body from './components/Body'

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Slider></Slider>
        <Body></Body>
      </div>
    </>
  )
}

export default App
