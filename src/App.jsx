import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='' element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
