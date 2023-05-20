import React from "react";
import Nav from "../components/nav";
import ContactMe from "../sections/contactMe";
import Welcome from "../sections/welcome";
import Testimonials from "../sections/testimonials";
import Skills from "../sections/skills";
import AboutMe from "../sections/aboutMe";
import Portfolio from "../sections/portfolio";

import { Element } from "react-scroll";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Element name="welcome">
        <Welcome />
      </Element>
      <Element name="aboutMe">
        <AboutMe />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="testimonials">
        <Testimonials />
      </Element>
      {/* <Element name="contactMe">
        <ContactMe />
      </Element> */}
      
    </div>
  );
};

export default HomePage;
