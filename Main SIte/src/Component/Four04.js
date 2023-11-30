import React from "react";
import "../Css/404.css";
import { Link } from "react-router-dom";
import Navebar from "./Navebar";
import Footer from "./Footer";
const Four04 = () => {
  return (
    <>
      <Navebar />
      <div className="error-page">
        <h1>404</h1>
        <p>Oops! The page you're looking for could not be found.</p>
        <Link to="/" className="btn">
          Go Home
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Four04;
