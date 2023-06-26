import { useContext } from 'react'
import Card from '../components/Card'
import { FavsLogicContext } from '../context/FavsLogicContextProvider'

function Favs() {
  const { favs, addToFavs } = useContext(FavsLogicContext)

  return (
    <main>
      <Card data={favs} onClick={addToFavs} onRouteFavs={true} />
    </main>
  )
}
export default Favs
