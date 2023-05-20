import React, { useState, useEffect } from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Element } from "react-scroll";
import { elastic as Menu } from "react-burger-menu";

const Nav = () => {
  const [isOpen, toggleIsOpen] = useState(false);
  useEffect(() => {
    // console.log(document.getElementsByClassName("bm-burger-button")[0])
    // document.getElementsByClassName("bm-burger-button")[0].onclick = ()=>{
    //     console.log("here")
    //     toggleIsOpen(true)
    // }
  }, []);
  return (
    <div>
      <header>

          <MDBNavbar
            className="myNavBar"
            fixed="top"
            dark
            scrolling
            transparent
          >
            <MDBNavbarBrand>
              <img
                src={require("../images/logo.png")}
                className="fluid logo_img"
                alt="logo"
              />
            </MDBNavbarBrand>
            <Menu
              right
              pageWrapId={"page-wrap"}
              outerContainerId={"outer-container"}
              isOpen={isOpen}
            >
              {/* <main id="page-wrap"> */}
              <Link
                to="welcome"
                spy={true}
                smooth={true}
                duration={1200}
                onClick={() => {
                  toggleIsOpen(true);
                  toggleIsOpen(false);
                }}
              >
                <a id="home" className="aTag" href="/">
                  Home
                </a>
              </Link>
              <Link
                to="aboutMe"
                spy={true}
                smooth={true}
                duration={1200}
                onClick={() => {
                  toggleIsOpen(true);
                  toggleIsOpen(false);
                }}
              >
                <a id="about" className="aTag" href="/">
                  About Me
                </a>
              </Link>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                duration={1200}
                onClick={() => {
                  toggleIsOpen(true);
                  toggleIsOpen(false);
                }}
              >
                <a id="contact" className="aTag" href="/">
                  Portfolio
                </a>
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={1200}
                onClick={() => {
                  toggleIsOpen(true);
                  toggleIsOpen(false);
                }}
              >
                <a id="contact" className="aTag" href="/">
                  Skills
                </a>
              </Link>
              <Link
                to="testimonials"
                spy={true}
                smooth={true}
                duration={1200}
                onClick={() => {
                  toggleIsOpen(true);
                  toggleIsOpen(false);
                }}
              >
                <a id="contact" className="aTag" href="/">
                  Testimonials
                </a>
              </Link>
              {/* <Link
                to="contactMe"
                spy={true}
                smooth={true}
                duration={1200}
                onClick={() => {
                  toggleIsOpen(true);
                  toggleIsOpen(false);
                }}
              > */}
                <a id="contact" className="aTag" href="mailto:monaseyf25@gmail.com" >
                  Contact Me
                </a>
              {/* </Link> */}

              {/* </main> */}
            </Menu>
          </MDBNavbar>
      </header>
    </div>
  );
};

export default Nav;
