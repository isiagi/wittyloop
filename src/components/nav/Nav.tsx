import React from "react";
import { MdTableRows } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import logo from "../../assets/logo.png";
import "./nav.css";
import { Link, NavLink } from "react-router-dom";

type Props = {};

const Nav = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const [offSet, setOffset] = React.useState(0);

  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <div className={offSet > 40 ? "nav__container1" : "nav__container"}>
      <div className="nav__wrapper">
        <div className="nav__head">
          <img src={logo} alt="wittyloop_logo" className="witty__logo" />
        </div>
        <div className={`${"nav__ul"} ${open ? "active" : ""}`}>
          <ul>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activez" : "")}
              end
            >
              <li className="nav__link">Home</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "activez" : "")}
            >
              <li className="nav__link">About</li>
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "activez" : "")}
            >
              <li className="nav__link">Services</li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "activez" : "")}
            >
              <li className="nav__link">Contact</li>
            </NavLink>
          </ul>
        </div>
        <div className="nav__icons">
          {open ? (
            <GiCancel className="nav__icon" onClick={() => setOpen(false)} />
          ) : (
            <MdTableRows className="nav__icon" onClick={() => setOpen(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
