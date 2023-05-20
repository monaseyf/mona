import React, { useState } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBAnimation } from "mdbreact";

const AboutMe = () => {
  const [activeSegment, setActiveSegment] = useState("1");

  const toggleSegment = (segment) => {
    if (segment !== activeSegment) {
      setActiveSegment(segment);
    }
  };
  return (
    <section
      id="aboutMeSection"
      className="section"
      style={{
        backgroundImage: `url(${require("../images/aboutMe/" +
          activeSegment +
          ".jpg")})`,
      }}
    >
      <div className="aboutMeOverlay" />
        <h1
          className="sectionTitle"
          style={{ position: "absolute", width: "100%" }}
        >
          About Me{" "}
        </h1>{" "}
      <div className="marginTop" />
      <MDBContainer>
        <MDBRow>
          <MDBCol lg="4" md="4" sm="12">
            <div className="marginTop" />{" "}
            {activeSegment === "1" ? (
              <h4
                className="segmentTitle activeSegmentTitle"
                onMouseOver={() => {
                  toggleSegment("1");
                }}
              >
                B.Sc.In Architecture{" "}
              </h4>
            ) : (
              <h4
                className="segmentTitle"
                onMouseOver={() => {
                  toggleSegment("1");
                }}
              >
                B.Sc.In Architecture{" "}
              </h4>
            )}{" "}
            {activeSegment === "2" ? (
              <h4
                className="segmentTitle activeSegmentTitle"
                onMouseOver={() => {
                  toggleSegment("2");
                }}
              >
                UI / UX Experiences{" "}
              </h4>
            ) : (
              <h4
                className="segmentTitle"
                onMouseOver={() => {
                  toggleSegment("2");
                }}
              >
                UI / UX Experiences{" "}
              </h4>
            )}{" "}
            {activeSegment === "3" ? (
              <h4
                className="segmentTitle activeSegmentTitle"
                onMouseOver={() => {
                  toggleSegment("3");
                }}
              >
                Other Experiences{" "}
              </h4>
            ) : (
              <h4
                className="segmentTitle"
                onMouseOver={() => {
                  toggleSegment("3");
                }}
              >
                Other Experiences{" "}
              </h4>
            )}{" "}
            {/* {activeSegment == "4" ? (
                <h4
                className="segmentTitle activeSegmentTitle"
                onMouseOver={() => {
                toggleSegment("4");
                }}
                >
                Title 4
                </h4>
                ) : (
                // <h4
                //   className="segmentTitle"
                //   onMouseOver={() => {
                //     toggleSegment("4");
                //   }}
                // >
                //   Title 4
                // </h4>
                )} */}{" "}
          </MDBCol>{" "}
          <MDBCol lg="8" md="8" sm="12">
            {" "}
            {activeSegment == 1 ? (
              <MDBAnimation
                reveal
                type="fadeInDown"
                duration="1000ms"
                className="descriptionContainer"
              >
                <div className="marginTop" />
                <p className="descriptionP">
                  Managed to graduate from University of Science and Culture
                  with <b> GPA of 17.94 / 20 </b> in 4 years. <br />
                  Within the top 10 % of the architecture department. <br />
                  Awarded from the head of Architecture Department as being a
                  member of Architecture Students Union Committee{" "}
                </p>{" "}
                <p className="eventDate"> Sep 2015 - Jun 2019 </p>{" "}
              </MDBAnimation>
            ) : activeSegment == 2 ? (
              <MDBAnimation
                reveal
                type="fadeInDown"
                duration="1000ms"
                className="descriptionContainer"
              >
                <div className="marginTop" />
                <p className="descriptionP">
                  Working in Rayan Pajouh Salamat company as a Ui / Ux designer
                  and software tester.I have learned many things here especially
                  how to communicate with client and be patient in my way.{" "}
                </p>{" "}
                <p className="eventDate"> Dec 2019 </p>{" "}
              </MDBAnimation>
            ) : activeSegment == "3" ? (
              <MDBAnimation
                reveal
                type="fadeInDown"
                duration="1000ms"
                className="descriptionContainer"
              >
                <div className="marginTop" />
                <p className="descriptionP">
                  Was coach of student organizations for their summer camps in
                  Ramsar, Iran.(From secondary schools in district five,
                  Tehran.) <br />
                  Taught English in two institutes in Tehran.{" "}
                </p>{" "}
                <p className="eventDate"> Sep 2015 - Jun 2019 </p>{" "}
              </MDBAnimation>
            ) : (
              <MDBAnimation
                reveal
                type="fadeInUp"
                duration="1000ms"
                className="descriptionContainer"
              >
                <div className="marginTop" />{" "}
                {/* <p className="descriptionP">
                                                                                                                                                                                                                                                                  Dui accumsan sit amet nulla facilisi morbi. Urna neque viverra
                    justo nec ultrices dui sapien. Vitae sapien pellentesque
                    habitant morbi tristique. Tincidunt lobortis feugiat vivamus
                    at augue eget arcu dictum. Vehicula ipsum a arcu cursus vitae
                    congue mauris rhoncus. Nulla pharetra diam sit amet nisl
                    suscipit adipiscing bibendum. Interdum consectetur libero id
                    faucibus nisl. A diam maecenas sed enim ut sem. Eget magna
                    fermentum iaculis eu. Eros in cursus turpis massa tincidunt.
                    Et tortor at risus viverra. Vitae auctor eu augue ut lectus
                    arcu. Magnis dis parturient montes nascetur. Et malesuada
                    fames ac turpis egestas maecenas pharetra convallis. Amet
                    consectetur adipiscing elit ut aliquam purus sit. Amet dictum
                    sit amet justo donec enim. Vitae sapien pellentesque habitant
                    morbi tristique. Elementum tempus egestas sed sed risus
                    pretium quam vulputate dignissim. Cras tincidunt lobortis
                    feugiat vivamus at. Auctor neque vitae tempus quam
                    pellentesque nec nam aliquam.
                </p>
                <p className="eventDate">September 19,2018</p> */}{" "}
              </MDBAnimation>
            )}{" "}
          </MDBCol>{" "}
        </MDBRow>{" "}
      </MDBContainer>{" "}
    </section>
  );
};

export default AboutMe;
