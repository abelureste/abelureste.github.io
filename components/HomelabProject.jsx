import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import homelabPic1 from '../src/assets/homelabPic1.jpg';
import homelabPic2 from '../src/assets/homelabPic2.jpg';
import homelabPic3 from '../src/assets/homelabPic3.jpg';
import homelabPic4 from '../src/assets/homelabPic4.jpg';

const HomelabProject = () => {
  const images = [homelabPic1, homelabPic2, homelabPic3, homelabPic4];
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
    <div className="pb-5 px-3">
      <nav className="navbar">
        <div className="container-fluid justify-content-center">
          <Link className="navbar-brand" to="/projects"><FontAwesomeIcon icon={faArrowUp} size='sm'/> return to projects</Link>
        </div>
      </nav>
      <div className="container p-sm-5 p-4 shadow rounded" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <div className="pb-3">
          <h1 style={{ fontWeight: '600' }}>Personal Home Lab</h1>
          <h5>I needed to practice my networking skills, so I made my own home lab.</h5>
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
        <h5>Why make a home lab?</h5>
        <p>Simply put, I wanted to put what I’d been learning in my networking and cybersecurity classes into practice. I figured the best way to get hands-on experience with managing and manipulating computers over a network was to build my own. Over the course of a few months, I dove into forums, reading up on the hardware and software people were using in their personal homelabs. I took notes, compared setups, and set out to build something both practical and affordable.</p>
        <h5>Hardware</h5>
        <p>Components:</p>
        <ul>
          <li>Asus RT-AX1800S Router</li>
          <li>Netgear 5 Port Gigabit Switch</li>
          <li>2x 4GB Ram Raspberry Pi 5 with NVMe hats and 256gb NVMe drives</li>
          <li>Dell Optiplex 3070 9100T 8</li>
          <li>3D Printed Rack with Custom Mounts for Hardware</li>
        </ul>
        <p>I started with the router, something I already had on hand. While its CPU is a bit slow and the RAM is limited, it hasn’t been a bottleneck yet, so it works for now. The gigabit switch was a hand-me-down from my father who no longer needed it. It works, and it was free, an easy decision to include it in the setup.
        <br /><br />
        As for the computers, I began with two Raspberry Pis. They’re perfect as low-power machines that can run processes 24/7 without making a noticeable impact on my electricity bill. Instead of relying on microSD cards for storage, I opted for NVMe drives to get faster, more reliable performance. I mounted NVMe boards to the Pis using 3D-printed custom brackets and standoffs, making sure they fit cleanly into my rack without interference.
        <br /><br />
        After getting comfortable with the Pis, I added a used Dell Optiplex 3070 Micro that I picked up on eBay. I set it up as a dedicated Proxmox machine to dive deeper into Linux environments and experiment with penetration testing tools using Kali Linux. More recently, I’ve also started working with containerization, something that Proxmox makes incredibly easy to set up and manage.</p>
      </div>
    </div>
    </motion.div>
  );
}

export default HomelabProject;