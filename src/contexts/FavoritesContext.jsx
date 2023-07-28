import {useState, createContext, useEffect} from 'react'


// creating context 
export const FavoritesContext = createContext()

export default function FavoritesContextProvider(props){
    const [favorites, setFavorites] = useState([])


    useEffect(
        ()=> {
            // saving new fav to storage
            localStorage.setItem('favorites', JSON.stringify(favorites))
        },[favorites]
        )





    // adding photo to favorites   
    const addPhoto = photoToAdd => {
        // ADD photoToAdd to favorites array 
        let newFavorites = [...favorites, photoToAdd]
        // console.log('new favorites',newFavorites)
        setFavorites(newFavorites);
    }

    // removing photo from favorites state you cannot delete an
    // item from state so you must create a new array with filter 
    const removePhoto = photoId => {
        // remove photo from favorites
        let newFavorites = favorites.filter(item =>item.id !== photoId)
        // store new arr in favorites state 
        setFavorites(newFavorites)
    }

    return(
        <FavoritesContext.Provider value={{favorites, setFavorites, addPhoto, removePhoto}}>
            {props.children}
        </FavoritesContext.Provider>
    )
}