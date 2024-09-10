import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'

import sm1 from '../assets/sheet-metal-die1.png'
import pt2 from '../assets/press-tools2.jpg'
import pt3 from '../assets/press-tools3.webp'
import ps1 from '../assets/press-set1.webp'



export default function Home() {

    return (
        <main id='home-page'>
            <div id="home-container">

                <div className='space-block'></div>

                <div className='home-item' id='home-about-block'>
                    <div id='home-title'>WELCOME TO <span id='home-title-2'>C.S. METALCRAFT ENGINEERING</span></div>
                    <div id='about-text'>
                        <p>We are a dedicated team of expert tool and die makers, combining precision, craftsmanship, and innovation to deliver high-quality solutions for a wide range of industries. With extensive experience in designing and manufacturing custom tools, dies, and plastic injection moulds, we take pride in our ability to meet the most demanding specifications and ensure superior performance.</p>
                    </div>
                    <div className='button-wrapper'><Link className='view-button' to={'/about'}>VIEW MORE</Link></div>
                </div>

                <div id='home-products-container'>
                    <div id='home-products-title'>OUR PRODUCTS</div>
                    <div id='slideshow'>
                        <div className='g-item'>
                            <img src={sm1} alt='sheet metal die 1' className='g-image' />
                            <div className='g-item-text'>SHEET METAL DIE</div>
                        </div>
                        <div className='g-item'>
                            <img src={pt2} alt='press tools 2' className='g-image' />
                            <div className='g-item-text'>PRESS TOOLS</div>
                        </div>
                        <div className='g-item'>
                            <img src={pt3} alt='press tools 3' className='g-image' />
                            <div className='g-item-text'>PRESS TOOLS</div>
                        </div>
                        <div className='g-item'>
                            <img src={ps1} alt='press set 1' className='g-image' />
                            <div className='g-item-text'>PRESS TOOLS</div>
                        </div>
                    </div>

                    <div className='button-wrapper'><Link className='view-button' to={'/products'}>VIEW MORE</Link></div>
                </div>

                <div id='home-google-container'>
                    <div id='home-google-title' >FIND US</div>

                    <iframe title='google-map' id='google-map' height="600px" frameborder="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Prakash%20Corrugated%20Products,%20Verna+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>

                    <div className='button-wrapper'><Link className='view-button' to={'/contact'}>VIEW MORE</Link></div>
                </div>

                <div className='space-block'></div>

            </div >
        </main >
    )
}