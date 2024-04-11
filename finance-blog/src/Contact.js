import React from 'react';
import './css/Contact.css';

function Contact() {
  return (
    <>
      <div>
          <div className="container">
              <form action="https://formspree.io/nkathawa@umich.edu" method="POST">
                  <label htmlFor="fname">Full Name</label>
                  <input type="text" id="fname" name="fullname" placeholder="Your full name"/>
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" name="email" placeholder="Your email"/>
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="Subject line"/>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Write something..."></textarea>
                  <input type="text" name="_gotcha" className="gotcha"/>
                  <input type="submit" value="Submit"/>
              </form>
          </div>
      </div>
    </>
  );
}

export default Contact;