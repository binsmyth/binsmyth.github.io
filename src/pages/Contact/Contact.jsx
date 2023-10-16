import React from 'react';
import './Contact.css';
const Contact = () =>{
    return(
        <div id="contact" className='contact-me-div'>
            <h1>Contact Me!</h1>
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
                </fieldset>
                
                <button>Submit</button>   
            </form>
        </div>
    )
}

export default Contact;