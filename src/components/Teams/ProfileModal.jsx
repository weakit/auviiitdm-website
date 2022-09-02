import React from "react";

/*
a reusable dummy component which displays a single person's details
  props:
        self explanatory

*/

const ProfileModal = ({ imageSource, linkedInLink, name }) => {
  return (
    <div className="profile-modal">
      <img src={imageSource} alt={name} className="profile" />
      <a href={`${linkedInLink}`} target="blank">
        <i className="fa">&#xf0e1;</i>
      </a>
      <p>{name}</p>
    </div>
  );
};

export default ProfileModal;
