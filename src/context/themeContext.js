import React,{createContext,useState} from 'react'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
    const [isMode,setIsMode] = useState(false)
    return (
        <ThemeContext.Provider value={{isMode,setIsMode}}>
            {children}
        </ThemeContext.Provider>
    )

}
