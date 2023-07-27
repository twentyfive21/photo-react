import React, {useContext} from 'react'
import './Favorites.css'
import { FavoritesContext } from '../../contexts/FavoritesContext'
import PhotoCard from '../../components/PhotoCard/PhotoCard'

function Favorites() {
  // display fav photos get from context 
    // access favorites global context use {} not []
    const {favorites} = useContext(FavoritesContext)
  return (
    <div className='favorites-container'>
      <h1>My Palette</h1> 
      <div className='favorites-center'>
        {
          favorites.map(item => <PhotoCard key={item.id} photo={item}/>)
        }
      </div>
    </div>
  )
}

export default Favorites