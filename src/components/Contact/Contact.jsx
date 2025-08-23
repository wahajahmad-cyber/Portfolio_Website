import React from 'react';
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

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
        <form onSubmit={onSubmit} action="" className="contact-right">
            <label htmlFor="name">Your Name:</label>
            <input type="text" name="name" placeholder='Enter your name:' required/>
            <label htmlFor="email">Your email:</label>
            <input type="email" name="email" placeholder='Enter your email:' required/>
            <label htmlFor="message">Write your message here:</label>
            <textarea name="message" rows='8' placeholder='Enter your Message Here:' id="message" required></textarea>
            <button type='submit' className="contact-submit">Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
