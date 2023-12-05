import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer py-2">
      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <Link to="/"> E-commarce WebApp</Link>
      </div>
      <div className="container">
        <div className="footer-links p-3 w-50 m-auto d-flex justify-content-around align-items-center">
          <NavLink to="/Contact-us" className="footer-links">Contact Us</NavLink>
          <NavLink to="/About-us" className="footer-links">About Us</NavLink>
          <NavLink to="/Privacy" className="footer-links">Privacy Policy</NavLink>
          <NavLink to="/Terms-and-conditions" className="footer-links">Term & Condition</NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
