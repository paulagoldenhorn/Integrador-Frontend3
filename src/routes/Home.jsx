import { useState, useEffect } from 'react'
import Card from '../components/Card'

function Home() {
  const endpoint = 'https://jsonplaceholder.typicode.com/users'

  const [apiData, setApiData] = useState([])

  async function fetchApiData() {
    const response = await (await fetch(endpoint)).json()
    setApiData(response)
  }

  useEffect(() => {
    fetchApiData()
  }, [])

  return (
    <main>
      <h1>Nuestros dentistas</h1>
      <Card data={apiData} />
    </main>
  )
}
export default Home
