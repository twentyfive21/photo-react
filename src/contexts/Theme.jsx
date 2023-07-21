import {useState, createContext} from 'react'


export const ThemeContext = createContext()

export default function ThemeContextProvider(props) {
    const [darkMode, setDarkMode] = useState(true)

    return(
        <ThemeContext.Provider value={{darkMode, setDarkMode, }}>
            {props.children}
        </ThemeContext.Provider>
    )
}