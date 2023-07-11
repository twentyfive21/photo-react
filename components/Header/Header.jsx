import React from 'react'
import './Header.css'
import { TbCameraHeart } from "react-icons/tb";

function Header() {
  return (
    <div className='header-container'>
        <section className='header-left'>
        <TbCameraHeart className='camera'/>
        <h1>Polaroid Palette</h1>
        </section>
        <h2>My Palette</h2>
    </div>
  )
}

export default Header