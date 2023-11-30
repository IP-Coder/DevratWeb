import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LogoutPanel = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("isLoggedin");
    navigate("/login");
  };
  return (
    <>
      <div className="card text-center">
        <div className="card-header">Logout</div>
        <div className="card-body p-5">
          <p className="card-text">Are you sure you want to logout?</p>
          <a href="#" onClick={handleLogout} className="m-2 btn btn-primary">
            Yes Continue
          </a>
          <a href="#" className="m-2 btn btn-danger">
            No Stay Here
          </a>
        </div>
        <div className="card-footer text-body-secondary">
          V 11 PRIME MKT. PVT. LTD.{" "}
        </div>
      </div>
    </>
  );
};

export default LogoutPanel;
