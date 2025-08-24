import { useEffect } from "react";
import "./Skills.css";
import ServicesData from "../../assets/services_data";
import { FaReact, FaCode, FaAws, FaTerminal, FaDatabase, FaGithub, FaDocker, FaGitAlt, FaShieldAlt, FaChartLine, FaPython, FaLinux } from "react-icons/fa";

const iconMap = {
  FaReact: FaReact,
  FaCode: FaCode,
  FaAws: FaAws,
  FaTerminal: FaTerminal,
  FaDatabase: FaDatabase,
  FaGithub: FaGithub,
  FaDocker: FaDocker,
  FaGitAlt: FaGitAlt,
  FaShieldAlt: FaShieldAlt,
  FaChartLine: FaChartLine,
  FaPython: FaPython,
  FaLinux: FaLinux,
};

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); // Remove class when out of view
        }
      });
    }, { 
      threshold: 0.1, // Reduced threshold for faster trigger
      rootMargin: '50px' // Added margin to trigger earlier
    });

    const skillCards = document.querySelectorAll('.skills-format');
    skillCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="skills" className="skills">
      <div className="skills-title">
        <h1>My Skills<span>.</span></h1>
        <img src="/theme_pattern.svg" alt="Theme Pattern" />
      </div>
      <div className="skills-container">
        {ServicesData.map((service, index) => {
          const IconComponent = iconMap[service.icon] || FaCode;
          return (
            <div key={index} className="skills-format fade-up">
              <div className="skill-header">
                <span className="skill-number">{service.s_no}</span>
                <IconComponent
                  size={48}
                  className="skill-icon"
                />
              </div>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;