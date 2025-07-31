import React from 'react';
import { Link } from 'react-router-dom';
import piFramePic1 from '../src/assets/piFramePic1.jpg';
import piFramePic2 from '../src/assets/piFramePic2.jpg';
import piFramePic3 from '../src/assets/piFramePic3.jpg';

const PiFrameProject = () => {
  return (
    <div className="pb-5">
      <nav className="navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/projects">← return to projects</Link>
        </div>
      </nav>
      <div className="container p-sm-5 p-4 shadow rounded" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <div>
          <h1>RaspberryPi Picture Frame</h1>
          <h5>Have you ever seen those fancy digital picture frame things? Well I decided to make one myself.</h5>
        </div>
        <hr />
        <div id="carousel" className="carousel slide pb-4">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={piFramePic1} className="d-block w-100" alt="Pi Frame front" />
            </div>
            <div className="carousel-item">
              <img src={piFramePic2} className="d-block w-100" alt="Pi Frame back" />
            </div>
            <div className="carousel-item">
              <img src={piFramePic3} className="d-block w-100" alt="Pi Frame close up" />
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
        <h5>Why a Picture Frame?</h5>
        <p>For my first venture into programming hardware with software, I set out to build something I’d been wanting for a long time: a digital picture frame. This project felt like the perfect opportunity to gain hands-on experience, both in coding and assembling physical components. For anyone exploring single-board computers, displaying an image on hardware is a major milestone, and for me, it was a personal goal I was eager to achieve.</p>
        <h5>Hardware</h5>
        <p>Components:</p>
        <ul>
          <li>Raspberry Pi Zero W 2</li>
          <li>Pimoroni Inky Impression 5.7"</li>
          <li>3D Printed Case designed by myself</li>
        </ul>
        <p>While researching hardware for the project, I discovered these super cool multicolor e-ink displays made by Pimoroni. Similar to a Kindle but with color, these displays stood out for their simplicity and versatility, they’re plug-and-play with any Raspberry Pi header, which made hardware setup a breeze. One especially unique feature is that they retain the displayed image even when the Pi is powered off—perfect for when I eventually make the device wireless. Assembly was straightforward: I just plugged the screen into the Raspberry Pi, inserted a microSD card loaded with Raspberry Pi OS, and it was ready to go. To house everything, I designed a custom picture frame in CAD with a slot for the screen-and-Pi combo, then 3D printed it from the STL file.</p>
        <h5>Software</h5>
        <p style={{ marginBottom: '0' }}>Utilized technologies:</p>
        <ul>
          <li>Python</li>
          <li>Flask</li>
          <li>HTML & CSS</li>
        </ul>
        <p>One of the main goals of this project was to make it incredibly user-friendly. I wanted my girlfriend to be able to easily access the Raspberry Pi and upload pictures without needing my help. To make that possible, I decided to build a web interface that anyone on our network could use to add their own photos. I used Flask, a lightweight Python web framework to host a simple HTML-based webpage that allows users to interact with the device. Through the interface, users can upload or delete images from the rotation and even adjust how frequently the pictures change, all without touching the hardware or code.</p>
        <a href="https://github.com/abelureste/raspiFrame" target="_blank" rel="noopener noreferrer">Click here for this project's GitHub repo.</a>
      </div>
    </div>
  );
}

export default PiFrameProject;