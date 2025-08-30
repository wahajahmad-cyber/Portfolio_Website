import { useEffect } from "react";
import "./Skills.css";
import ServicesData from "../../assets/services_data";

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    }, { threshold: 0.1, rootMargin: "50px" });

    const skillCards = document.querySelectorAll(".skills-format");
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
          const IconComponent = service.icon;
          return (
            <div key={index} className="skills-format fade-up">
              <div className="skill-header">
                <span className="skill-number">{service.s_no}</span>
                <IconComponent size={48} className="skill-icon" />
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
