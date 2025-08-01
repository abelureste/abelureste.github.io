import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import homepic from '../src/assets/homepic.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
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

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={direction}
    >
      <div className="center-div" style={{ height: '100vh' }}>
        <div className="container py-5 mx-5 my-5 shadow rounded" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
          <div className="row">
            <div className="col-sm center-div pb-4 py-sm-4 px-4">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: -4,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                }}
              >
                <img src={homepic} style={{ width: '300px' }} className="shadow rounded img-fluid" alt="Abel Ureste" />
              </motion.div>
            </div>
            <div className="col-sm d-flex flex-column justify-content-center me-sm-4 px-4 px-sm-2 text-sm-start text-center">
              <h2 style={{ fontWeight: '600' }}>Welcome, I'm Abel. <br />A Developer. </h2>
              <p>I am intriguted in all things computer, from software development, to networks, to tinkering with hardware.</p>
            </div>
          </div>
          <div className="row justify-content-center px-4">
            <div className="d-grid gap-2 gap-sm-4" style={{ width: '800px', padding: '0px' }}>
              <a href="https://drive.google.com/file/d/1YYy4FDJszU7DmX0XjPz2zz1QGhXzXdiH/view?usp=sharing" className="item-sm btn btn-dark shadow">View Resume</a>
              <Link to="/personal-introduction" className="item-sm btn btn-dark shadow" state={{ direction: 'down' }} onClick={() => setDirection('down')}>Personal Introduction</Link>
              <Link to="/projects" className="item-sm btn btn-dark shadow" state={{ direction: 'down' }} onClick={() => setDirection('down')}>Projects</Link>
            </div>
            <div className="row justify-content-center text-center pt-2 pt-sm-4" style={{ width: '400px' }}>
              <div className="col">
                <a className="item-sm btn btn-dark shadow" href="mailto:aureste03@gmail.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
              <div className="col">
                <a className="item-sm btn btn-dark shadow" href="https://github.com/abelureste" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </div>
              <div className="col">
                <a className="item-sm btn btn-dark shadow" href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;