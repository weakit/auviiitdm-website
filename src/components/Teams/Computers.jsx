import React, { useState } from "react";
import ProfileModal from "./ProfileModal";

import Vyshnav from "../../assets/auv_photos_team/latest/computers/Vyshnav.jpeg";
import MohamedAkliK from "../../assets/auv_photos_team/latest/computers/MohamedAkilK.jpg";
import VenkataMadhav from "../../assets/auv_photos_team/latest/computers/VenkataMadhav.jpg";

const Computermodal = () => {
  const [teamMembers] = useState([
    {
      name: "Vyshnav K",
      imageSource: Vyshnav,
      linkedInLink: "https://www.linkedin.com/in/vyshnavk/",
    },
    {
      name: "Mohamed Akil K",
      imageSource: MohamedAkliK,
      linkedInLink: "https://www.linkedin.com/in/mohamed-akil/",
    },
    {
      name: "Venkata Madhav",
      imageSource: VenkataMadhav,
      linkedInLink: "https://www.linkedin.com/in/madhav2133/",
    },
  ]);

  return (
    <>
      <div className="modal fade" id="computers">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Computers</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="img-flex">
                {teamMembers.map((member) => {
                  return (
                    <ProfileModal
                      key={member.name}
                      name={member.name}
                      imageSource={member.imageSource}
                      linkedInLink={member.linkedInLink}
                    />
                  );
                })}
              </div>
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
    </>
  );
};

export default Computermodal;
