import { useContext, useEffect, useState } from 'react'
import Card from '../components/Card'
import { ApiContext } from '../context/ApiContextProvider'

function Home() {
  const { apiData } = useContext(ApiContext)

  const [cardData, setCardData] = useState([])
  const [favs, setFavs] = useState(
    JSON.parse(localStorage.getItem('favDentists') || '[]')
  )

  function handleCardData() {
    setCardData(
      apiData.map((dentist) => ({
        id: dentist.id,
        name: dentist.name,
        username: dentist.username,
      }))
    )
  }

  const addToFavs = (dentist) => {
    let newFavs
    if (favs.some(favDentist => favDentist.id === dentist.id)) {
      newFavs = favs.filter(favDentist => favDentist.id !== dentist.id)
    } else {
      newFavs = [...favs, dentist]
    }
    setFavs(newFavs)
    localStorage.setItem('favDentists', JSON.stringify(newFavs))
  }

  useEffect(() => {
    handleCardData()
  }, [apiData])

  return (
    <main>
      <h1>Nuestros dentistas</h1>
      <Card data={cardData} onClick={addToFavs} />     
    </main>
  )
}
export default Home
