import React, { useEffect } from "react";
import { FaRegHandshake } from "react-icons/fa";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { AiOutlineTrophy } from "react-icons/ai";

import Aos from "aos";

import "aos/dist/aos.css";

import "./why.css";

type Props = {};

const Why = (props: Props) => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);
  return (
    <div className="why__container">
      <div data-aos="fade" className="why__head">
        <h1>Why Work With Us</h1>
        <div className="sliderz"/>
        <p style={{ color: "#4e5760", fontWeight: "400",maxWidth:'400px' }}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum,
          nullam tempor malesuada laoreet tempus blandit pretium etc.
        </p>
      </div>
      <div className="why__wrapper">
        <div data-aos="slide-up" data-aos-duration="1000" className="why__card">
          <FaRegHandshake className="why__icon" />
          <h2 style={{ color: "#333F48", fontWeight: "400" }}>
            Dedicated Team
          </h2>
          <p style={{ color: "#4e5760", fontWeight: "400" }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit primis
            rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.
          </p>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000" className="why__card">
          <TbAdjustmentsHorizontal className="why__icon" />
          <h2 style={{ color: "#333F48", fontWeight: "400" }}>Flexibility</h2>
          <p style={{ color: "#4e5760", fontWeight: "400" }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit primis
            rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.
          </p>
        </div>
        <div
          data-aos="flip-right"
          data-aos-duration="2000"
          className="why__card"
        >
          <AiOutlineTrophy className="why__icon" />
          <h2 style={{ color: "#333F48", fontWeight: "400" }}>Results</h2>
          <p style={{ color: "#4e5760", fontWeight: "400" }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit primis
            rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
