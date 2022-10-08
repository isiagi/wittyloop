import React from "react";
import './nav.css'

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className="nav__container">
      <div className="nav__wrapper">
        <div className="nav__head">
          <h1>WittyLoop</h1>
        </div>
        <div className="nav__ul">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
