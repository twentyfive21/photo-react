import React, { useContext } from 'react'
import './PhotoCard.css'
import { MdFavoriteBorder , MdFavorite } from "react-icons/md";
import { FavoritesContext } from '../../contexts/FavoritesContext';


function PhotoCard({photo}) {
  let isFavorite = false;

  // access favorites global context use {} not []
  const {favorites, addPhoto} = useContext(FavoritesContext)

  return (
    <div className='cards-container'>
        <img src={photo?.src?.original} />
        <div className='text-center'>
        <p>{photo?.photographer}</p>
        <a href={photo?.photographer_url}>View Profile</a>
        {
          isFavorite?
          <MdFavorite className='heart-icon'/>
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