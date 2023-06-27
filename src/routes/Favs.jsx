import { useContext } from 'react'
import Card from '../components/Card'
import styles from '../components/Card.module.css'
import { FavsLogicContext } from '../context/FavsLogicContextProvider'

function Favs() {
  const { favs, addToFavs } = useContext(FavsLogicContext)

  return (
    <main>
      <h1>Tus dentistas favoritos</h1>
      {favs.length > 0 ? (
        <section className={styles.section}>
          {favs.map((dentist) => (
            <Card
              key={dentist.id}
              id={dentist.id}
              name={dentist.name}
              username={dentist.username}
              onClick={() => addToFavs(dentist)}
            />
          ))}
        </section>
      ) : (
        <p>No tienes dentistas favoritos</p>
      )}
    </main>
  )
}
export default Favs
