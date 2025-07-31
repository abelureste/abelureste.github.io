import React from 'react';
import { Link } from 'react-router-dom';
import barwebsitePic1 from '../src/assets/barwebsitePic1.png';
import barwebsitePic2 from '../src/assets/barwebsitePic2.png';
import barwebsitePic3 from '../src/assets/barwebsitePic3.png';

const BarWebsiteProject = () => {
  return (
    <div className="pb-5">
      <nav className="navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/projects">← return to projects</Link>
        </div>
      </nav>
      <div className="container p-sm-5 p-4 shadow rounded" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <div>
          <h1>Bar Website</h1>
          <h5>My workplace lacked an online presence, so I created a website.</h5>
        </div>
        <hr />
        <div id="carousel" className="carousel slide pb-4">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={barwebsitePic1} className="d-block w-100" alt="Sake Mama logo" />
            </div>
            <div className="carousel-item">
              <img src={barwebsitePic2} className="d-block w-100" alt="Instagram page" />
            </div>
            <div className="carousel-item">
              <img src={barwebsitePic3} className="d-block w-100" alt="Contact information" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <h5>My first professional project</h5>
        <p>In today's age, if your business doesn't have an online presence, it might as well not exist. A simple website is all it takes to let people know what your business is about. In this case, the bar that I have worked at part-time during my college career lacked a real online presence. Before this website, an outdated facebook page and a dead instagram account was all that let people know this business was legit. If you looked up a place and saw nothing about it would you be inclined to go? There was also no good way to accept job applications and bookings for private events.</p>
      </div>
    </div>
  );
}

export default BarWebsiteProject;