import React from 'react';
import { Link } from 'react-router-dom';
import homepic from '../src/assets/homepic.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className="center-div" style={{ height: '100vh' }}>
      <div className="container py-5 mx-5 my-5 shadow rounded" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <div className="row">
          <div className="col-sm center-div pb-4 py-sm-4 px-4">
            <img src={homepic} style={{ width: '300px' }} className="shadow rounded img-fluid" alt="Abel Ureste" />
          </div>
          <div className="col-sm d-flex flex-column justify-content-center me-sm-4 px-4 px-sm-2 text-sm-start text-center">
            <h2>Welcome, I'm Abel. <br />A Developer. </h2>
            <p>I am intriguted in all things computer, from software development, to networks, to tinkering with hardware.</p>
          </div>
        </div>
        <div className="row justify-content-center px-4">
          <div className="d-grid gap-2 gap-sm-4" style={{ width: '800px', padding: '0px' }}>
            <a href="/src/assets/Abel Ureste Resume.docx" className="btn btn-dark shadow">Download Resume</a>
            <Link to="/personal-introduction" className="btn btn-dark shadow">Personal Introduction</Link>
            <Link to="/projects" className="btn btn-dark shadow">Projects</Link>
          </div>
          <div className="row justify-content-center text-center pt-2 pt-sm-4" style={{ width: '400px' }}>
            <div className="col">
              <a className="btn btn-dark shadow" href="mailto:aureste03@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
            <div className="col">
              <a className="btn btn-dark shadow" href="https://github.com/abelureste" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </div>
            <div className="col">
              <a className="btn btn-dark shadow" href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;