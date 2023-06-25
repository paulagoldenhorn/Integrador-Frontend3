import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Card.module.css'
import { ThemeContext } from '../context/ThemeContextProvider'

function Card(props) {
  const { theme } = useContext(ThemeContext)
  const dentists = props.data
  const navigate = useNavigate()

  function handleNavigate(id) {
    navigate(`/dentist/${id}`)
  }

  function handleFav(e, dentist){
    e.target.classList.toggle(styles.like)
    props.onClick(dentist)
  }

  return (
    <>
      {theme === 'dark' ? (
        <section className={styles.section}>
          {dentists.map((dentist) => (
              <div key={dentist.id} className={styles.card_dark}>
                {!props.onRouteFavs ? <button onClick={(e) => handleFav(e, dentist)}>♥️</button> : <button onClick={(e) => handleFav(e, dentist)}>Quitar</button>}
                <h4>{dentist.name}</h4>
                <p>@{dentist.username.toLowerCase()}</p>
                <button onClick={() => handleNavigate(dentist.id)}>
                  Detalle
                </button>
              </div>
            ))
          }
        </section>
      ) : (
        <section className={styles.section}>
          {dentists.map((dentist) => (
              <div key={dentist.id} className={styles.card}>
                {!props.onRouteFavs ? <button onClick={(e) => handleFav(e, dentist)}>♥️</button> : <button onClick={(e) => handleFav(e, dentist)}>Quitar</button>}
                <h4>{dentist.name}</h4>
                <p>@{dentist.username.toLowerCase()}</p>
                <button onClick={() => handleNavigate(dentist.id)}>
                  Detalle
                </button>
              </div>
            ))
          }
        </section>
      )}
    </>
  )
}
export default Card
