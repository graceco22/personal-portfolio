import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg6 from "../assets/img/notes.png";
import projImg2 from "../assets/img/recipe.png";
import projImg3 from "../assets/img/dicee.png";
import projImg4 from "../assets/img/drum.png";
import projImg5 from "../assets/img/simon.png";
import projImg1 from "../assets/img/project-img1.png";
import colorSharp2 from "../assets/img/ombre.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Personal Portfolio",
      description: "January 2024",
      imgUrl: projImg1,
    },
    {
      title: "Yummy Source",
      description: "January 2024",
      imgUrl: projImg2,
    },
    {
      title: "Dicee Game",
      description: "May 2023",
      imgUrl: projImg3,
    },
    {
      title: "Drum Kit",
      description: "May 2023",
      imgUrl: projImg4,
    },
    {
      title: "Simon Game",
      description: "May 2023",
      imgUrl: projImg5,
    },
    {
      title: "Notes App",
      description: "December 2023",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Click to access the GitHub repository!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>No projects on this page yet!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>No projects on this page yet!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}