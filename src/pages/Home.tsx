import React from "react";
import Hero from "../components/hero/Hero";
import Nav from "../components/nav/Nav";
import Why from "../components/why/Why";
import Services from "../components/services/Services"

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Why />
      <Services />
    </div>
  );
};

export default Home;
