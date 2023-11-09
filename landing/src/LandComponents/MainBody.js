import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import './MainBody.css'

const MainBody = () => {
  return (
    <>
    <div className='Main-Container'>
      <Navbar/>
    </div>
    <div className='hero'>
      <Hero/>
    </div>
  </>)
}

export default MainBody