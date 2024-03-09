import React from 'react'
import './Header.css'
import logo from '../../images/logo.png'

function Header() {
  return (
    <div className='header-container'>
        <nav className='nav-container'>
            <img src={logo} alt="logo" className='logo' />
            <div className='header-right-content'>
                <a href="">Courses</a>
                <a href="">About Us</a>
                <a href="">Recipies</a>
                <a href="">Sign Up</a>
            </div>
        </nav>
    </div>
  )
}

export default Header