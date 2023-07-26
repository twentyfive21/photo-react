import {useState, createContext, useEffect} from 'react'


// creating context 
export const FavoritesContext = createContext()

export default function FavoritesContextProvider(props){
    const [favorites, setFavorites] = useState([])

    const addPhoto = (photoToAdd) => {
        console.log('adding', photoToAdd)
        // ADD photoToAdd to favorites array 
        let newFavorites = [...favorites, photoToAdd]
        console.log(newFavorites)
    }

    return(
        <FavoritesContext.Provider value={{favorites, setFavorites, addPhoto}}>
            {props.children}
        </FavoritesContext.Provider>
    )
}