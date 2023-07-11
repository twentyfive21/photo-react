import React from 'react'
import './Homepage.css'
import banner from '../../assets/banner.jpg'


function Homepage() {
  return (
    <div className='homepage-container'>
      <img src={banner} className='homepage-banner'/>
    </div>
    
  )
}

export default Homepage