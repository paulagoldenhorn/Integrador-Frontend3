import { useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Card.module.css'
import { ThemeContext } from '../context/ThemeContextProvider'
import { FavsLogicContext } from '../context/FavsLogicContextProvider'

function Card({ id, name, username, onClick }) {
  const { theme } = useContext(ThemeContext)
  const { favs } = useContext(FavsLogicContext)
  const navigate = useNavigate()
  
  const isFav = useMemo(() => {
    return favs.some(favDentist => favDentist.id === id)
  }, [favs])

  function handleNavigate(id) {
    navigate(`/dentist/${id}`)
  }

  return (
    <>
      <div className={styles[theme]}>
        <button onClick={onClick} className={`${isFav ? styles.like : null}`}>♥️</button>
        <h4>{name}</h4>
        <p>@{username.toLowerCase()}</p>
        <button onClick={() => handleNavigate(id)}>Detalle</button>
      </div>

      {/* <section className={styles.section}>
          {props.data.map((dentist) => (
            <div key={dentist.id} className={styles[theme]}>
              {props.onRouteFavs ? (
                <button onClick={() => handleFav(dentist)}>❌</button>
              ) : (
                <button onClick={() => handleFav(dentist)}>♥️</button>
              )}
              <h4>{dentist.name}</h4>
              <p>@{dentist.username.toLowerCase()}</p>
              <button onClick={() => handleNavigate(dentist.id)}>
                Detalle
              </button>
            </div>
          ))}
        </section> */}
    </>
  )
}
export default Card
