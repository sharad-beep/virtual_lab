import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">  {/*  applied css */}
      <h1 className="text-center">All Right Reserved &copy; homies</h1>
      <p className="text-center mt-1">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|    {/* applies css as a=>  .footer a {}   .footer a:hover{} */}
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
