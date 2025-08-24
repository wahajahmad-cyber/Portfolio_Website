import './Education.css'

const Education = () => {
  return (
    <div className='education'>
      <div className="education-title">
        <h1>My Education<span>.</span></h1> 
      </div>

      <div className="education-timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-image">
              {/* Access directly from public folder */}
              <img src="/alnafi.jpeg" alt="Al-Nafi International College" />
            </div>
            <div className="timeline-text">
              <h3>Diploma In AiOps (Eduqual RQF Level 6)</h3>
              <p className="timeline-date">2023 - 2025</p>
              <p className="timeline-details">
                Completed my Diploma in Artificial Intelligence Operations
              </p>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-image">
              {/* Access directly from public folder */}
              <img src="/smartcollege.jpg" alt="The Smart College" />
            </div>
            <div className="timeline-text">
              <h3>Higher Secondary School Certificate (HSSC)</h3>
              <p className="timeline-date">2021 - 2023</p>
              <p className="timeline-details">
                The Smart College, Karachi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education