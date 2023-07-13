import React from 'react'
import './PhotoCard.css'
import { MdFavoriteBorder , MdFavorite } from "react-icons/md";

function PhotoCard({photo}) {
  return (
    <div className='cards-container'>
        <img src={photo?.src?.original} />
        <div className='text-center'>
        <p>Photographer : {photo?.photographer}</p>
        <a href={photo?.photographer_url}>View Profile</a>
        </div>
    </div>
  )
}

export default PhotoCard