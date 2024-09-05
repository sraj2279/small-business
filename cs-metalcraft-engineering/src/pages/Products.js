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
import sm1 from '../assets/sheet-metal-die1.png'
import pt1 from '../assets/press-tools1.jpg'
import pt2 from '../assets/press-tools2.jpg'
import pt3 from '../assets/press-tools3.webp'
import ps1 from '../assets/press-set1.webp'

export default function Products() {
    return (
        <main id='products-page'>
            <div id='products-block'>
                <div>PRODUCTS</div>
            </div>

            <div id='products-container'>
                <div className='products-title'>OUR PRODUCTS</div>
                <div id='products-grid'>
                    <div className='grid-item'>
                        <img src={ap1} alt='angle plate 1' className='grid-image' />
                        <div className='grid-item-text'>ANGLE PLATE</div>
                    </div>
                    <div className='grid-item'>
                        <img src={ap2} alt='angle plate 2' className='grid-image' />
                        <div className='grid-item-text'>ANGLE PLATE</div>
                    </div>
                    <div className='grid-item'>
                        <img src={ap3} alt='angle plate 3' className='grid-image' />
                        <div className='grid-item-text'>ANGLE PLATE</div>
                    </div>
                    <div className='grid-item'>
                        <img src={rd1} alt='riveting die 1' className='grid-image' />
                        <div className='grid-item-text'>RIVETING DIE</div>
                    </div>
                    <div className='grid-item'>
                        <img src={sm1} alt='sheet metal die 1' className='grid-image' />
                        <div className='grid-item-text'>SHEET METAL DIE</div>
                    </div>
                    <div className='grid-item'>
                        <img src={parallel_blocks} alt='parallel blocks' className='grid-image' />
                        <div className='grid-item-text'>PARALLEL BLOCKS</div>
                    </div>
                    <div className='grid-item'>
                        <img src={pt1} alt='press tools' className='grid-image' />
                        <div className='grid-item-text'>PRESS TOOLS</div>
                    </div>
                    <div className='grid-item'>
                        <img src={vb1} alt='v block 1' className='grid-image' />
                        <div className='grid-item-text'>V BLOCKS</div>
                    </div>
                    <div className='grid-item'>
                        <img src={vb2} alt='v block 2' className='grid-image' />
                        <div className='grid-item-text'>V BLOCKS</div>
                    </div>
                    <div className='grid-item'>
                        <img src={v1} alt='vice' className='grid-image' />
                        <div className='grid-item-text'>VICE</div>
                    </div>
                    <div className='grid-item'>
                        <img src={sh1} alt='square head 1' className='grid-image' />
                        <div className='grid-item-text'>SQUARE HEAD</div>
                    </div>
                    <div className='grid-item'>
                        <img src={bv1} alt='bench vice 1' className='grid-image' />
                        <div className='grid-item-text'>BENCH VICE</div>
                    </div>
                    <div className='grid-item'>
                        <img src={pt2} alt='press tools 2' className='grid-image' />
                        <div className='grid-item-text'>PRESS TOOLS</div>
                    </div>
                    <div className='grid-item'>
                        <img src={pt3} alt='press tools 3' className='grid-image' />
                        <div className='grid-item-text'>PRESS TOOLS</div>
                    </div>
                    <div className='grid-item'>
                        <img src={ps1} alt='press set 1' className='grid-image' />
                        <div className='grid-item-text'>PRESS TOOLS</div>
                    </div>
                </div>
            </div>
        </main>
    )
}