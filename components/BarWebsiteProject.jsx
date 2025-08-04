import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import barwebsitePic1 from '../src/assets/barwebsitePic1.png';
import barwebsitePic2 from '../src/assets/barwebsitePic2.png';
import barwebsitePic3 from '../src/assets/barwebsitePic3.png';

const BarWebsiteProject = () => {
    const images = [barwebsitePic1, barwebsitePic2, barwebsitePic3, barwebsitePic2];
    const [rotation, setRotation] = useState(0);
    const location = useLocation();
    const direction = location.state?.direction;

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
        y: direction === 'up' ? '-100vh' : '100vh',
        opacity: 0,
        transition: { duration: 0.5, ease: 'easeInOut' },
        },
    };

    const nextImage = () => {
        setRotation((prevRotation) => prevRotation - 90);
    };

    const prevImage = () => {
        setRotation((prevRotation) => prevRotation + 90);
    };

  const imagePositions = [
    { rotateY: 0, translateZ: 325 },   // Front
    { rotateY: 90, translateZ: 325 },  // Right
    { rotateY: 180, translateZ: 325 }, // Back
    { rotateY: -90, translateZ: 325 }, // Left
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={direction}
    >
    <div className="pb-5">
      <nav className="navbar">
        <div className="container-fluid justify-content-center">
          <Link className="navbar-brand" to="/projects"><FontAwesomeIcon icon={faArrowUp} size='sm'/> return to projects</Link>
        </div>
      </nav>
      <div className="container p-sm-5 p-4 shadow rounded" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <div className="pb-3">
          <h1 style={{ fontWeight: '600' }}>Bar Website</h1>
          <h5>My workplace lacked an online presence, so I created a website.</h5>
          <hr />
        </div>
        <div className="position-relative">
            <div className="carousel-container my-5 pb-4">
                <motion.div
                className="carousel"
                animate={{ rotateY: rotation }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                {images.map((src, i) => (
                    <motion.img
                    key={i}
                    src={src}
                    className="carousel-image"
                    style={{
                        transform: `rotateY(${imagePositions[i].rotateY}deg) translateZ(${imagePositions[i].translateZ}px)`,
                    }}
                    />
                ))}
                </motion.div>
            </div>
            <button className="carousel-control-prev" type="button" onClick={prevImage}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" onClick={nextImage}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <h5>My first professional project</h5>
        <p>In today's age, if your business doesn't have an online presence, it might as well not exist. A simple website is all it takes to let people know what your business is about. In this case, the bar that I have worked at part-time during my college career lacked a real online presence. Before this website, an outdated facebook page and a dead instagram account was all that let people know this business was legit. If you looked up a place and saw nothing about it would you be inclined to go?</p>
      </div>
    </div>
    </motion.div>
  );
}

export default BarWebsiteProject;