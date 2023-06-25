import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { ThemeContext } from '../context/ThemeContextProvider'

function Navbar() {
  const { theme, changeTheme } = useContext(ThemeContext)

  return (
    <>
      {theme === 'dark' ? (
        <nav className={styles.navbar_dark}>
          <Link to='/home'>Home</Link>
          <Link to='/favs'>Favoritos</Link>
          <Link to='/contact'>Contacto</Link>
          <button onClick={changeTheme}>🌙</button>
        </nav>
      ) : (
        <nav className={styles.navbar}>
          <Link to='/home'>Home</Link>
          <Link to='/favs'>Favoritos</Link>
          <Link to='/contact'>Contacto</Link>
          <button onClick={changeTheme}>☀️</button>
        </nav>
      )}
    </>
  )
}
export default Navbar
