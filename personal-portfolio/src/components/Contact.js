import React, { useState } from 'react';
import '../assets/styles/Contact.css';

function Contact() {

    return (
        <div className="Contact" id="Contact">
            <h3><span>05.</span> Contact</h3>
            <div className="ContactContent">
                <h4>Get in touch</h4>
                <p>I am always open to any new opportunities! So if you have a collaboration in mind or a job inquiry, don't hesitate to reach out.</p>
                <a href="mailto:heffernan.alexander@icloud.com">Email me</a>
            </div>
        </div>
    );

}

export default Contact;