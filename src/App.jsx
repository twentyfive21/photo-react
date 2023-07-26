import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Homepage from './pages/Homepage/Homepage';
import Favorites from './pages/Favorites/Favorites';
import SearchContextProvider from './contexts/SearchContext';
import ThemeContextProvider  from './contexts/ThemeContext';
import FavoritesContextProvider from './contexts/FavoritesContext';


function App() {


  return (
    <>
    <BrowserRouter>

    <FavoritesContextProvider>
    <ThemeContextProvider>
    <SearchContextProvider>
      <Header />
      <Routes>
     
      <Route path='/' element={<Homepage />} />
      <Route path='/mypalette' element={<Favorites />} />

      </Routes>
      <Footer />
      </SearchContextProvider>
      </ThemeContextProvider>
      </FavoritesContextProvider>

    </BrowserRouter>
    </>
  )
}

export default App
