import React, { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBNavbar,
  MDBNavbarBrand,
  MDBModal,
  MDBModalBody,
} from "mdbreact";
import { Link } from "react-router-dom";

const Photography = () => {
  const [images, setImages] = useState([
    {
      src: require("../images/photography/7.jpg"),
      lg: "3",
      md: "6",
      sm: "12",
      alt: "gallery",
      category: 1,
    },
    {
      src: require("../images/photography/3.jpg"),
      lg: "3",
      md: "6",
      sm: "12",
      alt: "gallery",
    },
    {
      src: require("../images/photography/8.jpg"),
      lg: "3",
      md: "6",
      sm: "12",
      alt: "gallery",
    },
    {
      src: require("../images/photography/6.jpg"),
      lg: "3",
      md: "6",
      sm: "12",
      alt: "gallery",
    },
    {
      src: require("../images/photography/9.jpg"),
      lg: "3",
      md: "6",
      sm: "12",
      alt: "gallery",
    },
    {
      src: require("../images/photography/17.jpg"),
      lg: "6",
      md: "6",
      sm: "12",
      alt: "gallery",
    },
    {
      src: require("../images/photography/11.jpg"),
      lg: "3",
      md: "6",
      sm: "12",
      alt: "gallery",
    },
  ]);
  const [isModalOpen, toggleModal] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);
  return (
    <div id="photography">
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
          Photography{" "}
        </h3>{" "}
      </MDBNavbar>
      <MDBRow
        style={{ marginRight: "0px", marginLeft: "0px", paddingTop: "120px" }}
      >
        {images.map((img) => (
          <MDBCol lg={img.lg} md={img.md} sm={img.sm}>
            <div
              className="photoContainer"
              onClick={() => {
                setActivePhoto(img);
                toggleModal(true);
              }}
            >
              <img className="photo" src={img.src} alt={img.alt} />{" "}
            </div>{" "}
          </MDBCol>
        ))}{" "}
      </MDBRow>{" "}
      <MDBModal
        isOpen={isModalOpen}
        size="lg"
        toggle={() => {
          toggleModal(!isModalOpen);
        }}
      >
        <MDBModalBody>
          <div className="modalPhotoContainer">
            <img
              alt="/"
              className="modalPhoto"
              src={
                activePhoto != null
                  ? activePhoto.src
                  : require("../images/photography/1.jpg")
              }
            />{" "}
          </div>{" "}
        </MDBModalBody>{" "}
      </MDBModal>{" "}
    </div>
  );
};

export default Photography;
