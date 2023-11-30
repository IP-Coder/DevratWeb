import React from "react";
import { Link } from "react-router-dom";
const Navebar = () => {
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg bg-light rounded"
          aria-label="Twelfth navbar example"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample10"
              aria-controls="navbarsExample10"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-md-center"
              id="navbarsExample10"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/404">
                    ABOUT US
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#most-popular">
                    MOST POPULAR
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/404">
                    PRODUCTS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/404">
                    BRANDS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/404">
                    TESTIMONIALS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contactus">
                    CONTACT US
                  </Link>
                </li>
                <li className="nav-item">
                  <Link type="button" to="/login" className="btn btn-primary">
                    LOGIN
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navebar;
