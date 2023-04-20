import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import img1 from "../../assets/web.jpg";
import img2 from "../../assets/cloud.jpg";
import img3 from "../../assets/mobile.jpg";

import "./hero.css";
import Button from "../button/Button";

type Props = {};

const slideImages = [
  {
    url: img1,
    caption: `Innovative Web Development Solutions to Elevate Your Brand`,
    text: "Elevate your brand with our innovative web development solutions, featuring user-friendly interfaces, stunning designs, and cutting-edge technologies.",
  },
  {
    url: img2,
    caption: "Building Scalable and Secure Cloud Solutions for Your Business",
    text: "Achieve greater agility, scalability, and security with our cloud development team's expertise",
  },
  {
    url: img3,
    caption:
      "Innovative Mobile App Development Solutions to Drive Your Success",
    text: "Achieve your business goals with our mobile app development solutions, customized to your unique needs and designed for seamless functionality and user engagement.",
  },
];

const Hero = (props: Props) => {
  return (
    <div style={{ width: "100%", height: "100%", background: "rgb(24,64,73)" }}>
      <Fade autoplay={true} infinite={true}>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                minHeight: "100vh",
                background: `linear-gradient(90deg, rgba(24,64,73,0.6068802521008403) 100%, rgba(10,231,42,0.15029761904761907) 100%, rgba(0,212,255,0.2007177871148459) 100%),url(${slideImage.url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                paddingLeft: "30px"
                // justifyContent: "center",
                // clipPath: "polygon(0 0, 100% 0, 100% 87%, 0 100%)"
              }}
            >
              <div style={{maxWidth: '800px' }}>
                <span style={{ fontSize: "1.3em", color: "#FFF"}}>
                  <h1>{slideImage.caption}</h1>
                </span>
                <span style={{ fontSize: "1.2em", color: "#FFF" }}>
                  <p>{slideImage.text}</p>
                  </span>
                  <Button txColor="white" out="green" bgColor="green" name={"Get Started"}/>
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Hero;
