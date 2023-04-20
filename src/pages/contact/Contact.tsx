import React from "react";
import "./contact.css";
import Wrapper from "../../components/wrapper/Wrapper";
import Button from "../../components/button/Button";

import {FaMapMarkedAlt } from 'react-icons/fa'
import {BiPhoneCall} from 'react-icons/bi'
import {HiOutlineMailOpen} from 'react-icons/hi'

import img from '../../assets/mobile.jpg'

type Props = {};

function Contact({}: Props) {
  return (
    <>
      <Wrapper name="Contact" img={img} />
      <div className="contact__container">
        <div className="contact__wrapper">
          <div className="contact__form">
            <form>
              <div className="contact__item">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="contact__one"
                />
              </div>
              <div className="contact__item">
                <input
                  type="text"
                  name="name"
                  placeholder="Email"
                  className="contact__one"
                />
              </div>
              <div className="contact__item">
                <input
                  type="text"
                  name="name"
                  placeholder="Subject"
                  className="contact__one"
                />
              </div>
              <div className="contact__item">
                <textarea className="contact__one" cols={30} rows={10} placeholder="Message"></textarea>
              </div>
              <Button txColor="white" bgColor="green" name="Submit"/>
            </form>
          </div>
          <div className="contact__cards">
            <div className="contact__card">
                <FaMapMarkedAlt className="contact__icon"/>
                <h3>Office Address</h3>
                <p>4096 Modesto, CA 95350, USA</p>
            </div>
            <div className="contact__card">
                <BiPhoneCall className="contact__icon"/>
                <h3>Office Address</h3>
                <p>4096 Modesto, CA 95350, USA</p>
            </div>
            <div className="contact__card">
                <HiOutlineMailOpen className="contact__icon"/>
                <h3>Office Address</h3>
                <p>4096 Modesto, CA 95350, USA</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
