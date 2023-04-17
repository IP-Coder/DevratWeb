import React, { useEffect } from "react";
import { useState } from "react";
import DashboardPanel from "./Accounts/DashboardPanel";
import AllDownlinePanel from "./Accounts/AllDownlinePanel";
import MyDownlinePanel from "./Accounts/MyDownlinePanel";
import GenealogyPanel from "./Accounts/GenealogyPanel";
import MyIdCardPanel from "./Accounts/MyIdCardPanel";
import MyProfilePanel from "./Accounts/MyProfilePanel";
import MyOrdersPanel from "./Accounts/MyOrdersPanel";
import MyEarningPanel from "./Accounts/MyEarningPanel";
import MyPointsPanel from "./Accounts/MyPointsPanel";
import ShopProductsPanel from "./Accounts/ShopProductsPanel";
import FundsPanel from "./Accounts/FundsPanel";
import MyFundRequestsPanel from "./Accounts/MyFundRequestsPanel";
import SupportPanel from "./Accounts/SupportPanel";
import LogoutPanel from "./Accounts/LogoutPanel";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("email")) {
      navigate("/login");
    }
  }, []);
  const [selectedPanel, setSelectedPanel] = useState("home");

  const handlePanelClick = (panel) => {
    setSelectedPanel(panel);
  };

  let panelContent;

  switch (selectedPanel) {
    case "dashboard":
      panelContent = <DashboardPanel />;
      break;
    case "allDownline":
      panelContent = <AllDownlinePanel />;
      break;
    case "myDownline":
      panelContent = <MyDownlinePanel />;
      break;
    case "genealogy":
      panelContent = <GenealogyPanel />;
      break;
    case "myIdCard":
      panelContent = <MyIdCardPanel />;
      break;
    case "myProfile":
      panelContent = <MyProfilePanel />;
      break;
    case "myOrders":
      panelContent = <MyOrdersPanel />;
      break;
    case "myEarning":
      panelContent = <MyEarningPanel />;
      break;
    case "myPoints":
      panelContent = <MyPointsPanel />;
      break;
    case "shopProducts":
      panelContent = <ShopProductsPanel />;
      break;
    case "funds":
      panelContent = <FundsPanel />;
      break;
    case "myFundRequests":
      panelContent = <MyFundRequestsPanel />;
      break;
    case "support":
      panelContent = <SupportPanel />;
      break;
    case "logout":
      panelContent = <LogoutPanel />;
      break;
    default:
      panelContent = <DashboardPanel />;
      break;
  }

  return (
    <>
      <div className="row" id="homerow">
        <div className="col-2" id="homecol1">
          <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="nav flex-column">
                  <li className="border border-5 bg-info border-start-0 ">
                    <a href="#" className="nav-link fs-5  link-body-emphasis">
                      VM 11 PRIME
                    </a>
                  </li>
                  <div className="" id="nav1">
                    <div className="" id="navin1">
                      <li className="border border-5 border-start-0 ">
                        <a
                          href="#"
                          className={`nav-link link-body-emphasis ${
                            selectedPanel === "dashboard" ? "active" : ""
                          }`}
                          onClick={() => handlePanelClick("dashboard")}
                        >
                          Dashboard
                        </a>
                      </li>
                      <li className="border border-5 border-start-0 ">
                        <a
                          href="#"
                          className={`nav-link link-body-emphasis ${
                            selectedPanel === "allDownline" ? "active" : ""
                          }`}
                          onClick={() => handlePanelClick("allDownline")}
                        >
                          All Downline
                        </a>
                      </li>
                      <li className="border border-5 border-start-0 ">
                        <a
                          href="#"
                          className={`nav-link link-body-emphasis ${
                            selectedPanel === "myDownline" ? "active" : ""
                          }`}
                          onClick={() => handlePanelClick("myDownline")}
                        >
                          My Downline
                        </a>
                      </li>
                      <li className="border border-5 border-start-0 ">
                        <a
                          href="#"
                          className={`nav-link link-body-emphasis ${
                            selectedPanel === "genealogy" ? "active" : ""
                          }`}
                          onClick={() => handlePanelClick("genealogy")}
                        >
                          Genealogy
                        </a>
                      </li>
                      <li className="border border-5 border-start-0 ">
                        <a
                          href="#"
                          className={`nav-link link-body-emphasis ${
                            selectedPanel === "myIdCard" ? "active" : ""
                          }`}
                          onClick={() => handlePanelClick("myIdCard")}
                        >
                          My ID Card
                        </a>
                      </li>
                      <li className="border border-5 border-start-0 ">
                        <a
                          href="#"
                          className={`nav-link link-body-emphasis ${
                            selectedPanel === "myProfile" ? "active" : ""
                          }`}
                          onClick={() => handlePanelClick("myProfile")}
                        >
                          My Profile
                        </a>
                      </li>
                      <li className="border border-5 border-start-0 ">
                        <a
                          href="#"
                          className={`nav-link link-body-emphasis ${
                            selectedPanel === "myOrders" ? "active" : ""
                          }`}
                          onClick={() => handlePanelClick("myOrders")}
                        >
                          My Orders
                        </a>
                      </li>
                    </div>
                    <div className="" id="navin2">
                      <li className="border border-5 border-start-0 ">
                        <a
                          href="#"
                          className={`nav-link link-body-emphasis ${
                            selectedPanel === "myEarning" ? "active" : ""
                          }`}
                          onClick={() => handlePanelClick("myEarning")}
                        >
                          My Earning
                        </a>
                      </li>
                      <li className="border border-5 border-start-0 ">
                        <a
                          href="#"
                          className={`nav-link link-body-emphasis ${
                            selectedPanel === "myPoints" ? "active" : ""
                          }`}
                          onClick={() => handlePanelClick("myPoints")}
                        >
                          My Points
                        </a>
                      </li>
                      <li className="border border-5 border-start-0 ">
                        <a
                          href="#"
                          className={`nav-link link-body-emphasis ${
                            selectedPanel === "shopProducts" ? "active" : ""
                          }`}
                          onClick={() => handlePanelClick("shopProducts")}
                        >
                          Shop Products
                        </a>
                      </li>
                      <li className="border border-5 border-start-0 ">
                        <a
                          href="#"
                          className={`nav-link link-body-emphasis ${
                            selectedPanel === "funds" ? "active" : ""
                          }`}
                          onClick={() => handlePanelClick("funds")}
                        >
                          Funds
                        </a>
                      </li>
                      <li className="border border-5 border-start-0 ">
                        <a
                          href="#"
                          className={`nav-link link-body-emphasis ${
                            selectedPanel === "myFundRequests" ? "active" : ""
                          }`}
                          onClick={() => handlePanelClick("myFundRequests")}
                        >
                          My Fund Requests
                        </a>
                      </li>
                      <li className="border border-5 border-start-0 ">
                        <a
                          href="#"
                          className={`nav-link link-body-emphasis ${
                            selectedPanel === "support" ? "active" : ""
                          }`}
                          onClick={() => handlePanelClick("support")}
                        >
                          Support
                        </a>
                      </li>
                      <li className="border border-5 border-start-0 ">
                        <a
                          href="#"
                          className={`nav-link link-body-emphasis ${
                            selectedPanel === "logout" ? "active" : ""
                          }`}
                          onClick={() => handlePanelClick("logout")}
                        >
                          logout
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
                <hr />
              </div>
            </div>
          </nav>
        </div>
        <div className="col" id="homecol2">
          <div className="container mt-5 p-5">{panelContent}</div>
        </div>
      </div>
    </>
  );
};

export default AHome;
