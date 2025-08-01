import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import pantrypalPic1 from '../src/assets/pantrypal-img1-cropped.png';
import pantrypalPic2 from '../src/assets/pantrypal-img2-cropped.png';
import pantrypalPic3 from '../src/assets/pantrypal-img3-cropped.png';
import pantrypalPic4 from '../src/assets/pantrypal-img4-cropped.png';

const PantryPalProject = () => {
  const images = [pantrypalPic1, pantrypalPic2, pantrypalPic3, pantrypalPic4];
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
          <Link className="navbar-brand" to="/projects">⮤ return to projects</Link>
        </div>
      </nav>
      <div className="container p-sm-5 p-4 shadow rounded" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <div className="pb-3">
          <h1 style={{ fontWeight: '600' }}>PantryPal Website</h1>
          <h5>Practicing full-stack development by building an application to solve a problem.</h5>
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
        <h5>Why create this website?</h5>
        <p>During my college career, one of my core classes that stuck with me was ecology. In this class, we learned about plants and animals, and how humans are altering their habitats. One week, we talked about the immense waste that civilization unloaded into our planet, including pollutants and physical waste. A massive amount of waste highlighted in this lesson was food waste. Food waste is a shocking reality that most people are unaware of. Consumer habits lead the food industry to be extremely selective when harvesting fruits and veggies, since consumers refuse to purchase malformed or undersized produce. On top of this, households waste a large percentage of the food they purchase, with 6 pounds of edible food being thrown on each week per household on average. PantryPal was created as a solution to fight against this waste.
        <br /><br />
        On the other hand, my knowledge of full-stack development was limited, with my only experience consisting of Django and Flask applications. I've found that the best way to learn is through practice, and building a project assists in the learning process. Over the course of this project, I grew a better grasp of the difficulties that come with full-stack development, from creating streamlined UI, to sending information to the database.
        </p>
        <h5>Methodology</h5>
        <p>Technologies:</p>
        <ul>
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Plus various Node libraries</li>
        </ul>
        <p>I decided to work with a popular technology stack for streamlined full-stack development, called the MERN stack. This consisted of React for the frontend, Node.js and Express.js for the backend, and MongoDB for the database. I also decided to work with MongoDB due to it being a non-relational database, which is a database that I was unfamiliar with at the time. These technologies offered a lot of resources online to help with the learning process.
        <br /><br />
        This website features a secure log in and registration process, which hashes passwords with salt to ensure security of user's credentials. It also features multi-factor authentication, in which a user links their account to an authentication app on their phone to give a unique MFA code every 30 seconds. The main function of the app consists of a pantry where a user can input their groceries, including expiration date and quantity. The user can keep track of their pantry via the user dashboard, which gives an overview of how their pantry is being utilized to prevent wastage. There is also an AI powered recipe suggestion page, which can refer to a user's inventory to suggest recipes that would use existing items.
        </p>
      </div>
    </div>
    </motion.div>
  );
}

export default PantryPalProject;