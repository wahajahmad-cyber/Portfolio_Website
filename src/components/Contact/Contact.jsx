import React, { useEffect, useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "true") {
      setSuccess(true);

      // Clean up URL so ?success=true disappears after showing message
      const newUrl = window.location.pathname + window.location.hash;
      window.history.replaceState(null, "", newUrl);
    }
  }, []);

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Contact Me<span>.</span></h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let&apos;s Talk</h1>
          <p>I&apos;m currently available to take on new opportunities, so feel free to Contact Me</p>
          <div className="contact-details">
            <div className="detail">
              <img src={mail_icon} alt="" /><p>wahajahmad.alnafi@gmail.com</p>
            </div>
            <div className="detail">
              <img src={location_icon} alt="" /><p>Karachi, Pakistan</p>
            </div>
            <div className="detail">
              <img src={call_icon} alt="" /><p>+92 301-2529273</p>
            </div>
          </div>
        </div>

        {/* FormSubmit version with redirect */}
        <form 
          action="https://formsubmit.co/450b2afba024cd2503bf15d62be17617" 
          method="POST" 
          className="contact-right"
        >
          {success && (
            <div className="success-message">
              ✅ Thank you! Your message has been sent successfully.
            </div>
          )}

          <label htmlFor="name">Your Name:</label>
          <input type="text" name="name" placeholder="Enter your name:" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" name="email" placeholder="Enter your email:" required />

          <label htmlFor="message">Write your message here:</label>
          <textarea name="message" rows="8" placeholder="Enter your Message Here:" required></textarea>

          {/* Redirect to your portfolio after submission */}
          <input 
            type="hidden" 
            name="_next" 
            value="https://wahajahmed.site/#contact?success=true" 
          />

          <button type="submit" className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;