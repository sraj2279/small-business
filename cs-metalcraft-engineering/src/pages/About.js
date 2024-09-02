import React from 'react'
import '../styles/About.css'

export default function About() {
    return (
        <main id='about-page'>

            <div id='about-block'>
                <div>ABOUT US</div>
            </div>

            <div id='about-container'>
                <div className='about-item'>
                    <div className='about-title'>WHO WE ARE</div>
                    <div className='text-container'>
                        <p>
                            We are a dedicated team of skilled metalworkers, united by our passion for craftsmanship and precision. With years of experience in the industry, we bring together a diverse range of expertise, from traditional techniques to modern innovations. Our partnership is built on a shared commitment to excellence, delivering high-quality metalwork solutions that meet the unique needs of our clients. Whether it’s custom fabrication, intricate designs, or large-scale projects, we pride ourselves on our attention to detail and our ability to bring our clients’ visions to life.
                        </p>

                        <p>
                            At the heart of our work is a deep respect for the materials we craft and the people we serve. We believe in forging strong relationships with our clients, collaborating closely to ensure every project is completed to the highest standards. Our mission is to be your trusted partner in metalworking, providing reliable, durable, and beautifully crafted solutions that stand the test of time.
                        </p>
                    </div>
                </div>

                <div className='about-item'>
                    <div className='about-title'>OUR MOTTO</div>
                    <div className='text-container'>
                        <p>
                            Our motto is to prioritize customer needs by delivering high-quality products and continuously improving resource utilization, striving for total customer satisfaction and sustained growth.
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

                {/* <div className='about-item'>
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
                </div> */}


                {/* <div className='about-item'>

                </div> */}
            </div>
        </main>
    )
}