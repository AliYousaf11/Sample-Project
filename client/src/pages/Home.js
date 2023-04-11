import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="grid-container">
      <div className="hero-image">
        <p className="logo"></p>
      </div>
      <div>
        <div className="hero-text">
          <h4>Hi There</h4>
          <h3>I am Muhammad Ali Yousaf</h3>
          <p>
            Muhammad Ali Yousaf is a skilled web developer with a passion for
            creating innovative digital solutions. With extensive experience in
            various programming languages, including MERN Stack,
          </p>
        </div>
        <div className="hero-btn">
          <button>
            <Link to="/register" className="link">
              SignUp
            </Link>
          </button>
          <button>
            <Link to="/contact" className="link">
              ContactUs
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

// //  Muhammad Ali
// Yousaf has the technical expertise needed to design and develop
// visually stunning and fully functional websites that meet the unique
// needs of his clients. His commitment to staying up-to-date with the
// latest trends and technologies in web development ensures that his
// projects are always cutting-edge and optimized for success. With his
// strong communication skills and ability to work effectively both
// independently and as part of a team, Muhammad Ali Yousaf is an
// invaluable asset to any organization looking to enhance their online
// presence.
