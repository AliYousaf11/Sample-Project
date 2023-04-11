import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const routes = [
  {
    id: 1,
    name: "Home",
    to: "/",
  },
  {
    id: 2,
    name: "About",
    to: "/about",
  },
  {
    id: 3,
    name: "Products",
    to: "/products",
  },
  {
    id: 4,
    name: "Add-Product",
    to: "/addproducts",
  },
  {
    id: 5,
    name: "Users",
    to: "/users",
  },
  {
    id: 6,
    name: "Login",
    to: "/login",
  },
  {
    id: 7,
    name: "Register",
    to: "/register",
  },
  {
    id: 8,
    name: "Contact",
    to: "/contact",
  },
  {
    id: 9,
    name: "Login",
    to: "/login",
  },
  {
    id: 11,
    name: "Purchased",
    to: "/purchase",
  },
  {
    id: 12,
    name: "Profile",
    to: "/profile",
  },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="Navbar">
      {/* <div className="Logo">
        <img
          src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg"
          alt=""
        />
        <span className="fa fa-bars" onClick={handleClick}></span>
      </div> */}

      <div className={`NavLinks ${open ? "NavLinks" : "show"}`}>
        {routes.map(({ to, id, name }) => {
          return (
            <Link key={id} to={to} className="Links">
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
