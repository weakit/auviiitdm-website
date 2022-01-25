import React from "react";
import SAUVC from "../assets/logo/sauvclogo.png";
import ScrollAnimation from "react-animate-on-scroll";
// import MechanicalModal from "./Teams/Mechanical";

const Achievements = () => {
  return (
    <React.Fragment>
      <div className="achievement" id="achievement">
        <div className="container">
          <h2 className="title" style={{ backgroundColor: "#161a22" }}>
            Achievements
          </h2>
          <hr></hr>
          <ScrollAnimation animateIn="fadeIn">
            <div className="row">
              <div className="col-sm-8">
                <div className="card">
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={SAUVC} alt="sauvc" width="90px"></img>
                    </div>
                    <div className="col-sm-10">
                      <div className="card-body">
                        <h6 className="sub-heading">
                          17th Place in SAUVC 2019
                        </h6>
                        <p>
                          The SAUVC competition challenges participant teams to
                          build an AUV which can perform given tasks. The tasks
                          involve four widely faced challenges underwater such
                          as AUV navigation, visual identification, acoustic
                          localization and robotic manipulation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 text-center">
                <iframe
                  title="video"
                  src="https://www.youtube.com/embed/c58AMctLp04?playlist=c58AMctLp04&loop=1"
                ></iframe>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <div className="row mt-5">
              <div className="col-sm-8">
                <div className="card">
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={SAUVC} alt="sauvc" width="90px"></img>
                    </div>
                    <div className="col-sm-10">
                      <div className="card-body">
                        <h6 className="sub-heading">Qualified in SAUVC 2020</h6>
                        <p>
                          The SAUVC competition challenges participant teams to
                          build an AUV which can perform given tasks. The tasks
                          involve four widely faced challenges underwater such
                          as AUV navigation, visual identification, acoustic
                          localization and robotic manipulation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 text-center">
                <iframe
                  title="video"
                  src="https://www.youtube.com/embed/Wj7A49-mySk?playlist=NsHS6F2bjII&loop=1"
                ></iframe>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <div className="row">
              <div className="col-sm-8">
                <div className="card">
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={SAUVC} alt="sauvc" width="90px"></img>
                    </div>
                    <div className="col-sm-10">
                      <div className="card-body">
                        <h6 className="sub-heading">
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a data-toggle="modal" data-target="#achieve2022">
                            Global Oceans 2021
                          </a>
                        </h6>
                        <p>
                          Title: Development of AUV for SAUVC During COVID-19
                          Authors: Mayank Navneet Mehta, Subash Mylraj, Vishva
                          Nilesh Bhate Conference: Global OCEANS 2021, San Diego
                          – Porto, Sept 20-23, 2021
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 text-center">
                <iframe
                  title="video"
                  src="https://www.youtube.com/embed/c58AMctLp04?playlist=c58AMctLp04&loop=1"
                ></iframe>
              </div>
            </div>
          </ScrollAnimation>
          <div className="modal fade" id="achieve2022">
            <div
              className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
              style={{ maxWidth: "600px" }}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Research Paper</h4>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  Title: Development of AUV for SAUVC During COVID-19 Authors:
                  Mayank Navneet Mehta, Subash Mylraj, Vishva Nilesh Bhate{" "}
                  <br></br>Abstract: This paper describes the design,
                  implementation, and testing of control and vision algorithms
                  for an AUV in virtual and real environments. Hardware design
                  and the software stack of the vec6 underwater vehicle are
                  described in this paper. The paper also presents a simulation
                  test-bed, the uwv-simulator, which is developed using ROS and
                  Gazebo. A custom arena similar to that used in the Singapore
                  AUV Challenge is constructed in the simulation environment.
                  The software stack is designed to execute higher and abstract
                  algorithms without the trouble of going through the
                  lower-level functions.<br></br> Conference: Global OCEANS
                  2021, San Diego – Porto, Sept 20-23, 2021 <br></br>Link to the
                  work:
                  <a
                    href="https://github.com/auvsocietyiiitdm/uwv-simulator"
                    target="blank"
                  >
                    <i className="fa">&#xf1d2;</i>
                  </a>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Achievements;
