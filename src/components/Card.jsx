import { useNavigate } from 'react-router-dom'
import styles from './Card.module.css'

function Card(props) {
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
    <section className={styles.section}>
      {dentists.map((dentist) => (
          <div key={dentist.id} className={styles.card}>
            <button onClick={(e) => handleFav(e, dentist)}>♥️</button>
            <h4>{dentist.name}</h4>
            <p>@{dentist.username.toLowerCase()}</p>
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
