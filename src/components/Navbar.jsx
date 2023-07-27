import React from 'react'
import Button from './Button'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <img src="../public/images/brand_logo.png" alt="logo" className='brand' />
        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className='login'>Login</button>
      </nav>


    </div>
  )
}

export default Navbar