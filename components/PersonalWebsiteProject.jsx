import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const PersonalWebsiteProject = () => {
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
        <div>
          <h1>Personal Website</h1>
          <h5>Get to know me and my skills better.</h5>
        </div>
        <hr />
        <h5>Why create this site?</h5>
        <p>It's hard to get a grasp of who I am without a little bit of a writeup. This site was created to showcase my projects, including a detailed write up of my goals with them, what it took to make them, and what I have learned. Also, I wanted to include a bit of an introduction to know me besides just my qualifications. Hopefully you learned a little bit more about me, and maybe even find my projects interesting. I'm always open to learning more, so contact me if you want to collaborate on something.</p>
        <h5>What components make up this site?</h5>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
        </ul>
        <p>Yes, that's it. I found there wasn't a need to overcomplicate this. When looking for inspiration for my personal website, I found that many sites hide vital information past many different fancy UI's, which can make navigating the site feel like a maze. I designed this site to be simple and easy to navigate, with clear headings to get my points across simply and efficiently.</p>
      </div>
    </div>
    </motion.div>
  );
}

export default PersonalWebsiteProject;