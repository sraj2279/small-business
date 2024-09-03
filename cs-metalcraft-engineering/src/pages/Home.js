import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'

import vb2 from '../assets/v-block2.png'
import pb1 from '../assets/parallel-blocks.png'
import bv1 from '../assets/bench-vice1.png'
import rd1 from '../assets/riveting-die1.png'
import ap3 from '../assets/angle-plate3.png'



export default function Home() {

    return (
        <main id='home-page'>
            <div id="home-container">

                <div className='space-block'></div>

                <div className='home-item' id='home-about-block'>
                    <div id='home-title'>WELCOME TO <span id='home-title-2'>C.S. METALCRAFT ENGINEERING</span></div>
                    <div id='about-text'>
                        <p>We are a dedicated team of skilled metalworkers, united by our passion for craftsmanship and precision. With years of experience in the industry, we bring together a diverse range of expertise, from traditional techniques to modern innovations. Our partnership is built on a shared commitment to excellence, delivering high-quality metalwork solutions that meet the unique needs of our clients. Whether it's custom fabrication, intricate designs, or large-scale projects, we pride ourselves on our attention to detail and our ability to bring our clients' visions to life.</p>
                    </div>
                    <div className='button-wrapper'><Link className='view-button' to={'/about'}>VIEW MORE</Link></div>
                </div>

                <div id='home-products-container'>
                    <div id='home-products-title'>OUR PRODUCTS</div>
                    <div id='slideshow'>
                        <div className='g-item'>
                            <img src={vb2} alt='vblock2' className='g-image' />
                            <div className='g-item-text'>V BLOCKS</div>
                        </div>
                        <div className='g-item'>
                            <img src={pb1} alt='vblock2' className='g-image' />
                            <div className='g-item-text'>PARALLEL BLOCKS</div>
                        </div>
                        <div className='g-item'>
                            <img src={rd1} alt='vblock2' className='g-image' />
                            <div className='g-item-text'>RIVETING DIE</div>
                        </div>
                        {/* <div className='g-item'>
                            <img src={bv1} alt='vblock2' className='g-image' />
                            <div className='g-item-text'>V BLOCKS</div>
                        </div> */}
                        <div className='g-item'>
                            <img src={ap3} alt='vblock2' className='g-image' />
                            <div className='g-item-text'>ANGLE PLATE</div>
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