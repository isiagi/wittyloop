import React from "react";
import { FaRegHandshake } from "react-icons/fa";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { AiOutlineTrophy } from "react-icons/ai";

import "./why.css";

type Props = {};

const Why = (props: Props) => {
  return (
    <div className="why__container">
      <div className="why__head">
        <h1>Why Work With Us</h1>
      </div>
      <div className="why__wrapper">
        <div className="why__card">
          <FaRegHandshake className="why__icon"/>
          <h2>Dedicated Team</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit primis
            rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.
          </p>
        </div>
        <div className="why__card">
          <TbAdjustmentsHorizontal className="why__icon"/>
          <h2>Flexibility</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit primis
            rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.
          </p>
        </div>
        <div className="why__card">
          <AiOutlineTrophy className="why__icon"/>
          <h2>Results</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit primis
            rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
