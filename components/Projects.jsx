import { Link } from 'react-router-dom';
import piFramePic from '../src/assets/piFramePic1SQUARE.jpg';
import homelabPic from '../src/assets/homelab.jpg';
import sakemamaPic from '../src/assets/sakemama.png';
import personalsitePic from '../src/assets/personalsite.png';
import isometricgamePic from '../src/assets/isometricgame.png';

const Projects = () => {
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
    },
    {
      title: "Isometric Pygame",
      description: "An isometric videogame - current WORK IN PROGRESS",
      link: "#",
      image: isometricgamePic
    }
  ];

  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">← return to home</Link>
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
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
                <Link className="btn btn-dark" to={project.link}>view write-up →</Link>
              </div>
            </div>
            {index < projects.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;