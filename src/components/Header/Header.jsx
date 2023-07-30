import './Header.css'
import React, { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { TbCameraHeart } from "react-icons/tb";
import { SearchContext } from '../../contexts/SearchContext';
import { TbMoonStars } from "react-icons/tb";
import { MdSunny } from "react-icons/md";
import { ThemeContext } from '../../contexts/ThemeContext';


function Header() {

  // activate the navigate function out of the object returned by useNavigate() & assigning it to a variable called navigate so we can use it in our component. This gives us access to the navigate function directly instead of having to call useNavigate everywhere.
  const navigate = useNavigate()
  const {darkMode, setDarkMode} = useContext(ThemeContext)
  const {query, setQuery, setUserInput, setPageNum} = useContext(SearchContext)

  const handleSubmit = e => {
    navigate('/')
    setPageNum(1) 
    setQuery(e.target.value)
    setUserInput(e.target.value)
    setTimeout(()=> setQuery(''), 15000)
  }
  const clearInput = () => {
  setPageNum(1)
  setQuery('')
  setUserInput('')
  }
  
  return (
    <div className={darkMode?'header-container header-dark' : 'header-container'}>
        <section className='header-spacing'>
            <Link to='/'onClick={()=>clearInput()}><TbCameraHeart className='camera'/>
            </Link>
            <Link to='/' onClick={()=>clearInput()}>Polaroid Palette</Link>
        </section>
          <input onChange={handleSubmit}
          value={query} type='text' placeholder='Search' id='input'
          ></input>
          <section className='header-spacing'>
            <p className='theme-style'
            onClick={() => setDarkMode(!darkMode)}>
              {
                darkMode?
                <TbMoonStars/>
                :
                <MdSunny/>
              }
            </p>
            <Link to='/mypalette'onClick={()=>clearInput()}>My Palette</Link>
          </section>
    </div>
  )
}

export default Header