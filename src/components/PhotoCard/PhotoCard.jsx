import React from 'react'
import './PhotoCard.css'
import { MdFavoriteBorder , MdFavorite } from "react-icons/md";

function PhotoCard({photo}) {
  return (
    <div className='cards-container'>
        <img src={photo.src.original} />
        <p>Photographer : {photo.photographer}</p>
        <a href={photo.photographer_url}>View Profile</a>
    </div>
  )
}

export default PhotoCard