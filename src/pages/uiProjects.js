import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBRow, MDBCol } from "mdbreact";
import { Link } from "react-router-dom";
import UIProjectComponent from "../components/uiProject";
import uiProjectsData from "../data/uiProjectsData";
const UIProjects = () => {
  return (
    <MDBContainer style={{ marginTop: "120px" }}>
      <MDBNavbar color="myNavBar" fixed="top" dark scrolling transparent>
        <Link to="/">
          <MDBNavbarBrand>
            <img
              src={require("../images/logo.png")}
              className="fluid logo_img"
              alt="logo"
            />
          </MDBNavbarBrand>
        </Link>{" "}
        <h3 className="sectionTitle" style={{ marginTop: "15px" }}>
          UI - UX Projects{" "}
        </h3>{" "}
      </MDBNavbar>
      <MDBRow>
       
          {uiProjectsData.map((item) => {
            return (
              <UIProjectComponent
                animationDelay={item.animationDelay}
                imgSource={item.imgSource}
                title={item.title}
                description={item.description}
                employer={item.employer}
                team={item.team}
                date={item.date}
                role={item.role}
              />
            );
          })}
      
      </MDBRow>
    </MDBContainer>
  );
};

export default UIProjects;
