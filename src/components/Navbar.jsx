import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { ThemeContext } from '../context/ThemeContextProvider'

function Navbar() {
  const { theme, changeTheme } = useContext(ThemeContext)

  return (
    <nav className={`${styles.navbar} ${styles[theme]}`}>
      <h3>Goldental</h3>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/favs'>Favoritos</Link>
        <Link to='/contact'>Contacto</Link>
      </div>
      <button onClick={changeTheme}>{theme === 'light' ? '☀️' : '🌙'}</button>
    </nav>
  )
}
export default Navbar
