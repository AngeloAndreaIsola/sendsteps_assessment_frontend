import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import logo from './logo-white.svg';

import Login from './components/finder.component'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navsbar-light fixed-top" style={{ background: '#21003c', color: '#fff!important' }}>
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
            <img src={logo} alt="" width="200" height="50"/>
            </Link>
          </div>
        </nav>

        <div className="finder-wrapper">
          <div className="finder-inner">
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
