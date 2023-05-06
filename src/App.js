import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Vendors from './components/Screens/Vendors'
import Home from './components/Home'

const App = () => {
  return (
    <>
   <Router>
   <Navbar />
    <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/vendors' element={<Vendors />} />
   </Routes>

   </Router>
   </>
  )
}

export default App
