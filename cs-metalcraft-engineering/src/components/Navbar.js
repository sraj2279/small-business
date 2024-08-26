import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import logo from '../assets/CS-LOGO.png'
import title from '../assets/CS-TITLE.png'

export default function Navbar() {
    return (
        <nav className='navbar'>

            <Link to={'/'}>
                <img id='logo' src={logo} alt='CS-LOGO' />
            </Link>

            <Link className='site-title' to={'/'}>
                <img id='title' src={title} alt='CS-TITLE' />
            </Link>


            <Link to={'/'}>HOME</Link>
            <Link to={'/'}>ABOUT</Link>
            <Link to={'/'}>PRODUCTS</Link>
            <Link to={'/'}>CLIENTS</Link>
            <Link to={'/'}>CONTACT US</Link>

        </nav>
    )
}
