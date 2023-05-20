import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBAnimation,
  MDBNavbar,
  MDBNavbarBrand,
} from "mdbreact";
import { Link } from "react-router-dom";
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
      </MDBNavbar>{" "}
      <MDBAnimation reveal type="fadeInLeft" duration="1500ms" delay="0ms">
        <MDBRow
          style={{ marginRight: "0px", marginLeft: "0px", marginTop: "60px" }}
        >
          <MDBCol lg="9" style={{ padding: "0px 10px" }}>
            <div className="image-border">
              <a href="http://iranpedcong.tums.ac.ir/">
                <img
                  className="UiPhoto"
                  src={require("../images/iranped.png")}
                  alt="/"
                />
              </a>{" "}
            </div>{" "}
          </MDBCol>
          <MDBCol lg="3">
            <MDBRow>
              <MDBCol lg="12">
                <h2 className="UiTitle"> IRANPED </h2>{" "}
              </MDBCol>{" "}
              <MDBCol>
                <p className="descriptOne">
                  The purpose of this project is to inform about the
                  International congress of Pediatrics.Due to the coronavirus
                  pandemic, the conference is scheduled to hold virtually.Rayan
                  Pajouh company has provided them a platform to manage their
                  content dynamically.Also This website displays information in
                  both Persian and English.{" "}
                </p>{" "}
              </MDBCol>{" "}
            </MDBRow>{" "}
          </MDBCol>{" "}
        </MDBRow>{" "}
        <MDBRow
          style={{
            marginRight: "0px",
            marginLeft: "0px",
            paddingTop: "20px",
            marginBottom: "60px",
          }}
        >
          <MDBCol lg="12" className="descript">
            <MDBRow
              style={{
                paddingTop: "10px",
              }}
            >
              <MDBCol lg="3">
                <img
                  className="UiLogo"
                  src={require("../images/client.png")}
                  alt="/"
                />
                <h4 className="UiTitle"> Employer: </h4>{" "}
                <p> Children 's Medical Center-Tehran</p>{" "}
              </MDBCol>{" "}
              <MDBCol lg="3">
                <img
                  className="UiLogo"
                  src={require("../images/team.png")}
                  alt="/"
                />
                <h4 className="UiTitle"> Team: </h4>{" "}
                <p> Rayan Pajouh Salamat </p>{" "}
              </MDBCol>
              <MDBCol lg="3">
                <img
                  className="UiLogo"
                  src={require("../images/date.png")}
                  alt="/"
                />
                <h4 className="UiTitle"> Date: </h4>{" "}
                <p> July 22, 2020 - August 22, 2020 </p>{" "}
              </MDBCol>{" "}
              <MDBCol lg="3">
                <img
                  className="UiLogo"
                  src={require("../images/services.png")}
                  alt="/"
                />
                <h4 className="UiTitle"> MyRole: </h4> <p> UI designer </p>{" "}
              </MDBCol>{" "}
            </MDBRow>{" "}
          </MDBCol>{" "}
        </MDBRow>{" "}
      </MDBAnimation>{" "}
      <MDBAnimation reveal type="fadeInLeft" duration="1500ms" delay="500ms">
        <MDBRow style={{ marginRight: "0px", marginLeft: "0px" }}>
          <MDBCol lg="9" style={{ padding: "0px 10px" }}>
            <div className="image-border">
              <a href="http://virtualservice.tums.ac.ir/">
                <img
                  className="UiPhoto"
                  src={require("../images/2.PNG")}
                  alt="/"
                />
              </a>{" "}
            </div>{" "}
          </MDBCol>
          <MDBCol lg="3">
            <MDBRow>
              <MDBCol lg="12">
                <h2 className="UiTitle"> Virtual Service </h2>{" "}
              </MDBCol>{" "}
              <MDBCol>
                <p className="descriptOne">
                  According to international standards of e - learning and
                  educational needs, Tehran University of Medical Sciences has
                  managed to present part of its educational programs in the
                  form of online courses.In this project, I have attended
                  several meeting to comperhend what exactly our costumers
                  want.As a member of front - end web developers, I was
                  corporating for applying their claims to interactive visual
                  design.{" "}
                </p>{" "}
              </MDBCol>{" "}
            </MDBRow>{" "}
          </MDBCol>{" "}
        </MDBRow>
        <MDBRow
          style={{ marginRight: "0px", marginLeft: "0px", paddingTop: "20px" }}
        >
          <MDBCol lg="12" className="descript">
            <MDBRow
              style={{
                paddingTop: "10px",
              }}
            >
              <MDBCol lg="3">
                <img
                  className="UiLogo"
                  src={require("../images/client.png")}
                  alt="/"
                />
                <h4 className="UiTitle"> Employer: </h4>{" "}
                <p> Tehran University of Medical Science </p>{" "}
              </MDBCol>{" "}
              <MDBCol lg="3">
                <img
                  className="UiLogo"
                  src={require("../images/team.png")}
                  alt="/"
                />
                <h4 className="UiTitle"> Team: </h4>{" "}
                <p> Rayan Pajouh Salamat </p>{" "}
              </MDBCol>
              <MDBCol lg="3">
                <img
                  className="UiLogo"
                  src={require("../images/date.png")}
                  alt="/"
                />
                <h4 className="UiTitle"> Date: </h4>{" "}
                <p> March 20, 2020 - June 30, 2020 </p>{" "}
              </MDBCol>{" "}
              <MDBCol lg="3">
                <img
                  className="UiLogo"
                  src={require("../images/services.png")}
                  alt="/"
                />
                <h4 className="UiTitle"> MyRole: </h4>{" "}
                <p> front - end web developer </p>{" "}
              </MDBCol>{" "}
            </MDBRow>{" "}
          </MDBCol>{" "}
        </MDBRow>{" "}
      </MDBAnimation>{" "}
      <MDBAnimation reveal type="fadeInLeft" duration="1500ms" delay="1000ms">
        <MDBRow
          style={{ marginRight: "0px", marginLeft: "0px", marginTop: "60px" }}
        >
          <MDBCol lg="9" style={{ padding: "0px 10px" }}>
            <div className="image-border">
              <a href="https://arman.vums.ac.ir/">
                <img
                  className="UiPhoto"
                  src={require("../images/arman.png")}
                  alt="/"
                />
              </a>{" "}
            </div>{" "}
          </MDBCol>
          <MDBCol lg="3">
            <MDBRow>
              <MDBCol lg="12">
                <h2 className="UiTitle"> ARMAN </h2>{" "}
              </MDBCol>{" "}
              <MDBCol>
                <p className="descriptOne">
                  Arman is a MOOCs(Massive Open Online Courses) for "Massive and
                  Modern National Computer Training.Massive refers to the
                  unlimited registration of individuals.The purpose of this
                  project is to provide high quality and credible education
                  system for students and graduates.{" "}
                </p>{" "}
              </MDBCol>{" "}
            </MDBRow>{" "}
          </MDBCol>{" "}
        </MDBRow>{" "}
        <MDBRow
          style={{ marginRight: "0px", marginLeft: "0px", paddingTop: "20px" }}
        >
          <MDBCol lg="12" className="descript">
            <MDBRow
              style={{
                paddingTop: "10px",
              }}
            >
              <MDBCol lg="3">
                <img
                  className="UiLogo"
                  src={require("../images/client.png")}
                  alt="/"
                />
                <h4 className="UiTitle"> Employer: </h4>{" "}
                <p> Virtual University of Medical Sciences </p>{" "}
              </MDBCol>{" "}
              <MDBCol lg="3">
                <img
                  className="UiLogo"
                  src={require("../images/team.png")}
                  alt="/"
                />
                <h4 className="UiTitle"> Team: </h4>{" "}
                <p> Rayan Pajouh Salamat </p>{" "}
              </MDBCol>
              <MDBCol lg="3">
                <img
                  className="UiLogo"
                  src={require("../images/date.png")}
                  alt="/"
                />
                <h4 className="UiTitle"> Date: </h4>{" "}
                <p> October 27, 2019 - March 19, 2020 </p>{" "}
              </MDBCol>{" "}
              <MDBCol lg="3">
                <img
                  className="UiLogo"
                  src={require("../images/services.png")}
                  alt="/"
                />
                <h4 className="UiTitle"> MyRole: </h4>{" "}
                <p> Software Tester, Intern of UI / UX </p>{" "}
              </MDBCol>{" "}
            </MDBRow>{" "}
          </MDBCol>{" "}
        </MDBRow>{" "}
      </MDBAnimation>{" "}
    </MDBContainer>
  );
};

export default UIProjects;
