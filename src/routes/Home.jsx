import { useContext, useMemo, useState } from 'react'
import Card from '../components/Card'
import { ApiContext } from '../context/ApiContextProvider'
import { FavsLogicContext } from '../context/FavsLogicContextProvider'

function Home() {
  const { apiData } = useContext(ApiContext)
  const { addToFavs } = useContext(FavsLogicContext)

  const [cardData, setCardData] = useState([])
  
  useMemo(() => {
    setCardData(
      apiData.map((dentist) => ({
        id: dentist.id,
        name: dentist.name,
        username: dentist.username,
      }))
    )
  }, [apiData])

  return (
    <main>
      <h1>Nuestros dentistas</h1>
      <Card data={cardData} onClick={addToFavs} />     
    </main>
  )
}
export default Home
