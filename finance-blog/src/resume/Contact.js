import React from 'react';
import './css/Contact.css';  // Assuming you'll add specific styles for the contact form

function Contact() {
  return (
    <section id="contact" className="divIndex">
      <h1>Contact Me</h1>
      <div className="container">
        <form action="https://formspree.io/f/mnnzadjk}" method="POST">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" name="fullname" placeholder="Your full name" required />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />
          
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="Subject line" required />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Write something..." style={{ height: '200px' }} required />
          
          {/* Hidden field to catch spambots */}
          <input type="text" name="_gotcha" style={{ display: 'none' }} />
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;