import { useState, createContext } from 'react'

export const FavsLogicContext = createContext({})

export const FavsLogicContextProvider = (props) => {
  const [favs, setFavs] = useState(
    JSON.parse(localStorage.getItem('favDentists')) || '[]'
  )

  const addToFavs = (dentist) => {
    let newFavs
    if (favs.some((favDentist) => favDentist.id === dentist.id)) {
      newFavs = favs.filter((favDentist) => favDentist.id !== dentist.id)
    } else {
      newFavs = [...favs, dentist]
    }
    setFavs(newFavs)
    localStorage.setItem('favDentists', JSON.stringify(newFavs))
  }

  const value = {
    favs,
    addToFavs,
  }

  return (
    <FavsLogicContext.Provider value={value}>
      {props.children}
    </FavsLogicContext.Provider>
  )
}
