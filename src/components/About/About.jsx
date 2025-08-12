import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import pfp from '../../assets/pfp2.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me<span>.</span></h1>
        <img src={theme_pattern} alt="" />  
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={pfp} alt="Suraj Mallick" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I’m Wahaj Ahmed, a passionate Cloud & DevOps Engineer in the making, with a strong foundation in AWS services and DevOps practices. I focus on learning and building cloud infrastructure using IaC, automation tools, and CI/CD for scalable, secure, and efficient environments.</p>
            
            <div className="key-highlights">
              <p>-I've completed multiple Bootcamps and hands-on projects, including automated deployments on AWS using Kubernetes and Argo CD, as well as CI/CD integration using Jenkins. My mission is to bridge the gap between development and operations through automation and scalability.</p>
              <br />
              <p>-Beyond the terminal and YAML files, I love writing LinkedIn posts, learning from real-world DevOps scenarios, and connecting with like-minded tech enthusiasts. I'm continuously evolving in my DevOps journey and always excited to take on new challenges.</p>
            </div>

            <p>Curious about cloud infrastructure, I explore new technologies to boost scalability and resilience. I'm passionate about solving infrastructure challenges, automating operations, and building reliable, scalable systems.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About