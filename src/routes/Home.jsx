import { useContext } from 'react'
import Card from '../components/Card'
import { ApiContext } from '../context/ApiContextProvider'
import { FavsLogicContext } from '../context/FavsLogicContextProvider'

function Home() {
  const { apiData } = useContext(ApiContext)
  const { addToFavs } = useContext(FavsLogicContext)

  return (
    <main>
      <h1>Nuestros dentistas</h1>
      <section className='section'>
        {apiData.map((dentist) => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
            onAddToFavs={() => addToFavs(dentist)}
          />
        ))}
      </section>
    </main>
  )
}
export default Home
