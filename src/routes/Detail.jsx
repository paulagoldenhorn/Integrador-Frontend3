import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
  const params = useParams()
  const [apiData, setApiData] = useState()
  const endpoint = `https://jsonplaceholder.typicode.com/users/${params.id}`

  async function fetchData() {
    const response = await (await fetch(endpoint)).json()
    setApiData(response)
  }

  useEffect(() => {
    fetchData()
  }, [params.id])

  return (
    <main>
      {apiData && (
        <>
          <h3>{apiData.name}</h3>
          <p>Correo: {apiData.email}</p>
          <p>Contacto: {apiData.phone}</p>
          <p>Web: {apiData.website}</p>
        </>
      )}
    </main>
  )
}
export default Detail
