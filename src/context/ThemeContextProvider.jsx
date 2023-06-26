import { createContext, useState } from 'react'

export const ThemeContext = createContext({})

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState('light')

  function changeTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
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
