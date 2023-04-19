import React from "react";
import { AiOutlineWindows } from "react-icons/ai";
import {GrAnalytics} from 'react-icons/gr'

import img1 from "../../assets/web.jpg";
import img2 from "../../assets/cloud.jpg";
import img3 from "../../assets/mobile.jpg";

import './services.css'

type Props = {};

const Services = (props: Props) => {
  return (
    <div className="service__container">
      <h2 style={{color: '#212529', fontSize: '2.4em', paddingBlock: '1em'}}>Our Services</h2>
      <div className="service__wrapper">
        <div className="service__item">
          <img src={img1} alt="" className="service__image"/>
          <h2>Web App And Websites Development</h2>
          <p>
            We develop customer mobile and web apps like e-commerce, management
            systems and we also build websites for put your business out to the
            public.
          </p>
        </div>
        <div className="service__item">
        <img src={img2} alt="" className="service__image"/>
          <h2>Cloud / Cloud Native Development</h2>
          <p>
            We develop customer mobile and web apps like e-commerce, management
            systems and we also build websites for put your business out to the
            public.
          </p>
        </div>
        <div className="service__item">
        <img src={img3} alt="" className="service__image"/>
          <h2>Mobile Development</h2>
          <p>
            We develop customer mobile and web apps like e-commerce, management
            systems and we also build websites for put your business out to the
            public.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
