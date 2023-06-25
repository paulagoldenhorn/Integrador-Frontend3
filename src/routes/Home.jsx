import { useContext, useEffect, useState } from 'react'
import Card from '../components/Card'
import { ApiContext } from '../context/ApiContextProvider'
import { FavsLogicContext } from '../context/FavsLogicContextProvider'

function Home() {
  const { apiData } = useContext(ApiContext)
  const { addToFavs } = useContext(FavsLogicContext)

  const [cardData, setCardData] = useState([])
  
  function handleCardData() {
    setCardData(
      apiData.map((dentist) => ({
        id: dentist.id,
        name: dentist.name,
        username: dentist.username,
      }))
    )
  }

  useEffect(() => {
    handleCardData()
  }, [apiData])

  return (
    <main>
      <h1>Nuestros dentistas</h1>
      <Card data={cardData} onClick={addToFavs} onRouteFavs={false} />     
    </main>
  )
}
export default Home
