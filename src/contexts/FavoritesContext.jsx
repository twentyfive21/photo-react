import {useState, createContext, useEffect} from 'react'


// creating context 
export const FavoritesContext = createContext()

export default function FavoritesContextProvider(props){
    const [favorites, setFavorites] = useState([])

    // adding photo to favorites
    const addPhoto = photoToAdd => {
        // ADD photoToAdd to favorites array 
        let newFavorites = [...favorites, photoToAdd]
        // console.log('new favorites',newFavorites)
        setFavorites(newFavorites);
    }

    // removing photo from favorites you cannot delete 
    // an item from state so you must create a new array with filter 
    const removePhoto = photoId => {
       setFavorites(favorites.filter(item =>item.id !== photoId))
    }

    return(
        <FavoritesContext.Provider value={{favorites, setFavorites, addPhoto, removePhoto}}>
            {props.children}
        </FavoritesContext.Provider>
    )
}