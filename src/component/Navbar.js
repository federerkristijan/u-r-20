import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/produtcs">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
