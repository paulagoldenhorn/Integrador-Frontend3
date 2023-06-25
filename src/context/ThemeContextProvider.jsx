import { createContext, useState } from 'react'
import './ThemeContextProvider.css'

export const ThemeContext = createContext({})

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState('light')

  function changeTheme() {
    if (theme === 'light') {
        setTheme('dark')
    } 
    if (theme === 'dark') setTheme('light')
  }

  const value = {
    theme,
    changeTheme
  }

  return (
    <ThemeContext.Provider value={value}>
        <div className={theme}>
            {props.children}
        </div>
    </ThemeContext.Provider>
  )
}
