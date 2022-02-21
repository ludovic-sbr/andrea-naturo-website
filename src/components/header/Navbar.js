import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar-content navbar-collapse" id="navbarNav">
      <ul className="navbar-nav d-flex flex-column flex-md-row">
        <li className="nav-item">
          <Link className="nav-link" to="/a-propos">A propos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/consultations">Consultations</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/produits">Produits</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar