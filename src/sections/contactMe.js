import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBAnimation,
  MDBInput,
  MDBBtn,
} from "mdbreact";
import Axios from "axios";

const ContactMe = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = () => {
    if(name && email && message) {
      // code goes here ...
      Axios.post("http://amirrezahaghverdi.com/contact.php", {
        name, 
        email,
        phone : "subject for mona : " + subject,
        company : "not indicated for mona",
        message : "message for mona, please forward the following message to mona seyf's email" + message
      })
      .then(data => {
        if(data.data === 1 && data.status === 200){
          alert("I received your message successfully, Thank You :)");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          // this.setState({isLoading : false})
      }
      })
      .catch(error => {
        console.log(error)
      })
    } else {
      alert("please fill out mandatory fields indicated with *")
    }
  }

  return (
    <section id="contactMe" className="section">
      <MDBContainer>
            <h1 className="sectionTitle">Contact Me</h1>
        <MDBRow>
          <MDBCol lg="5" md="5" sm="12">
            <MDBAnimation reveal type="fadeInUp" duration="1200ms" delay="500ms">
              <h2 className="location-h2">
                <MDBIcon icon="map-marker" />
                <span className="distinct-color"> Tehran, </span>Iran
              </h2>
            </MDBAnimation>
            <MDBAnimation reveal type="fadeInUp" duration="1200ms" delay="1500ms">
              <h4 className="email-h4">
                <a className="aTag" href="mailto:monaseyf25@gmail.com">
                  <MDBIcon icon="at" />
                  <span>
                    {" "}
                    Monaseyf25<span className="distinct-color">@</span>gmail.com
                  </span>
                </a>
              </h4>
            </MDBAnimation>
            <MDBAnimation reveal type="fadeInUp" duration="1200ms" delay="2500ms">
              <h4 className="phone-h4">
                <a className="aTag" href="tel:+1226-582-9182">
                  <MDBIcon icon="phone" />
                  <span>
                    {" "}
                    <span className="distinct-color">+1</span> 226-582-9182
                  </span>
                </a>
              </h4>
            </MDBAnimation>
          </MDBCol>

          {/* <MDBCol lg="7" md="7" sm="12" className="contactForm">
            <MDBAnimation reveal type="fadeInDown" duration="1800ms" delay="3500ms">
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="form-contact-name"
                      label="Name *"
                      autocomplete="off"
                      onChange={(name)=>{setName(name.target.value)}}
                    />
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="email"
                      id="form-contact-email *"
                      label="Email *"
                      autocomplete="off"
                      onChange={(email)=>{setEmail(email.target.value)}}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12" lg="12" sm="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="form-contact-email *"
                      label="Subject (Optional)"
                      autocomplete="off"
                      onChange={(subject)=>{setSubject(subject.target.value)}}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="textarea"
                      id="form-contact-message"
                      label="Message *"
                      rows="5"
                      onChange={(message)=>{setMessage(message.target.value)}}
                    />
                    <MDBBtn
                      block
                      className="sendBtn"
                      type="submit"
                      color="send"
                      onClick={submitForm}
                    >
                      <MDBIcon icon="paper-plane" />
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBAnimation>
          </MDBCol> */}
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default ContactMe;
