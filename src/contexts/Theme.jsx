import {useState, createContext} from 'react'
import { TbMoonStars } from "react-icons/tb";
import { MdSunny } from "react-icons/md";
import { ThemeContext } from './Theme';

export const ThemeContext = createContext()

export default function ThemeContextProvider(props) {
    const [darkMode, setDarkMode] = useState(false)

    return(
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            {props.children}
        </ThemeContext.Provider>
    )
}