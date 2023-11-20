import React from 'react';
import './Contact.css';
const Contact = () =>{
    return(
        <div className='contact-me-outer-div'>
            <div className="contact-heading-top">
                    <h1>Contact Me!</h1>
            </div>
            <div id="contact" className='contact-me-div'>
                <form method="post" action="mailto:binsmyth@gmail.com">
                    <fieldset>
                        <label htmlFor="input-text-name">Name</label>
                        <input type="text" id="input-text-name" placeholder="Abcdef" required />
                        <label htmlFor="input-text-phone">Phone Number</label>
                        <input type="tel" id="input-text-phone" placeholder="04xxxxxxxx"/>
                        <label htmlFor="input-text-email">Email</label>
                        <input type="email" id="input-text-email" placeholder="abc@email.com"/>
                        <label htmlFor="textarea-comments">Comments</label>
                        <textarea id="textarea-comments" rows="20" cols="40"></textarea>
                        <span>&nbsp;</span>
                        <button className='send-button'>Send</button>
                    </fieldset>
                </form>
                <div className="map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d402977.9366785966!2d144.66976262430586!3d-37.90086514103238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1699179532263!5m2!1sen!2sau" 
                    style={{border:0, width:'100%', height:'50%'}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                >

                </iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact;