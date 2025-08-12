import { useState, useEffect } from 'react'
import './Projects.css'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const desiredRepos = [
    "Wanderlust-Mega-Project",
    "E-Commerce-App-Project",
    "BankApp-DevSecOps-Project",
    "Netflix-DevSecOps-Project",
    "Full-Stack-ChatApp",
    "Two-Tier-Flask-App"
  ];

  useEffect(() => {
    fetch('https://api.github.com/users/wahajahmad-cyber/repos')
      .then(response => response.json())
      .then(data => {
        const filteredRepos = data.filter(repo => desiredRepos.includes(repo.name));
        const sortedRepos = filteredRepos.sort((a, b) => desiredRepos.indexOf(a.name) - desiredRepos.indexOf(b.name));
        setRepos(sortedRepos);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching repos:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div id='projects' className='projects'>
      <div className="projects-title">
        <h1>Projects<span>.</span></h1>
      </div>
      <div className="projects-container">
        {loading ? (
          <p>Loading repositories...</p>
        ) : (
          repos.map((repo) => (
            <div key={repo.id} className="repo-card">
              <h3>{repo.name}</h3>
              <p>{repo.description || 'No description available'}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>
          ))
        )}
      </div>
      <div className="showmore">
        <a href="https://github.com/wahajahmad-cyber" target="_blank" rel="noopener noreferrer">
          <p>View More on GitHub</p>
          <img src={arrow_icon} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Projects;
