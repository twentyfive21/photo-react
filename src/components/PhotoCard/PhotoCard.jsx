import React from 'react'
import './PhotoCard.css'
import { MdFavoriteBorder , MdFavorite } from "react-icons/md";

function PhotoCard({photo}) {
  let isFavorite = false;
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
          <MdFavoriteBorder className='heart-icon'/>
        }
        </div>
    </div>
  )
}

export default PhotoCard