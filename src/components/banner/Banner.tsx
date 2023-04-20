import React from "react";
import "./banner.css";
import Button from "../button/Button";

type Props = {};

function Banner({}: Props) {
  return (
    <div className="banner__container">
      <div className="banner__wrapper">
        <h1>Revolutionize Your Industry with Our Software</h1>
        <p>
          Our software solutions are designed to revolutionize your industry,
          from automating tasks to improving decision-making. Our experienced
          team will work closely with you to ensure your success.
        </p>
        <Button
          out="#333f48"
          txColor="#333f48"
          bgColor="transparent"
          name="Contact Us"
        />
      </div>
    </div>
  );
}

export default Banner;
