import { createContext, useState } from 'react'

export const ThemeContext = createContext({})

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  function changeTheme() {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else if (theme === 'dark') {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  const value = {
    theme,
    changeTheme,
  }

  return (
    <ThemeContext.Provider value={value}>
      <div className={theme}>
        {props.children}
      </div>
    </ThemeContext.Provider>
  )
}
