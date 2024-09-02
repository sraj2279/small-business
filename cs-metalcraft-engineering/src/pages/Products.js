import React from 'react'
import '../styles/Products.css'
import ap1 from '../assets/angle-plate1.png'
import ap2 from '../assets/angle-plate2.png'
import ap3 from '../assets/angle-plate3.png'
import sh1 from '../assets/square-head1.png'
import parallel_blocks from '../assets/parallel-blocks.png'
import rd1 from '../assets/riveting-die1.png'
import vb1 from '../assets/v-block1.png'
import vb2 from '../assets/v-block2.png'
import v1 from '../assets/vice.png'
import bv1 from '../assets/bench-vice1.png'

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
                        <img src={ap3} alt='angle-plate3' className='grid-image' />
                        <div className='grid-item-text'>ANGLE PLATE</div>
                    </div>
                    <div className='grid-item'>
                        <img src={rd1} alt='riveting-die1' className='grid-image' />
                        <div className='grid-item-text'>RIVETING DIE</div>
                    </div>
                    <div className='grid-item'>
                        <img src={parallel_blocks} alt='parallel_blocks' className='grid-image' />
                        <div className='grid-item-text'>PARALLEL BLOCKS</div>
                    </div>

                    <div className='grid-item'>
                        <img src={vb1} alt='vblock1' className='grid-image' />
                        <div className='grid-item-text'>V BLOCKS</div>
                    </div>
                    <div className='grid-item'>
                        <img src={vb2} alt='vblock2' className='grid-image' />
                        <div className='grid-item-text'>V BLOCKS</div>
                    </div>
                    <div className='grid-item'>
                        <img src={v1} alt='vice' className='grid-image' />
                        <div className='grid-item-text'>VICE</div>
                    </div>
                    <div className='grid-item'>
                        <img src={sh1} alt='square-head1' className='grid-image' />
                        <div className='grid-item-text'>SQUARE HEAD</div>
                    </div>
                    <div className='grid-item'>
                        <img src={bv1} alt='bench-vice1' className='grid-image' />
                        <div className='grid-item-text'>BENCH VICE</div>
                    </div>
                </div>
            </div>
        </main>
    )
}