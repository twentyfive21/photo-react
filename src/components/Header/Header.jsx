import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import { TbCameraHeart } from "react-icons/tb";

function Header() {
  return (
    <div className='header-container'>
        <section className='header-left'>
          <Link to='/'><TbCameraHeart className='camera'/></Link>
          <Link to='/'>Polaroid Palette</Link>
        </section>
        <input type='text' placeholder='Search' id='input' name='search'></input>
          <Link to='/mypalette'>My Palette</Link>
    </div>
  )
}

export default Header