import React, { useEffect, useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './Contact.css';

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [formInvalid, setFormInvalid] = useState(false); // To track invalid submission attempts
  const [isFormComplete, setIsFormComplete] = useState(false); // To track if all fields are filled for hover effect
  const [formSubmitted, setFormSubmitted] = useState(false); // To track if the form has been successfully submitted
  const [invalidFields, setInvalidFields] = useState({}); // To track which fields are invalid
  const contactRef = useRef(null);
  const captchaRef = useRef(null); // Ref for ReCAPTCHA component

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const checkFormCompletion = (name, email, message, captcha) => {
    setIsFormComplete(!!name && validateEmail(email) && !!message && !!captcha);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    setFormInvalid(false); // Reset error state when captcha is changed
    setFormSubmitted(false); // Reset formSubmitted when user interacts with form
    const name = contactRef.current.querySelector('[name="name"]').value.trim();
    const email = contactRef.current.querySelector('[name="email"]').value.trim();
    const message = contactRef.current.querySelector('[name="message"]').value.trim();
    checkFormCompletion(name, email, message, value);
  };

  const handleInputChange = (e) => {
    setFormInvalid(false); // Reset error state on input change
    setFormSubmitted(false); // Reset formSubmitted when user interacts with form
    setInvalidFields(prev => ({ ...prev, [e.target.name]: false })); // Clear specific field invalid state
    const name = contactRef.current.querySelector('[name="name"]').value.trim();
    const email = contactRef.current.querySelector('[name="email"]').value.trim();
    const message = contactRef.current.querySelector('[name="message"]').value.trim();
    checkFormCompletion(name, email, message, captchaValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message || !captchaValue) {
      setError('Please fill out all fields and complete the CAPTCHA.');
      setFormInvalid(true);
      setInvalidFields({
        name: !name,
        email: !email,
        message: !message,
      });
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      setFormInvalid(true);
      setInvalidFields(prev => ({ ...prev, email: true }));
      return;
    }

    setFormInvalid(false);
    setInvalidFields({}); // Clear invalid fields on valid submission attempt
    const formData = {
      name,
      email,
      message,
      token: captchaValue,
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
        setFormSubmitted(true); // Mark form as successfully submitted
        setIsFormComplete(false); // Reset form completion state as fields are cleared
        e.target.reset();
        setCaptchaValue(null);
        if (captchaRef.current) {
          captchaRef.current.reset();
        }
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
        <img src="/theme_pattern.svg" alt="theme pattern" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I'm currently available to take on new opportunities, so feel free to contact me.</p>
          <div className="contact-details">
            <div className="detail">
              <img src="/mail_icon.svg" alt="mail" /><p>wahajahmad.alnafi@gmail.com</p>
            </div>
            <div className="detail">
              <img src="/location_icon.svg" alt="location" /><p>Karachi, Pakistan</p>
            </div>
            <div className="detail">
              <img src="/call_icon.svg" alt="call" /><p>+92 301-2529273</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-right" noValidate>
          {success && <div className="success-message">✅ Your message has been sent successfully!</div>}
          {error && <div className="error-message">{error}</div>}

          <label htmlFor="name">Your Name:</label>
          <input type="text" name="name" placeholder="Enter your name:" required onChange={handleInputChange} className={invalidFields.name ? 'input-error' : ''} />

          <label htmlFor="email">Your Email:</label>
          <input type="email" name="email" placeholder="Enter your email:" required onChange={handleInputChange} className={invalidFields.email ? 'input-error' : ''} />

          <label htmlFor="message">Write your message here:</label>
          <textarea name="message" rows="8" placeholder="Enter your Message Here:" required onChange={handleInputChange} className={invalidFields.message ? 'input-error' : ''} />

          {siteKey ? (
            <div>
              <ReCAPTCHA
                sitekey={siteKey}
                onChange={handleCaptchaChange}
                ref={captchaRef}
              />
            </div>
          ) : (
            <p style={{ color: 'red' }}>
              ⚠️ ReCAPTCHA site key is missing! Please set VITE_RECAPTCHA_SITE_KEY in your .env file.
            </p>
          )}

          <button
            type="submit"
            className={`contact-submit ${!isFormComplete && !formSubmitted ? 'contact-submit-incomplete' : ''}`}
            disabled={loading || !siteKey}
          >
            {loading ? 'Sending...' : 'Submit Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;