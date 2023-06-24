import { useNavigate } from 'react-router-dom'
import styles from './Card.module.css'

function Card(props) {
  const dentists = props.data

  const navigate = useNavigate()

  function handleNavigate(id) {
    navigate(`/dentist/${id}`)
  }

  return (
    <section className={styles.section}>
      {dentists.map((dentist) => (
          <div key={dentist.id} className={styles.card}>
            <h4>{dentist.name}</h4>
            <p>@{dentist.username.toLowerCase()}</p>
            <button onClick={() => dentist.onFav(dentist)}>Like</button>
            <button onClick={() => handleNavigate(dentist.id)}>
              Contactar
            </button>
          </div>
        ))
      }
    </section>
  )
}
export default Card
