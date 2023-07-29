import './Favorites.css'
import React, {useContext, useState} from 'react'
import PhotoCard from '../../components/PhotoCard/PhotoCard'
import { FavoritesContext } from '../../contexts/FavoritesContext'
import { ThemeContext } from '../../contexts/ThemeContext';
import Modal from 'react-modal'

function Favorites() {
    // access favorites global context use {} not []
    const {darkMode} = useContext(ThemeContext)
    const {favorites} = useContext(FavoritesContext)

    // create state for modal 
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={darkMode?'favorites-container favorites-dark' : 'favorites-container'}>
      <h1>My Current Palette</h1> 
      <div className='favorites-center'>
        {
          favorites.length > 0 ?
          favorites.map(item => <PhotoCard key={item.id} photo={item}/>)
          :
          <h2 className={darkMode? 'heading-dark nothing-selected' : 'nothing-selected'}>Nothing currently selected in palette</h2>
        }
      </div>
    </div>
  )
}

export default Favorites