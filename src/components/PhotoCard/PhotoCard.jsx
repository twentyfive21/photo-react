import React, { useContext, useState, useEffect } from 'react'
import './PhotoCard.css'
import { MdFavoriteBorder , MdFavorite } from "react-icons/md";
import { FavoritesContext } from '../../contexts/FavoritesContext';
import { ThemeContext } from '../../contexts/ThemeContext';


function PhotoCard({photo}) {
  // access favorites global context use {} not []
  const {favorites, addPhoto, removePhoto} = useContext(FavoritesContext)
  const {darkMode, setDarkMode} = useContext(ThemeContext)
  // let isFavorite = false;
  const [isFavorite, setIsFavorite] = useState(false)
  

  useEffect(
    ()=>{
      // is this card in favorites?
      setIsFavorite(favorites.find(item => item.id === photo.id))
    },[favorites]
    )


  return (
    <div className={darkMode? 'cards-container cards-dark' : 'cards-container'}>
        <img src={photo?.src?.original} />
        <div className='text-center'>
        <p>{photo?.photographer}</p>
        <a href={photo?.photographer_url}>View Profile</a>
        {
          isFavorite?
          <MdFavorite className='heart-icon'
          onClick={()=>removePhoto(photo.id)}
          />
          :
          <MdFavoriteBorder className='heart-icon'
          onClick={()=>addPhoto(photo)} />
        }
        </div>
    </div>
  )
}

export default PhotoCard
  // must be arrow func since you are passing a parameter into the func 
  // onClick={()=>addPhoto(photo)} />

  // adding object to an array of objects in state
  // you cannot push a new item to state, you must create a new array and use the spread (...) operator 
  // the newly created array is all of the current array plus the new item
  // setFavorites([...favorites, newCharacter])