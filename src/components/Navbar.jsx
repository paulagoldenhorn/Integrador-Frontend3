import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h4>Goldental</h4>
      <Link to='/home'>Home</Link>
      <Link to='/favs'>Favoritos</Link>
      <Link to='/contact'>Contacto</Link>
    </nav>
  )
}
export default Navbar
