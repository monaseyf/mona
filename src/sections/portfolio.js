import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import { Link } from "react-router-dom";
// import ScrollToTop from "../components/ScrollToTop";

const Portfolio = () => {
  return (
    <section id="portfolioSection" className="section">
        <h1 className="sectionTitle"> Portfolio </h1>{" "}
      <MDBRow style={{ marginRight: "0px", marginLeft: "0px" }}>
      <MDBCol lg="3" md="6" sm="12" style={{ padding: "0px" }}>
          {/* <ScrollToTop /> */}
          <Link to="/ui">
            <div
              className="categoryContainer"
              style={{
                backgroundImage: `url(${require("../images/porfolio/2.jpg")})`,
              }}
            >
              <h3 className="categoryTitle"> Professional Projects </h3>{" "}
            </div>{" "}
          </Link>{" "}
        </MDBCol>{" "}
        <MDBCol lg="3" md="6" sm="12" style={{ padding: "0px" }}>
          {/* <ScrollToTop /> */}
          <Link to="/other">
            <div
              className="categoryContainer"
              style={{
                backgroundImage: `url(${require("../images/porfolio/7.jpg")})`,
              }}
            >
              <h3 className="categoryTitle"> Art & Design </h3>{" "}
            </div>{" "}
          </Link>{" "}
        </MDBCol>{" "}
        <MDBCol lg="3" md="6" sm="12" style={{ padding: "0px" }}>
          {/* <ScrollToTop /> */}
          <Link to="arch">
            <div
              className="categoryContainer"
              style={{
                backgroundImage: `url(${require("../images/porfolio/5.jpg")})`,
                backgroundPosition: `Right Center`,
              }}
            >
              <h3 className="categoryTitle">  Architecture Portfolio </h3>{" "}
            </div>{" "}
          </Link>{" "}
        </MDBCol>{" "}
        <MDBCol lg="3" md="6" sm="12" style={{ padding: "0px" }}>
          {/* <ScrollToTop /> */}
          <Link to="/photo">
            <div
              className="categoryContainer"
              style={{
                backgroundImage: `url(${require("../images/photography/5.jpg")})`,
              }}
            >
              <h3 className="categoryTitle"> Photo Gallery </h3>{" "}
            </div>{" "}
          </Link>{" "}
        </MDBCol>{" "}
       
      </MDBRow>{" "}
    </section>
  );
};

export default Portfolio;
