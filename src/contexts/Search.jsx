import {useState, createContext} from 'react'

    //  create context 
    export const SearchContext = createContext()

    export default function SearchContextProvider(props){
          // setting state for query search
    const [query, setQuery] = useState('')
    const [userInput, setUserInput] = useState('')
     // sets page one as default state for onload of both api fetches
     const [pageNum, setPageNum] = useState(1)

    
    return(
        <SearchContext.Provider value={{query, setQuery, userInput, setUserInput, pageNum, setPageNum}}>
            {props.children}
        </SearchContext.Provider>
        )
    }
