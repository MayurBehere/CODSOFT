import React from 'react'
import navlogo from './navlogo.jpg'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar bg-body-tertiary" style={{ width: '100%' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={navlogo} alt="Logo" width="80" height="75" className="d-inline-block align-text-top"/>
          </a>
          <button className="btn btn-secondary ms-auto" type="button">Sign Up</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
