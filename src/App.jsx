import { Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import { ApiContextProvider } from './context/ApiContextProvider'
import { ThemeContextProvider } from './context/ThemeContextProvider'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './routes/Home'
import Detail from './routes/Detail';
import Contact from './routes/Contact';


function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
            <ThemeContextProvider>
              <ApiContextProvider>
                <Navbar />
                <Outlet />
                <Footer />
              </ApiContextProvider>
            </ThemeContextProvider>
            </>
          }
        >
          <Route path='/home' element={<Home />} />
          <Route path='/dentist/:id' element={<Detail />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/favs' element={<p>favs</p>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
