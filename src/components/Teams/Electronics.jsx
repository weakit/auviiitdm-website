import React from "react";
import ProfileModal from "./ProfileModal";

// images
import Rahul from "../../assets/auv_photos_team/latest/electronics/Rahul.jpg";
import MohamedIsmail from "../../assets/auv_photos_team/latest/electronics/MohamedIsmail.jpg";
import Manuraj from "../../assets/auv_photos_team/latest/electronics/Manuraj.jpg";

const Electronicsmodal = () => {
  const teamMembers = [
    { name: "Rahulkannan S", imageSource: Rahul, linkedInLink: "#" },
    { name: "Manuraj Vanamala", imageSource: Manuraj, linkedInLink: "#" },
    { name: "Ismail Mohamed", imageSource: MohamedIsmail, linkedInLink: "#" },
  ];
  return (
    <>
      <div className="modal fade" id="electronics">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Electronics</h4>
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

export default Electronicsmodal;
