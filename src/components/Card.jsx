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
        <div key={dentist.id} className={styles.card} onClick={() => handleNavigate(dentist.id)}>
          <h4>{dentist.name}</h4>
          <p>{dentist.email}</p>
          <p>{dentist.phone}</p>
          <p>{dentist.website}</p>
          <button>Like</button>
        </div>
      ))}
    </section>
  )
}
export default Card
