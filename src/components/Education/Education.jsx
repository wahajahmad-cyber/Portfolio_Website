import './Education.css'
import siliconUni from '../../assets/silicon-uni.jpg'
import davSchool from '../../assets/dav-school.jpg'

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
              <img src={siliconUni} alt="Silicon Institute" />
            </div>
            <div className="timeline-text">
              <h3>Bachelor of Technology in Computer Science</h3>
              <p className="timeline-date">2020 - 2024</p>
              <p className="timeline-details">
                Completed my B.Tech Graduation in Computer Science Engineering
              </p>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-image">
              <img src={davSchool} alt="DAV Public School" />
            </div>
            <div className="timeline-text">
              <h3>Higher Secondary Education</h3>
              <p className="timeline-date">2018 - 2020</p>
              <p className="timeline-details">
                DAV Public School, CDA, Cuttack
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
