import React from 'react';
import { Link } from 'react-router-dom';

// Import images used in this component
import personalintro1 from '../src/assets/personalintro1.JPG';
import personalintro2 from '../src/assets/personalintro2.JPG';
import personalintro3 from '../src/assets/personalintro3.JPG';
import personalintro4 from '../src/assets/personalintro4.JPG';

const PersonalIntroduction = () => {
  const languages = [
    { name: 'Java', icon: 'fa-brands fa-java' },
    { name: 'Python', icon: 'fa-brands fa-python' },
    { name: 'HTML', icon: 'fa-brands fa-html5' },
    { name: 'CSS', icon: 'fa-brands fa-css' },
    { name: 'SQL', icon: 'fa-solid fa-database' }
  ];

  const systems = [
    { name: 'Windows', icon: 'fa-brands fa-windows' },
    { name: 'Linux', icon: 'fa-brands fa-linux' },
    { name: 'Unix', icon: 'fa-solid fa-desktop' }
  ];

  const technologies = [
    { name: 'Git', icon: 'fa-brands fa-git' },
    { name: 'Flask', icon: 'fa-solid fa-flask' },
    { name: 'Docker', icon: 'fa-brands fa-docker' },
    { name: 'MySQL', icon: 'fa-solid fa-database' }
  ];


  return (
    <div className="pb-5">
      <nav className="navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">← return to home</Link>
        </div>
      </nav>
      <div className="container p-sm-5 p-4 shadow rounded" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <div>
          <h1>Personal Introduction</h1>
          <h5>Learn a little bit about me, professionally and personally</h5>
        </div>
        <hr />
        <div className="row align-items-center">
          <div className="col">
            {/* Carousel 1 */}
            <div id="carousel1" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={personalintro1} className="d-block w-100" alt="Introduction 1" />
                </div>
                <div className="carousel-item">
                  <img src={personalintro2} className="d-block w-100" alt="Introduction 2" />
                </div>
                <div className="carousel-item">
                  <img src={personalintro3} className="d-block w-100" alt="Introduction 3" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
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
                    <div key={skill.name} className="skill rounded item-sm"><i className={skill.icon}></i> {skill.name}</div>
                ))}
            </div>
            <div className="col-sm text-center py-2 py-sm-0">
                <h5>Systems</h5>
                {systems.map(skill => (
                    <div key={skill.name} className="skill rounded item-sm"><i className={skill.icon}></i> {skill.name}</div>
                ))}
            </div>
            <div className="col-sm text-center py-2 py-sm-0">
                <h5>Technologies</h5>
                {technologies.map(skill => (
                    <div key={skill.name} className="skill rounded item-sm"><i className={skill.icon}></i> {skill.name}</div>
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
              <li>Collecting Indoor Plants</li>
            </ul>
            <p>Admittedly I have many more interests that I want to explore, but the hobbies listed above are what I can always generally fit in my schedule. Outside of working with computers, I try to limit my screen time to stay grounded, although I do enjoy the occasional videogame. I find that technology nowadays is geared toward grabbing our attention and making it hard to let go, which is not good for the human psyche.</p>
          </div>
          <div className="col">
            {/* Carousel 2 */}
            <div id="carousel2" className="carousel slide pb-4">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={personalintro4} className="d-block w-100" alt="Hobby 1" />
                </div>
                {/* You can add more images to the second carousel here if you want */}
                <div className="carousel-item">
                  <img src={personalintro4} className="d-block w-100" alt="Hobby 2" />
                </div>
                <div className="carousel-item">
                  <img src={personalintro4} className="d-block w-100" alt="Hobby 3" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalIntroduction;