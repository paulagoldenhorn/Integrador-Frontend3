import { useContext } from 'react'
import Card from '../components/Card'
import { FavsLogicContext } from '../context/FavsLogicContextProvider'

function Favs() {
  const { favs, addToFavs } = useContext(FavsLogicContext)

  return (
    <main>
      <h1>Tus dentistas favoritos</h1>
      <section className='section'>
        {favs.map((dentist) => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
            onAddToFavs={() => addToFavs(dentist)}
          />
        ))}
      </section>
      {favs.length === 0 && <p>No tienes dentistas favoritos</p>}
    </main>
  )
}
export default Favs
