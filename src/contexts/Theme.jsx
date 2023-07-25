import {useState, createContext, useEffect} from 'react'


export const ThemeContext = createContext()

export default function ThemeContextProvider(props) {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(
        ()=>{
            // check local storage to initialize state
            const storedDarkMode = localStorage.getItem('darkMode')
            if(storedDarkMode){
                // set if previous theme was chosen 
                setDarkMode(JSON.parse(storedDarkMode))
            }
        }, [] // runs once when page loads 
    )

    useEffect(
        ()=>{
            // save current state to localStorage 
            localStorage.setItem('darkMode', JSON.stringify(darkMode))
        }, [darkMode] // runs once when dark mode changes  
    )

    return(
        <ThemeContext.Provider value={{darkMode, setDarkMode, }}>
            {props.children}
        </ThemeContext.Provider>
    )
}