import React, { useEffect, useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const contactRef = useRef(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!captchaValue) {
      alert('Please verify that you are not a robot.');
      return;
    }

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      token: captchaValue, // matches API
    };

    try {
      setLoading(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        e.target.reset();
        setCaptchaValue(null);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Error submitting form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [success]);

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  return (
    <div id='contact' ref={contactRef} className='contact'>
      <div className="contact-title">
        <h1>Contact Me<span>.</span></h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I'm currently available to take on new opportunities, so feel free to contact me.</p>
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

        <form onSubmit={handleSubmit} className="contact-right">
          {success && <div className="success-message">✅ Your message has been sent successfully!</div>}
          {error && <div className="error-message">{error}</div>}

          <label htmlFor="name">Your Name:</label>
          <input type="text" name="name" placeholder="Enter your name:" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" name="email" placeholder="Enter your email:" required />

          <label htmlFor="message">Write your message here:</label>
          <textarea name="message" rows="8" placeholder="Enter your Message Here:" required />

          {siteKey ? (
            <ReCAPTCHA
              sitekey={siteKey}
              onChange={handleCaptchaChange}
            />
          ) : (
            <p style={{ color: 'red' }}>
              ⚠️ ReCAPTCHA site key is missing! Please set VITE_RECAPTCHA_SITE_KEY in your .env file.
            </p>
          )}

          <button type="submit" className="contact-submit" disabled={loading || !siteKey}>
            {loading ? 'Sending...' : 'Submit Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;