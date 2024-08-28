import React from 'react'
import '../styles/Contact.css'

export default function Contact() {
    return (
        <main id='contact-page'>
            <div id="contact-container">

                <div id='info-container' className='contact-item'>
                    <div className='info-title'>CONTACT DETAILS</div>

                    <div className='info-item'>
                        <div className='item-title'>Trading Hours</div>
                        <div>Mon-Fri: 8:30AM - 5PM</div>
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
                            <div>L-116 B, Verna Industrial Estate</div>
                            <div>Verna, Goa 403722, India</div>
                        </div>

                    </div>
                </div>

                <div id='google-container' className='contact-item'>
                    <div className='info-title' >FIND US</div>
                    <div id='map' styles="width: 100%"><iframe width="100%" height="600px" frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Prakash%20Corrugated%20Products,%20Verna+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe></div>
                </div>

            </div>
        </main>
    )
};