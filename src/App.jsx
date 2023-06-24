import { Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';



function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Navbar />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route path='/home' element={<Home />} />
          <Route path='/dentist/:id' element={<p>dentist detail</p>} />
          <Route path='/contact' element={<p>contacto</p>} />
          <Route path='/favs' element={<p>favs</p>} />

        </Route>
      </Routes>
    </>
  )
}

export default App
