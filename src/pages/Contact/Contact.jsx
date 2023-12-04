import React from 'react';
import './Contact.css';
const Contact = () =>{
    return(
        <div className="contact">
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
            
                </div>
            </div>
        </div>
    )
}

export default Contact;