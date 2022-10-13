import React from "react";
import { AiOutlineWindows } from "react-icons/ai";
import {GrAnalytics} from 'react-icons/gr'

import './services.css'

type Props = {};

const Services = (props: Props) => {
  return (
    <div className="service__container">
      <h2 style={{color: '#212529'}}>Our Services</h2>
      <div className="service__wrapper">
        <div className="service__item">
          <AiOutlineWindows className="service__icon"/>
          <h2>Mobile, Web App And Websites Development</h2>
          <p>
            We develop customer mobile and web apps like e-commerce, management
            systems and we also build websites for put your business out to the
            public.
          </p>
        </div>
        <div className="service__item">
          <GrAnalytics className="service__icon"/>
          <h2>Data Analysis And Presentation</h2>
          <p>
            We develop customer mobile and web apps like e-commerce, management
            systems and we also build websites for put your business out to the
            public.
          </p>
        </div>
        <div className="service__item">
          <AiOutlineWindows className="service__icon"/>
          <h2>Machine Learning And Artificial Intelligence</h2>
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
