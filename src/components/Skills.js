import skill1 from "../assets/img/1.png";
import skill2 from "../assets/img/2.png";
import skill3 from "../assets/img/3.png";
import skill4 from "../assets/img/4.png";
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp2 from "../assets/img/ombre.png";
import Carousel from 'react-multi-carousel';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Technical Skills</h2>
              <br></br>
              <br></br>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={skill1}/>
                </div>
                <div className="item">
                  <img src={skill2}/>
                </div>
                <div className="item">
                  <img src={skill3}/>
                </div>
                <div className="item">
                  <img src={skill4}/>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp2}
        alt="Image"
      />
    </section>
  );
};
