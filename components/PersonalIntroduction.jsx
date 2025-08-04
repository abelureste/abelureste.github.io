import { Link, useLocation } from 'react-router-dom';
import { motion, scale } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPython, faHtml5, faCss3, faWindows, faLinux, faGit, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faDesktop, faFlask, faScroll } from '@fortawesome/free-solid-svg-icons';

import personalintro1 from '../src/assets/personalintro1.JPG';
import personalintro4 from '../src/assets/personalintro4.JPG';

const PersonalIntroduction = () => {
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

  const languages = [
    { name: 'Java', icon: faJava },
    { name: 'Python', icon: faPython },
    { name: 'JavaScript', icon: faScroll },
    { name: 'HTML', icon: faHtml5 },
    { name: 'CSS', icon:faCss3 },
    { name: 'SQL', icon: faDatabase }
  ];

  const systems = [
    { name: 'Windows', icon: faWindows },
    { name: 'Linux', icon: faLinux },
    { name: 'Unix', icon: faDesktop }
  ];

  const technologies = [
    { name: 'Git', icon: faGit },
    { name: 'Flask', icon: faFlask },
    { name: 'Docker', icon: faDocker },
    { name: 'MySQL', icon: faDatabase }
  ];


  return (
      <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={direction}
    >
    <div className="pb-5 px-3">
      <nav className="navbar">
        <div className="container-fluid justify-content-center">
          <Link className="navbar-brand" to="/" state={{ direction: 'up' }}>⮤ return to home</Link>
        </div>
      </nav>
      <div className="container p-sm-5 p-4 shadow rounded" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <div>
          <h1 style={{ fontWeight: '600' }}>Personal Introduction</h1>
          <h5>Learn a little bit about me, professionally and personally</h5>
        </div>
        <hr />
        <div className="row align-items-center">
          <div className="col">
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
              <img src={personalintro1} className="d-block w-100" alt="Introduction 1" />
            </motion.div>
          </div>
          <div className="col-sm-8 pt-4 pt-sm-0">
            <h5>Let me introduce myself</h5>
            <p className="m-0">
              Hello! I'm Abel Ureste, a Computer Science and Cybersecurity graduate from the University of North Georgia. I've dedicated much of my time becoming proficient in both creating software, and practicing my networking skills through various personal projects. I love what I do, and strive to learn more about working with technology everyday. <br /><br /> In my free time, I like to practice my craft and apply topics that I've learned in my coursework. I find that there's so much that can be created by knowing how to code, and practicing is the only way to become better. Besides programming, I'm interested in too many hobbies to keep up with. <br /><br />
              <blockquote className="m-0">“Success is not final; failure is not fatal: It is the courage to continue that counts.”</blockquote>
              <div className="text-end"><cite title="—Winston Churchill">—Winston Churchill</cite></div>
            </p>
          </div>
        </div>
        <div className="row py-sm-4 pb-sm-5 py-2 pb-3">
            {/* Skills Section */}
            <div className="col-sm text-center py-2 py-sm-0">
                <h5>Languages</h5>
                {languages.map(skill => (
                    <div key={skill.name} className="skill rounded item-sm"><FontAwesomeIcon icon={skill.icon} /> {skill.name}</div>
                ))}
            </div>
            <div className="col-sm text-center py-2 py-sm-0">
                <h5>Systems</h5>
                {systems.map(skill => (
                    <div key={skill.name} className="skill rounded item-sm"><FontAwesomeIcon icon={skill.icon} /> {skill.name}</div>
                ))}
            </div>
            <div className="col-sm text-center py-2 py-sm-0">
                <h5>Technologies</h5>
                {technologies.map(skill => (
                    <div key={skill.name} className="skill rounded item-sm"><FontAwesomeIcon icon={skill.icon} /> {skill.name}</div>
                ))}
            </div>
        </div>
        <div className="row align-items-center">
          <div className="col-sm-8 pb-2">
            <h5>Get to know me</h5>
            <p>I like to stay busy, I find that boredom comes from a state of mind that lacks interest, which is unproductive towards becoming better at anything. Here are some of my hobbies outside of technology:</p>
            <ul>
              <li>Weight lifting / Running</li>
              <li>Cooking / Barbecuing</li>
              <li>Traveling / Photography</li>
              <li>Collecting Plants</li>
              <li>Playing with my dog, Chewy!</li>
            </ul>
            <p>Admittedly I have many more interests that I want to explore, but the hobbies listed above are what I can always generally fit in my schedule. Outside of working with computers, I try to limit my screen time to stay grounded, although I do enjoy the occasional videogame. I find that technology nowadays is geared toward grabbing our attention and making it hard to let go, which is not good for the human psyche.</p>
          </div>
          <div className="col">
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: 4,
              }}
              transition={{
              type: 'spring',
                stiffness: 300,
              }}
            >
              <img src={personalintro4} className="d-block w-100" alt="Hobby 1" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default PersonalIntroduction;