import React from 'react'
import '../styles/About.css'

export default function About() {
    return (
        <main id='about-page'>
            <div id='about-container'>
                <div className='about-item'>
                    <div className='about-title'>ABOUT US</div>
                    <div className='text-container'>
                        <p>
                            We are a team of professional tool makers, with extensive experience, who understands what customer needs are and try to fulfill those requirements in an appropriate span of time with suitable prices.
                        </p>

                        <p>
                            We could be of great support to you and work for your venture and your cooperation in our goal will be highly appreciated.
                        </p>
                    </div>
                </div>

                <div className='about-item'>
                    <div className='about-title'>OUR MOTTO</div>
                    <div className='text-container'>
                        <p>
                            Take care for the needs of the customer by supplying quality products and continuously improving utilization of resources to achieve, Total Customer Satisfaction and Continuous Growth.
                        </p>
                    </div>
                </div>

                <div className='about-item'>
                    <div className='about-title'>ABOUT OUR FIRM</div>
                    <div className='text-container'>
                        <p>Type of firm : Partnership</p>
                        <p>Name of partners : Mr. V K Sudhir Nair & Mr. Chelladurai T (SUNNY)</p>
                        <p>Date of Establishment : 18th Nov. 2023</p>
                        <p>GSTN : 30AASFC2912K1ZJ</p>
                    </div>
                </div>

                <div className='about-item'>
                    <div className='about-title'>FUTURE EXPANSION PLAN</div>
                    <div className='text-container'>
                        <ul>
                            <li>Purchase of wire cut machine</li>
                            <li>Purchase of 50 ton press (above 50 ton, if required)</li>
                            <li>Purchase of hardness tester</li>
                            <li>Purchase of EDM machine</li>
                            <li>Purchase of electric oven for material hardening</li>
                        </ul>
                    </div>
                </div>


                {/* <div className='about-item'>

                </div> */}
            </div>
        </main>
    )
}