import React from "react";
import { useState } from "react";
import DashboardPanel from "./Accounts/DashboardPanel";
import HomePanel from "./Accounts/HomePanel";
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
      panelContent = <HomePanel />;
      break;
  }

  return (
    <>
      <div className="row">
        <div className="col-3">
          <div
            class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
            style={{ width: "280px" }}
          >
            <a
              href="/"
              class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            >
              <svg class="bi pe-none me-2" width="40" height="32">
                <use xlinkHref="#bootstrap" />
              </svg>
              <span class="fs-4">VM 11 PRIME</span>
            </a>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item">
                <a
                  href="#"
                  class={`nav-link ${selectedPanel === "home" ? "active" : ""}`}
                  onClick={() => handlePanelClick("home")}
                  aria-current="page"
                >
                  <svg class="bi pe-none me-2" width="16" height="16">
                    <use xlinkHref="#home" />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class={`nav-link link-body-emphasis ${
                    selectedPanel === "dashboard" ? "active" : ""
                  }`}
                  onClick={() => handlePanelClick("dashboard")}
                >
                  <svg class="bi pe-none me-2" width="16" height="16">
                    <use xlinkHref="#speedometer2" />
                  </svg>
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class={`nav-link link-body-emphasis ${
                    selectedPanel === "allDownline" ? "active" : ""
                  }`}
                  onClick={() => handlePanelClick("allDownline")}
                >
                  <svg class="bi pe-none me-2" width="16" height="16">
                    <use xlinkHref="#people-circle" />
                  </svg>
                  All Downline
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class={`nav-link link-body-emphasis ${
                    selectedPanel === "myDownline" ? "active" : ""
                  }`}
                  onClick={() => handlePanelClick("myDownline")}
                >
                  <svg class="bi pe-none me-2" width="16" height="16">
                    <use xlinkHref="#people-circle-fill" />
                  </svg>
                  My Downline
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class={`nav-link link-body-emphasis ${
                    selectedPanel === "genealogy" ? "active" : ""
                  }`}
                  onClick={() => handlePanelClick("genealogy")}
                >
                  <svg class="bi pe-none me-2" width="16" height="16">
                    <use xlinkHref="#tree" />
                  </svg>
                  Genealogy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class={`nav-link link-body-emphasis ${
                    selectedPanel === "myIdCard" ? "active" : ""
                  }`}
                  onClick={() => handlePanelClick("myIdCard")}
                >
                  <svg class="bi pe-none me-2" width="16" height="16">
                    <use xlinkHref="#tree" />
                  </svg>
                  My ID Card
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class={`nav-link link-body-emphasis ${
                    selectedPanel === "myProfile" ? "active" : ""
                  }`}
                  onClick={() => handlePanelClick("myProfile")}
                >
                  <svg class="bi pe-none me-2" width="16" height="16">
                    <use xlinkHref="#tree" />
                  </svg>
                  My Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class={`nav-link link-body-emphasis ${
                    selectedPanel === "myOrders" ? "active" : ""
                  }`}
                  onClick={() => handlePanelClick("myOrders")}
                >
                  <svg class="bi pe-none me-2" width="16" height="16">
                    <use xlinkHref="#tree" />
                  </svg>
                  My Orders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class={`nav-link link-body-emphasis ${
                    selectedPanel === "myEarning" ? "active" : ""
                  }`}
                  onClick={() => handlePanelClick("myEarning")}
                >
                  <svg class="bi pe-none me-2" width="16" height="16">
                    <use xlinkHref="#tree" />
                  </svg>
                  My Earning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class={`nav-link link-body-emphasis ${
                    selectedPanel === "myPoints" ? "active" : ""
                  }`}
                  onClick={() => handlePanelClick("myPoints")}
                >
                  <svg class="bi pe-none me-2" width="16" height="16">
                    <use xlinkHref="#tree" />
                  </svg>
                  My Points
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class={`nav-link link-body-emphasis ${
                    selectedPanel === "shopProducts" ? "active" : ""
                  }`}
                  onClick={() => handlePanelClick("shopProducts")}
                >
                  <svg class="bi pe-none me-2" width="16" height="16">
                    <use xlinkHref="#tree" />
                  </svg>
                  Shop Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class={`nav-link link-body-emphasis ${
                    selectedPanel === "funds" ? "active" : ""
                  }`}
                  onClick={() => handlePanelClick("funds")}
                >
                  <svg class="bi pe-none me-2" width="16" height="16">
                    <use xlinkHref="#tree" />
                  </svg>
                  Funds
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class={`nav-link link-body-emphasis ${
                    selectedPanel === "myFundRequests" ? "active" : ""
                  }`}
                  onClick={() => handlePanelClick("myFundRequests")}
                >
                  <svg class="bi pe-none me-2" width="16" height="16">
                    <use xlinkHref="#tree" />
                  </svg>
                  My Fund Requests
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class={`nav-link link-body-emphasis ${
                    selectedPanel === "support" ? "active" : ""
                  }`}
                  onClick={() => handlePanelClick("support")}
                >
                  <svg class="bi pe-none me-2" width="16" height="16">
                    <use xlinkHref="#tree" />
                  </svg>
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class={`nav-link link-body-emphasis ${
                    selectedPanel === "logout" ? "active" : ""
                  }`}
                  onClick={() => handlePanelClick("logout")}
                >
                  <svg class="bi pe-none me-2" width="16" height="16">
                    <use xlinkHref="#tree" />
                  </svg>
                  logout
                </a>
              </li>
            </ul>
            <hr />
          </div>
        </div>
        <div className="col-9">
          <div className="container mt-5 p-5">{panelContent}</div>
        </div>
      </div>
    </>
  );
};

export default AHome;
