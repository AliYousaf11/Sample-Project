import React, { useState } from "react";
import "../styles/User.css";
//....
export const Profile = () => {
  const [image] = useState(
    "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
  );

  ///......
  return (
    <div className="user">
      <h4>Check Your Profile</h4>
      <div
        className="wrapper"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="userDetails">
        <div className="details">
          <p>Name</p>
          <span>Muhammad Ali Yousaf</span>
        </div>
        <div className="details">
          <p>Email</p>
          <span>aliyousaf@gmail.com</span>
        </div>
        <div className="details">
          <p>Password</p>
          <span>55312344</span>
        </div>
        <div className="details">
          <p>Re-Password</p>
          <span>55312344</span>
        </div>
        <div className="details">
          <p>Gender</p>
          <span>Male</span>
        </div>
        <div className="details">
          <p>PhoneNo</p>
          <span>000377583882</span>
        </div>
      </div>
    </div>
  );
};
