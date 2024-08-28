import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import '../styles/Navbar.css'
import logo from '../assets/CS-LOGO.png'
import title from '../assets/CS-TITLE.png'

export default function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header className='nav-container' ref={navRef}>
            <nav className='navbar'>

                <Link className='site-logo' to={'/'}>
                    <img id='logo' src={logo} alt='CS-LOGO' />
                </Link>

                <Link className='site-title' to={'/'}>
                    <img id='title' src={title} alt='CS-TITLE' />
                </Link>


                <Link className='menu-items' to={'/'}>HOME</Link>
                <Link className='menu-items' to={'/'}>ABOUT</Link>
                <Link className='menu-items' to={'/'}>PRODUCTS</Link>
                <Link className='menu-items' to={'/'}>CLIENTS</Link>
                <Link className='menu-items' to={'/contact'}>CONTACT US</Link>

                <button className='nav-btn nav-open-btn' onClick={showNavbar}>
                    <FaBars />
                </button>

                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>

            </nav>

            <nav className='mobile-nav' onClick={showNavbar}>
                <Link className='mobile-items' to={'/'}>HOME</Link>
                <Link className='mobile-items' to={'/'}>ABOUT</Link>
                <Link className='mobile-items' to={'/'}>PRODUCTS</Link>
                <Link className='mobile-items' to={'/'}>CLIENTS</Link>
                <Link className='mobile-items' to={'/contact'}>CONTACT US</Link>
            </nav>

        </header>
    )
}
