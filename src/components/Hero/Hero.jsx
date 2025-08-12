import { useEffect } from 'react'
import './Hero.css'
import pfp from '../../assets/pfp.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { TypeAnimation } from 'react-type-animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram, faDiscord, faTelegram } from '@fortawesome/free-brands-svg-icons'
import Resume from '../../assets/Wahaj-Resume.pdf'

const Hero = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#888888'
          },
          shape: {
            type: 'circle'
          },
          opacity: {
            value: 0.5,
            random: false
          },
          size: {
            value: 3,
            random: true
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#888888',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          }
        },
        retina_detect: true
      });
    }
  }, []);

  return (
    <div id='home' className='hero'>
      <div id="particles-js"></div>
      <img src={pfp} alt="" />
      <div className="hero-content">
        <h1>
          <span>Hey! I'm Wahaj Ahmed,</span><br/>
          a DevOps Engineer
        </h1>
        <TypeAnimation
          sequence={[
            "I'm a DevOps Engineer, I have skills that might help you to grow your company",
            1000,
            'I build Cloud/DevOps Infrastructure',
            1000,
            'I create scalable solutions',
            1000,
          ]}
          wrapper="p"
          speed={50}
          repeat={Infinity}
          style={{ fontSize: '22px', color: '#888', lineHeight: '1.6' }}
        />
        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className='acnchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
          </div>
          <a 
            href={Resume} 
            download="Wahaj-Resume.pdf"
            className="hero-resume"
            style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
            type="application/pdf"
          >
            My Resume
          </a>
        </div>
        <div className="hero-social">
          <a href="https://www.linkedin.com/in/wahaj-ahmed-ansari-00b5752b9" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/wahajahmad-cyber" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.instagram.com/meetwahaj" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://discord.com/users/920959349004853288" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="https://t.me/wahaj_aa" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
