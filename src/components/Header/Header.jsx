import React, { useContext } from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import { TbCameraHeart } from "react-icons/tb";
import { SearchContext } from '../../contexts/Search';

function Header() {

  const {query, setQuery, setUserInput} = useContext(SearchContext)

  const handleSubmit = (e) => {
    setQuery(e.target.value)
    setUserInput(e.target.value) 
    setTimeout(()=> setQuery(''), 8000)
  }

  
  return (
    <div className='header-container'>
        <section className='header-left'>
          <Link to='/'onClick={()=>setUserInput('')}><TbCameraHeart className='camera'/>
          </Link>
          <Link to='/' onClick={()=>setUserInput('')}>Polaroid Palette</Link>
        </section>
        <input onChange={handleSubmit}
        value={query} type='text' placeholder='Search' id='input'
        ></input>
          <Link to='/mypalette'>My Palette</Link>
    </div>
  )
}

export default Header