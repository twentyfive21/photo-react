import {useState, createContext} from 'react'

    //  create context 
    export const SearchContext = createContext()

    export function SearchContextProvider(props){
          // setting state for query search
    const [query, setQuery] = useState('')
    const [userInput, setUserInput] = useState('')

    
    return(
        <SearchContext.Provider value={{query, setQuery, userInput, setUserInput}}>
            {props.children}
        </SearchContext.Provider>
        )
    }
