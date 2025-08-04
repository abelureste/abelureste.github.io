import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import piFramePic from '../src/assets/piFramePic1SQUARE.jpg';
import homelabPic from '../src/assets/homelab.jpg';
import sakemamaPic from '../src/assets/sakemama.png';
import personalsitePic from '../src/assets/personalsite.png';
import pantrypalPic from '../src/assets/pantrypal.png'

const Projects = () => {
  const location = useLocation();
  const [direction, setDirection] = useState(location.state?.direction);

  const pageVariants = {
    initial: {
      y: direction === 'down' ? '100vh' : '-100vh',
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    exit: {
      y: direction === 'down' ? '-100vh' : '100vh',
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  const projects = [
    {
      title: "RaspberryPi Picture Frame",
      description: "I created my own digital picture frame.",
      link: "/projects/pi-frame",
      image: piFramePic
    },
    {
      title: "Personal Home Lab",
      description: "My home network lab.",
      link: "/projects/homelab",
      image: homelabPic
    },
    {
      title: "PantryPal Website",
      description: "A fullstack application to combat food waste.",
      link: "/projects/pantrypal-website",
      image: pantrypalPic
    },
    {
      title: "Bar Website",
      description: "Website made for the bar that I work at.",
      link: "/projects/bar-website",
      image: sakemamaPic
    },
    {
      title: "Personal Website",
      description: "The site you are browsing right now.",
      link: "/projects/personal-website",
      image: personalsitePic
    }
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={direction}
    >
      <div>
        <nav className="navbar">
          <div className="container-fluid justify-content-center">
            <Link className="navbar-brand" to="/" state={{ direction: 'up' }} onClick={() => setDirection('up')}>
              <FontAwesomeIcon icon={faArrowUp} size='sm'/> return to home
            </Link>
          </div>
        </nav>
        <div className="container pb-5 px-sm-5 px-xl-0 px-4">
          {projects.map((project, index) => (
            <div key={index}>
              <div className="row py-3 align-items-center item shadow rounded flex-column flex-sm-row text-center text-sm-start justify-content-center" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                <div className="col-auto">
                  <img src={project.image} style={{ width: '100%', maxWidth: '300px', borderRadius: '6px' }} alt={project.title} />
                </div>
                <div className="col">
                  <div className="row pt-3">
                    <h2 style={{ fontWeight: '600' }}>{project.title}</h2>
                    <p>{project.description}</p>
                  </div>
                  <Link className="btn btn-dark" to={project.link} state={{ direction: 'down' }} onClick={() => setDirection('down')}>
                    view write-up →
                  </Link>
                </div>
              </div>
              {index < projects.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;