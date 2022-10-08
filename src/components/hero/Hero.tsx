import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import img1 from "../../assets/1.jpeg";
import img2 from "../../assets/2.jpeg";
import img3 from "../../assets/3.jpeg";

import "./hero.css";

type Props = {};

const slideImages = [
  {
    url: img1,
    caption: "Web Development And Design",
  },
  {
    url: img2,
    caption: "Data Analysis",
  },
  {
    url: img3,
    caption: "Machine Learning and AI",
  },
];

const Hero = (props: Props) => {
  return (
    <div style={{ width: "100%", height: "100%", background: "#02B1E3" }}>
      <Fade autoplay={true} infinite={false}>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                minHeight: "100vh",
                background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${slideImage.url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                clipPath: "polygon(0 0, 100% 0, 100% 87%, 0 100%)"
              }}
            >
              <span style={{fontSize: '2.5em', color: "#FFF"}}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Hero;
