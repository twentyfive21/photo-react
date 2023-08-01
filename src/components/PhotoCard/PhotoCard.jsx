import React, { useContext, useState, useEffect } from 'react'
import './PhotoCard.css'
import { MdFavoriteBorder , MdFavorite } from "react-icons/md";
import { FavoritesContext } from '../../contexts/FavoritesContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import Modal from 'react-modal'

function PhotoCard({photo}) {
  // access favorites global context use {} not []
  const {favorites, addPhoto, removePhoto} = useContext(FavoritesContext)
  const {darkMode, setDarkMode} = useContext(ThemeContext)
  // let isFavorite = false;
  const [isFavorite, setIsFavorite] = useState(false)
  
  // create state for modal 
    const [isOpen, setIsOpen] = useState(false)
    // Styling for modal 
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        border: "none",
      },
    };
    // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
    // this is for accessibility and screen readers 
    Modal.setAppElement(document.getElementById('root'));

  // checks if the card in favorites
  useEffect(
    ()=>{
      setIsFavorite(favorites.find(item => item.id === photo.id))
    },[favorites]
    )

  return (
    <div className={darkMode? 'cards-container cards-dark' : 'cards-container'}>
        <img src={photo?.src?.original} 
        onClick={()=>setIsOpen(true)}
        alt={photo?.alt}
        />
        <div className='text-center'>
        <p>{photo?.photographer}</p>
        <a href={photo?.photographer_url}>View Profile</a>
        <button onClick={()=>handleClick(photo)}>download</button>
        {
          isFavorite?
          <MdFavorite className='heart-icon heart-red'
          onClick={()=>removePhoto(photo?.id)}
          />
          :
          <MdFavoriteBorder className='heart-icon'
          onClick={()=>addPhoto(photo)} />
        }
        </div>
      <Modal
          isOpen={isOpen}
          style={customStyles}
          // closes the modal if you click outside the image 
          onRequestClose={()=>setIsOpen(false)}
          contentLabel="Picture Modal">
          <div className='pop-up' style={{backgroundColor:photo.avg_color}}>
            <img src={photo?.src?.original} />
          </div>
      </Modal>
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