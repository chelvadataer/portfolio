// src/components/Contact.js
import React from 'react';

function Contact() {
    return (
        <section className="contact">
            <h2>Contact Me</h2>
            <form action="https://formspree.io/f/{your_form_id}" method="POST">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="_replyto" id="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" rows="5" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default Contact;
