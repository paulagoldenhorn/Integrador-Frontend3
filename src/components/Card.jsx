import { useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Card.module.css'
import { ThemeContext } from '../context/ThemeContextProvider'
import { FavsLogicContext } from '../context/FavsLogicContextProvider'

function Card(props) {
  const { id, name, username, onAddToFavs } = props
  const { theme } = useContext(ThemeContext)
  const { favs } = useContext(FavsLogicContext)
  const navigate = useNavigate()

  const isFav = useMemo(() => {
    return favs.some((favDentist) => favDentist.id === id)
  }, [favs])

  function handleNavigate(id) {
    navigate(`/dentist/${id}`)
  }

  return (
    <>
      <article className={`${styles.card} ${styles[theme]}`}>
        <button
          onClick={onAddToFavs}
          className={`${styles.like_btn} ${isFav && styles.liked}`}
        >
          ♥️
        </button>
        <h3>{name}</h3>
        <p>@{username.toLowerCase()}</p>
        <button
          onClick={() => handleNavigate(id)}
          className={styles.detail_btn}
        >
          Detalle
        </button>
      </article>
    </>
  )
}
export default Card
