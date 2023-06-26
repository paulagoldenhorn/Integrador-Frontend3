import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { ThemeContext } from '../context/ThemeContextProvider'

function Navbar() {
  const { theme, changeTheme } = useContext(ThemeContext)

  return (
    <nav className={styles[theme]}>
      <Link to='/'>Home</Link>
      <Link to='/favs'>Favoritos</Link>
      <Link to='/contact'>Contacto</Link>
      {theme === 'light' ? (
        <button onClick={changeTheme}>☀️</button>
      ) : (
        <button onClick={changeTheme}>🌙</button>
      )}
    </nav>
  )
}
export default Navbar
