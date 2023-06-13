import { MDBRow, MDBCol, MDBAnimation } from "mdbreact";

const UIProjectComponent = ({
  animationDelay,
  imgSource,
  title,
  description,
  employer,
  team,
  date,
  role,
}) => {
  return (
   
      <MDBAnimation
        reveal
        type="fadeInLeft"
        duration="1500ms"
        delay={animationDelay}
      >
        <MDBRow>
          <MDBCol lg="12">
            <div className="UiPhoto-container">
              <img className="UiPhoto" src={imgSource} alt="/" />
            </div>{" "}
          </MDBCol>
          <MDBCol lg="12" className="UI-projects-widget">
            <div>
              <h2 className="projects-widget-title"> {title} </h2>
              <p className="UI-projects-description">{description}</p>
              {/* <a href="http://iranpedcong.tums.ac.ir/"> Link </a> */}
            </div>
            <MDBRow
              style={{
                paddingTop: "10px",
              }}
            >
              <MDBCol lg="3" md="6">
                <div className="ui-widget-details">
                  <img
                    className="UiLogo"
                    src={require("../images/client.png")}
                    alt="/"
                  />
                  <h4 className="UiTitle"> Employer: </h4>{" "}
                  <p className="ui-widget-text"> {employer}</p>{" "}
                </div>
              </MDBCol>{" "}
              <MDBCol lg="3" md="6">
                <div className="ui-widget-details">
                  <img
                    className="UiLogo"
                    src={require("../images/team.png")}
                    alt="/"
                  />
                  <h4 className="UiTitle"> Team: </h4>{" "}
                  <p className="ui-widget-text"> {team} </p>{" "}
                </div>
              </MDBCol>
              <MDBCol lg="3" md="6">
                <div className="ui-widget-details">
                  <img
                    className="UiLogo"
                    src={require("../images/date.png")}
                    alt="/"
                  />
                  <h4 className="UiTitle"> Date: </h4>{" "}
                  <p className="ui-widget-text"> {date} </p>{" "}
                </div>
              </MDBCol>{" "}
              <MDBCol lg="3" md="6">
                <div className="ui-widget-details">
                  <img
                    className="UiLogo"
                    src={require("../images/services.png")}
                    alt="/"
                  />
                  <h4 className="UiTitle"> MyRole: </h4>{" "}
                  <p className="ui-widget-text"> {role} </p>{" "}
                </div>
              </MDBCol>{" "}
            </MDBRow>{" "}
          </MDBCol>{" "}
        </MDBRow>
      </MDBAnimation>
   
  );
};

export default UIProjectComponent;
