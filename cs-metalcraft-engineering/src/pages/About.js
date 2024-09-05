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
                            We are a dedicated team of expert tool and die makers, combining precision, craftsmanship, and innovation to deliver high-quality solutions for a wide range of industries. With extensive experience in designing and manufacturing custom tools, dies, and plastic injection moulds, we take pride in our ability to meet the most demanding specifications and ensure superior performance.
                        </p>

                        <p>
                            Our partnership is built on a foundation of technical expertise and a commitment to quality. We work closely with our clients, from concept to completion, to provide tailored solutions that enhance efficiency and productivity. Whether it's prototyping, production tooling, or maintenance, we focus on precision, reliability, and durability in every project.
                        </p>
                        <p>
                            At the core of our business is a dedication to excellence and customer satisfaction. We are your trusted partner for all tool and die needs, delivering solutions that help your operations run smoothly and efficiently.
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
                        <p>Type of firm: Partnership</p>
                        <p>Name of partners: Mr. V K Sudhir Nair & Mr. Chelladurai T (SUNNY)</p>
                        <p>Date of Establishment: 18th Nov. 2023</p>
                        <p>GSTN: 30AASFC2912K1ZJ</p>
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