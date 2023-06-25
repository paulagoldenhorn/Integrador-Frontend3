import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { ThemeContext } from '../context/ThemeContextProvider'

function Navbar() {
  const { changeTheme } = useContext(ThemeContext)

  return (
    <nav className={styles.navbar}>
      <Link to='/home'>Home</Link>
      <Link to='/favs'>Favoritos</Link>
      <Link to='/contact'>Contacto</Link>
      <button onClick={changeTheme}>Tema</button>
    </nav>
  )
}
export default Navbar
