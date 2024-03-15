import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'

function App() {
  return (
    <>
      <div className='app'>
        <Header></Header>
        <Slider></Slider>
      </div>
    </>
  )
}

export default App
