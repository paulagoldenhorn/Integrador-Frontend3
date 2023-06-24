import { createContext, useState, useEffect } from 'react'

export const ApiContext = createContext({})

export const ApiContextProvider = (props) => {
  const endpoint = 'https://jsonplaceholder.typicode.com/users'

  const [apiData, setApiData] = useState([])

  async function fetchApiData() {
    const response = await (await fetch(endpoint)).json()
    setApiData(response)
  }

  useEffect(() => {
    fetchApiData()
  }, [])

  const value = {
    apiData,
  }

  return (
    <ApiContext.Provider value={value}>
      {props.children}
    </ApiContext.Provider>
  )
}
