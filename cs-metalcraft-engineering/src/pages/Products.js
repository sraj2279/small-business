import React from 'react'
import '../styles/Products.css'
import ap1 from '../assets/angle-plate1.png'
import ap2 from '../assets/angle-plate2.png'
import ap3 from '../assets/angle-plate3.png'
import parallel_blocks from '../assets/parallel-blocks.png'

export default function Products() {
    return (
        <main id='products-page'>
            <div id='products-block'>
                <div>PRODUCTS</div>
            </div>

            <div id='products-container'>
                <div className='products-title'>OUR GALLERY</div>
                <div id='products-grid'>
                    <div className='grid-item'>
                        <img src={ap1} alt='angle-plate1' className='grid-image' />
                        <div className='grid-item-text'>ANGLE PLATE</div>
                    </div>
                    <div className='grid-item'>
                        <img src={ap2} alt='angle-plate2' className='grid-image' />
                        <div className='grid-item-text'>ANGLE PLATE</div>
                    </div>
                    <div className='grid-item'>
                        <img src={ap3} alt='angle-plate1' className='grid-image' />
                        <div className='grid-item-text'>ANGLE PLATE</div>
                    </div>
                    <div className='grid-item'>
                        <img src={ap1} alt='angle-plate1' className='grid-image' />
                        <div className='grid-item-text'>ANGLE PLATE</div>
                    </div>
                    <div className='grid-item'>
                        <img src={parallel_blocks} alt='angle-plate1' className='grid-image' />
                        <div className='grid-item-text'>ANGLE PLATE</div>
                    </div>
                    <div className='grid-item'>
                        <img src={ap1} alt='angle-plate1' className='grid-image' />
                        <div className='grid-item-text'>ANGLE PLATE</div>
                    </div>
                </div>
            </div>
        </main>
    )
}