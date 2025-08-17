import React from 'react'
import '../styles/Contact.css'

export default function Contact() {
    return (
        <main id='contact-page'>
            <div id='contact-block'>
                <div>CONTACT US</div>
            </div>

            <div id="contact-container">

                <div id='info-container' className='contact-item'>
                    <div className='info-title'>CONTACT DETAILS</div>

                    <div className='info-item'>
                        <div className='item-title'>Trading Hours</div>
                        <div>Mon-Sat: 8:30AM - 5PM</div>
                    </div>

                    <div className='info-item'>
                        <div className='item-title'>Phone</div>
                        <div>
                            <div>Mr. V K Sudhir Nair</div>
                            <div>(+91) 940 533 1047</div>
                        </div>
                        <div>
                            <div>Mr. Chelladurai Thungaraj</div>
                            <div>(+91) 910 858 8291 </div>
                        </div>
                    </div>

                    <div className='info-item'>
                        <div className='item-title'>Email</div>
                        <div>csmetalcraftengineering@gmail.com</div>
                    </div>

                    <div className='info-item'>
                        <div className='item-title'>Address</div>


                        <div>
                            <div>S-98, Verna Industrial Estate</div>
                            <div>Verna, Goa 403722, India</div>
                        </div>

                    </div>
                </div>

                <div id='google-container' className='contact-item'>
                    <div className='info-title' >FIND US</div>
                    <div id='map' >
                        <iframe title='google-map' width="100%" height="600px" frameborder="0" marginheight="0" marginwidth="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=milagros verna industrial estate&amp;t=k&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>





            </div>
        </main>
    )
};