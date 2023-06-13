import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBProgress, MDBAnimation } from "mdbreact";

const Skills = () => {

    const [activeTab, setActiveTab] = useState("1")

    const toggleActiveTab = (tab) => {
        if (tab != activeTab) {
            setActiveTab(tab)
        }
    }

  return (
    <section className="section" id="skillsSection">
        <h1 className="sectionTitle">Skills</h1>
      <MDBContainer>
          <MDBRow>
              <MDBCol lg="4" md="4" sm="12" >
                  {
                      activeTab == "1" ? (
                        <div className="tabContainer activeTabContainer" onClick={()=>{toggleActiveTab("1")}}>
                            <p className="tabTitle activeTabTitle">Professional Skills</p>
                        </div>
                      ) : (
                        <div className="tabContainer" onClick={()=>{toggleActiveTab("1")}}>
                            <p className="tabTitle">Professional Skills</p>
                        </div>
                      )
                  }
              </MDBCol>
              <MDBCol lg="4" md="4" sm="12">
                {
                      activeTab == "2" ? (
                        <div className="tabContainer activeTabContainer" onClick={()=>{toggleActiveTab("2")}}>
                            <p className="tabTitle activeTabTitle">Architectural Software</p>
                        </div>
                      ) : (
                        <div className="tabContainer" onClick={()=>{toggleActiveTab("2")}}>
                            <p className="tabTitle">Architectural Software</p>
                        </div>
                      )
                  }
              </MDBCol>
              <MDBCol lg="4" md="4" sm="12">
                {
                      activeTab == "3" ? (
                        <div className="tabContainer activeTabContainer" onClick={()=>{toggleActiveTab("3")}}>
                            <p className="tabTitle activeTabTitle">Language Skills</p>
                        </div>
                      ) : (
                        <div className="tabContainer" onClick={()=>{toggleActiveTab("3")}}>
                            <p className="tabTitle">Language Skills</p>
                        </div>
                      )
                  }
              </MDBCol>
          </MDBRow>
          <MDBRow>
              <MDBCol lg="2" md="2" sm="0"></MDBCol>
              <MDBCol lg="8" md="8" sm="12">
                  <div className="marginTop" />
                  {
                      activeTab == "1" ? (
                          <div>
                               
                                <MDBAnimation reveal type="fadeInLeft" duration="1500ms" delay="0ms">
                                    <p className="skillLabel">Frontend Development</p>
                                    <MDBProgress value={88} heigth="40px" color="progress">
                                        {/* <span className="progressText">8</span> */}
                                    </MDBProgress>
                                </MDBAnimation>
                                <MDBAnimation reveal type="fadeInLeft" duration="1500ms" delay="500ms">
                                    <p className="skillLabel">Degital Marketing</p>
                                    <MDBProgress value={75} heigth="40px" color="progress">
                                        {/* <span className="progressText">7.5</span> */}
                                    </MDBProgress>
                                </MDBAnimation>
                                <MDBAnimation reveal type="fadeInLeft" duration="1500ms" delay="1000ms">
                                    <p className="skillLabel">Adobe Creative Suite(PHOTOSHOP-ILLUSTRATOR-INDESIGN)</p>
                                    <MDBProgress value={50} heigth="40px" color="progress">
                                        {/* <span className="progressText">7.5</span> */}
                                    </MDBProgress>
                                </MDBAnimation>
                                <MDBAnimation reveal type="fadeInLeft" duration="1500ms" delay="1500ms">
                                    <p className="skillLabel">User Interface Design</p>
                                    <MDBProgress value={80} heigth="40px" color="progress">
                                        {/* <span className="progressText">6.5</span> */}
                                    </MDBProgress>
                                </MDBAnimation>
                                <MDBAnimation reveal type="fadeInLeft" duration="1500ms" delay="2000ms">
                                    <p className="skillLabel">Human computer interaction</p>
                                    <MDBProgress value={80} heigth="40px" color="progress">
                                        {/* <span className="progressText">6.5</span> */}
                                    </MDBProgress>
                                </MDBAnimation>
                               
                          </div>
                      ) : activeTab == "2" ? (
                        <div>
                            <MDBAnimation reveal type="fadeInDown" duration="1500ms" delay="0ms">
                                <p className="skillLabel">Revit</p>
                                <MDBProgress value={83} heigth="40px" color="progress">
                                    {/* <span className="progressText">83</span> */}
                                </MDBProgress>
                            </MDBAnimation>
                            <MDBAnimation reveal type="fadeInDown" duration="1500ms" delay="500ms">
                                <p className="skillLabel">AutoCad (2d ,3d)</p>
                                <MDBProgress value={88} heigth="40px" color="progress">
                                    {/* <span className="progressText">88</span> */}
                                </MDBProgress>
                            </MDBAnimation>
                            <MDBAnimation reveal type="fadeInDown" duration="1500ms" delay="1000ms">
                                <p className="skillLabel">3D Max</p>
                                <MDBProgress value={50} heigth="40px" color="progress">
                                    {/* <span className="progressText">72</span> */}
                                </MDBProgress>
                            </MDBAnimation>
                             <MDBAnimation reveal type="fadeInDown" duration="1500ms" delay="1500ms">
                                    <p className="skillLabel">Lumion</p>
                                    <MDBProgress value={77} heigth="40px" color="progress">
                                        {/* <span className="progressText">7</span> */}
                                    </MDBProgress>
                                </MDBAnimation>
                        </div>
                      ) : (
                        <div>
                            <MDBAnimation reveal type="fadeInRight" duration="1500ms" delay="0ms">
                                <p className="skillLabel">English Profeciency</p>
                                <MDBProgress value={83} heigth="40px" color="progress">
                                    <span className="progressText">IELTS 7</span>
                                </MDBProgress>
                            </MDBAnimation>
                           
                            <MDBAnimation reveal type="fadeInRight" duration="1500ms" delay="500ms">
                                <p className="skillLabel">Persian</p>
                                <MDBProgress value={100} heigth="40px" color="progress">
                                    {/* <span className="progressText">72</span> */}
                                </MDBProgress>
                            </MDBAnimation>
                            <MDBAnimation reveal type="fadeInRight" duration="1500ms" delay="1000ms">
                                <p className="skillLabel">Arabic</p>
                                <MDBProgress value={50} heigth="40px" color="progress">
                                    {/* <span className="progressText">72</span> */}
                                </MDBProgress>
                            </MDBAnimation>
                            <MDBAnimation reveal type="fadeInRight" duration="1500ms" delay="1500ms">
                                <p className="skillLabel">Germany</p>
                                <MDBProgress value={30} heigth="40px" color="progress">
                                    {/* <span className="progressText">88</span> */}
                                </MDBProgress>
                            </MDBAnimation>
                        </div>
                      )
                  }
              </MDBCol>
              <MDBCol lg="2" md="2" sm="0"></MDBCol>
          </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default Skills;
