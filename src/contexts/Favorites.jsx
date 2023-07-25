import {useState, createContext, useEffect} from 'react'


// creating context 
export const FavoritesContext = createContext()

export default function FavoritesContextProvider(props){
    const [favorites, setFavorites] = useState([])

    return(
        <FavoritesContext.Provider value={{favorites, setFavorites}}>
            {props.children}
        </FavoritesContext.Provider>
    )
}