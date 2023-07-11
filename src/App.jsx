import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Homepage from './pages/Homepage/Homepage';
import Favorites from './pages/Favorites/Favorites';


function App() {


  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
     
      <Route path='/' element={<Homepage />} />
      <Route path='/mypalette' element={<Favorites />} />

      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
