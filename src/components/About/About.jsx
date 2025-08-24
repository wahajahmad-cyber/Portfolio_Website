import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-title">
        <h1>
          About Me<span>.</span>
        </h1>
        {/* Access directly from /public */}
        <img src="/theme_pattern.svg" alt="theme pattern" loading="lazy" />  
      </div>

      <div className="about-sections">
        {/* Left: Profile Image */}
        <div className="about-left">
          <img src="/Wahaj.jpeg" alt="Wahaj Ahmed" className="about-image" loading="lazy" />
        </div>

        {/* Right: Content */}
        <div className="about-right">
          <div className="about-para">
            <p>
              I&apos;m <strong>Wahaj Ahmed</strong>, a passionate <strong>Cloud & DevOps Engineer</strong> in the making, 
              with a strong foundation in <strong>AWS services</strong> and <strong>DevOps practices</strong>.  
              I focus on learning and building cloud infrastructure using <strong>IaC</strong>, automation tools, 
              and <strong>CI/CD pipelines</strong> for scalable, secure, and efficient environments.
            </p>

            <div className="key-highlights">
              <ul>
                <li>
                  Completed multiple bootcamps and hands-on projects, including automated deployments 
                  on <strong>AWS</strong> using <strong>Kubernetes</strong> and <strong>ArgoCD</strong>.
                </li>
                <li>
                  Experienced with CI/CD integrations using <strong>Jenkins</strong>, delivering faster and reliable pipelines.
                </li>
                <li>
                  Mission-driven to bridge the gap between development and operations through 
                  <strong>automation</strong> and <strong>scalability</strong>.
                </li>
                <li>
                  Active learner who enjoys writing LinkedIn posts, sharing DevOps learnings, 
                  and connecting with like-minded tech enthusiasts.
                </li>
              </ul>
            </div>

            <p>
              Curious about cloud infrastructure, I constantly explore new technologies to boost scalability 
              and resilience. My passion lies in solving infrastructure challenges, automating operations, 
              and building <strong>reliable, production-ready systems</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About