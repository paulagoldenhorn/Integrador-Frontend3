import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Card.module.css'
import { ThemeContext } from '../context/ThemeContextProvider'

function Card(props) {
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate()

  function handleNavigate(id) {
    navigate(`/dentist/${id}`)
  }

  function handleFav(dentist) {
    props.onClick(dentist)
  }

  return (
    <>
        <section className={styles.section}>
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
        </section>
    </>
  )
}
export default Card
