import React from 'react';

const Contact = () =>{
    return(
        <>
            <h2>Contact Me!</h2>
            <form method="post" action="mailto:binsmyth@gmail.com">
                <fieldset>
                    <label for="input-text-name">Name</label>
                    <input type="text" id="input-text-name" placeholder="Abcdef" required /><br />
                    <label for="input-text-phone">Phone Number</label>
                    <input type="tel" id="input-text-phone" placeholder="04xxxxxxxx"/><br />
                    <label for="input-text-email">Email</label>
                    <input type="email" id="input-text-email" placeholder="abc@email.com"/><br />
                    <label for="textarea-comments">Comments</label>
                    <textarea id="textarea-comments" rows="20" cols="40"></textarea>
                </fieldset>
                
                <button>Submit</button>   
            </form>
        </>
    )
}

export default Contact;