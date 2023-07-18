import React, { useContext } from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import { TbCameraHeart } from "react-icons/tb";
import { SearchContext } from '../../contexts/Search';

function Header() {

  const {query, setQuery} = useContext(SearchContext)

  return (
    <div className='header-container'>
        <section className='header-left'>
          <Link to='/'><TbCameraHeart className='camera'/></Link>
          <Link to='/'>Polaroid Palette</Link>
        </section>
        <input onChange={(e)=>setQuery(e.target.value)}
        value={query} type='text' placeholder='Search' id='input'
        ></input>
          <Link to='/mypalette'>My Palette</Link>
    </div>
  )
}

export default Header