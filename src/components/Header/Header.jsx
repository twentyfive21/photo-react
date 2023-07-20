import React, { useContext } from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import { TbCameraHeart } from "react-icons/tb";
import { SearchContext } from '../../contexts/Search';
import { TbMoonStars } from "react-icons/tb";
import { MdSunny } from "react-icons/md";
import { ThemeContext } from '../../contexts/Theme';


function Header() {

  const {darkMode, setDarkMode} = useContext(ThemeContext)

  const {query, setQuery, setUserInput, setPageNum} = useContext(SearchContext)

  const handleSubmit = (e) => {
    setPageNum(1) 
    setQuery(e.target.value)
    setUserInput(e.target.value)
    setTimeout(()=> setQuery(''), 10000)
  }
const clearInput = () => {
  setPageNum(1)
  setUserInput('')
}
  
  return (
    <div className='header-container'>
        <section className='header-spacing'>
            <Link to='/'onClick={()=>clearInput()}><TbCameraHeart className='camera'/>
            </Link>
            <Link to='/' onClick={()=>clearInput()}>Polaroid Palette</Link>
        </section>
          <input onChange={handleSubmit}
          value={query} type='text' placeholder='Search' id='input'
          ></input>
          <section className='header-spacing'>
            <p className='theme-style'><TbMoonStars/></p>
            <Link to='/mypalette'>My Palette</Link>
          </section>
    </div>
  )
}

export default Header