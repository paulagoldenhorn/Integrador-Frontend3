import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Detail.module.css'

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
      <h1>Detalle del dentista</h1>
      <section>
        {apiData && (
          <table>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Web</th>
            </tr>
            <tr>
              <th>{apiData.name}</th>
              <th>{apiData.email}</th>
              <th>{apiData.phone}</th>
              <th>
                <a href='#'>{apiData.website}</a>
              </th>
            </tr>
          </table>
        )}
      </section>
    </main>
  )
}
export default Detail
