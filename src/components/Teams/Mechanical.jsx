import React from "react";
import ProfileModal from "./ProfileModal";

import MuthuShravan from "../../assets/auv_photos_team/latest/mechanical/MuthuShravan.jpg";
import SukeshJR from "../../assets/auv_photos_team/latest/mechanical/SukeshJR.jpg";
import VishnuVardhanIyengar from "../../assets/auv_photos_team/latest/mechanical/VishnuVardhanIyengar.jpg";

const Mechanicalmodal = () => {
  const teamMembers = [
    {
      name: "Sukesh JR",
      imageSource: SukeshJR,
      linkedInLink: "https://www.linkedin.com/in/sukeshjr/",
    },
    {
      name: "Vishnuvardhan Iyengar",
      imageSource: VishnuVardhanIyengar,
      linkedInLink:
        "https://www.linkedin.com/in/vishnuvardhan-iyengar-4a5152221/",
    },
    {
      name: "S Muthu Shravan",
      imageSource: MuthuShravan,
      linkedInLink: "https://www.linkedin.com/in/muthu-shravan-s-440a72135/",
    },
  ];
  return (
    <>
      <div className="modal fade" id="mechanical">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Mechanical</h4>
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

export default Mechanicalmodal;
