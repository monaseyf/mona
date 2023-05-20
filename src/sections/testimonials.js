import React from 'react'
import { MDBContainer, MDBCard, MDBRow, MDBCol, MDBIcon } from 'mdbreact'

const Testimonials = () => {
    return (
        <section id="testimonials" className="section">
                <h1 className="sectionTitle">Testimonials</h1>
            <MDBContainer>
                <MDBRow>
                    <MDBCol lg="4" md="4" sm="12">
                        <MDBCard className="testimonials_card">
                            <div className="avatarContainer">
                                <img className="avatar" src={require("../images/taheri.png")} />
                            </div>
                            <div className="testimonial_card_content">
                                <p className="Testimonials_fullName">
                                    Mahdi Taheri
                                </p>
                                <p className="Testimonials_position">
                                    CEO of Rayan Pajouh Salamat
                                </p>
                                <div className="testimonials_devider" />
                                <MDBIcon icon="quote-left" className="testimonials_icon" />
                                <p className="testimonials_quote">
                                   She is really smart and industrious person.I can count on her,
                                   when she is given a responsibility.She can comuinicate very well
                                   with the customers which is really adorable.
                        
                                </p>
                                <MDBIcon icon="quote-right" className="testimonials_icon" />
                            </div>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="4" md="4" sm="12">
                        <MDBCard className="testimonials_card">
                            <div className="avatarContainer">
                                <img className="avatar" src={require("../images/ostadMashhadi.png")} />
                            </div>
                            <div className="testimonial_card_content">
                                <p className="Testimonials_fullName">
                                    Ali Mashhadi
                                </p>
                                <p className="Testimonials_position">
                                    Head of the Architecture Department
                                </p>
                                <div className="testimonials_devider" />
                                <MDBIcon icon="quote-left" className="testimonials_icon" />
                                <p className="testimonials_quote">
                                She is a person with positive attitude towards life and enjoys
                                 her work. Her extreme interest, persistent attitude and intellectual
                                  curiosity drive her to get deeply involved in her work and excel in it.
                                </p>
                                <MDBIcon icon="quote-right" className="testimonials_icon" />
                            </div>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="4" md="4" sm="12">
                        <MDBCard className="testimonials_card">
                            <div className="avatarContainer">
                                <img className="avatar" src={require("../images/dana.png")} />
                            </div>
                            <div className="testimonial_card_content">
                                <p className="Testimonials_fullName">
                                    Dana Azartash
                                </p>
                                <p className="Testimonials_position">
                                    CTO of RayanPajouh
                                </p>
                                <div className="testimonials_devider" />
                                <MDBIcon icon="quote-left" className="testimonials_icon" />
                                <p className="testimonials_quote">
                                    She always tries to boost her skills.When she counters with difficulties,she tries 
                                    to solve them creatively and patiently.
                                </p> 
                                <MDBIcon icon="quote-right" className="testimonials_icon" />
                            </div>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    )
}

export default Testimonials;