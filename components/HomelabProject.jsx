import React from 'react';
import { Link } from 'react-router-dom';
import homelabPic1 from '../src/assets/homelabPic1.jpg';
import homelabPic2 from '../src/assets/homelabPic2.jpg';
import homelabPic3 from '../src/assets/homelabPic3.jpg';
import homelabPic4 from '../src/assets/homelabPic4.jpg';

const HomelabProject = () => {
  return (
    <div className="pb-5">
      <nav className="navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/projects">← return to projects</Link>
        </div>
      </nav>
      <div className="container p-sm-5 p-4 shadow rounded" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <div>
          <h1>Personal Home Lab</h1>
          <h5>I needed to practice my networking skills, so I made my own home lab.</h5>
        </div>
        <hr />
        <div id="carousel" className="carousel slide pb-4">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={homelabPic1} className="d-block w-100" alt="Homelab front" />
            </div>
            <div className="carousel-item">
              <img src={homelabPic2} className="d-block w-100" alt="Homelab side" />
            </div>
            <div className="carousel-item">
              <img src={homelabPic3} className="d-block w-100" alt="Homelab close up" />
            </div>
            <div className="carousel-item">
              <img src={homelabPic4} className="d-block w-100" alt="Proxmox dashboard" />
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
        <h5>Why make a home lab?</h5>
        <p>Simply put, I wanted to put what I’d been learning in my networking and cybersecurity classes into practice. I figured the best way to get hands-on experience with managing and manipulating computers over a network was to build my own. Over the course of a few months, I dove into forums, reading up on the hardware and software people were using in their personal homelabs. I took notes, compared setups, and—with a student budget in mind—set out to build something both practical and affordable.</p>
        <h5>Hardware</h5>
        <p>Components:</p>
        <ul>
          <li>Asus RT-AX1800S Router</li>
          <li>Netgear 5 Port Gigabit Switch</li>
          <li>2x 4GB Ram Raspberry Pi 5 with NVMe hats and 256gb NVMe drives</li>
          <li>Dell Optiplex 3070 9100T 8</li>
          <li>3D Printed Rack with Custom Mounts for Hardware</li>
        </ul>
        <p>I started with the router—something I already had on hand. While its CPU is a bit slow and the RAM is limited, it hasn’t been a bottleneck yet, so it works for now. The gigabit switch was a hand-me-down from a friend who no longer needed it. It works, and it was free—an easy decision to include it in the setup.
        <br /><br />
        As for the computers, I began with two Raspberry Pis. They’re perfect as low-power machines that can run processes or scripts 24/7 without making a noticeable impact on my electricity bill. Instead of relying on microSD cards for storage, I opted for NVMe drives to get faster, more reliable performance. I mounted NVMe boards to the Pis using 3D-printed custom brackets and standoffs, making sure they fit cleanly into my rack without interference.
        <br /><br />
        After getting comfortable with the Pis, I added a used Dell Optiplex 3070 Micro that I picked up on eBay. I set it up as a dedicated Proxmox machine to dive deeper into Linux environments and experiment with penetration testing tools using Kali Linux. More recently, I’ve also started working with containerization—something that Proxmox makes incredibly easy to set up and manage.</p>
      </div>
    </div>
  );
}

export default HomelabProject;