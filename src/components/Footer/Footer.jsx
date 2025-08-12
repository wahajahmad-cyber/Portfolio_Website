import user_icon from '../../assets/user_icon.svg'
import './Footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-top-left">
              <h1>dev.Suraj</h1>
              <p>I&apos;m a Developer here to learn</p>
          </div>
          <div className="footer-top-right">
              <div className="footer-email-input">
                  <img src={user_icon} alt="" />
                  <input type="email" placeholder='Enter your Email:' />
              </div>
              <div className="footer-subscribe">Subscribe</div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left">@Suraj Mallick.All rights reserved</p>
          <div className="footer-bottom-right">
              <p>Terms of services</p>
              <p>Privacy Policy</p>
              <p>Connect with me</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
