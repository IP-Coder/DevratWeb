import React from "react";
import Navebar from "./Navebar";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navebar />
      {/* CAROUSEL STARTS */}
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/1674718141_getty_159281926_117506.jpg"
              className="d-block w-100"
              alt="/products/P (1).jpg"
              height={"30%"}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/1674718856_Women-Red-Pantsuit-Heels-Outside.jpg"
              className="d-block w-100"
              alt="/products/P (1).jpg"
              height={"40%"}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* CAROUSEL STARTS */}
      {/* Most Popular */}
      <div className="container" id="most-popular">
        <div className="text-center mt-5">
          <h6 className="text-danger">Exclusive Products</h6>
          <h1>MOST POPULAR</h1>
          <hr
            style={{
              borderColor: "red",
              borderWidth: "5px",
              margin: "auto",
              width: "10%",
            }}
          />
          <h5 className="text-danger mt-2">MEN</h5>
        </div>

        <div className="row mt-5 row-cols-1 row-cols-md-4 mb-3 justify-content-center">
          <div className="card m-3" style={{ width: "15rem" }}>
            <img
              src="/products/P (1).jpg"
              className="card-img-top"
              alt="/products/P (1).jpg"
            />
            <div className="card-body">
              <h5 className="card-title">Formal Shirt</h5>
              <p className="card-text">
                <del>3999 </del> &#8377;1899/-
              </p>
              <a href="#" className="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
          <div className="card m-3" style={{ width: "15rem" }}>
            <img
              src="/products/P (1).jpg"
              className="card-img-top"
              alt="/products/P (1).jpg"
            />
            <div className="card-body">
              <h5 className="card-title">Formal Shirt</h5>
              <p className="card-text">
                <del>3999 </del> &#8377;1899/-
              </p>
              <a href="#" className="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
          <div className="card m-3" style={{ width: "15rem" }}>
            <img
              src="/products/P (1).jpg"
              className="card-img-top"
              alt="/products/P (1).jpg"
            />
            <div className="card-body">
              <h5 className="card-title">Formal Shirt</h5>
              <p className="card-text">
                <del>3999 </del> &#8377;1899/-
              </p>
              <a href="#" className="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
          <div className="card m-3" style={{ width: "15rem" }}>
            <img
              src="/products/P (1).jpg"
              className="card-img-top"
              alt="/products/P (1).jpg"
            />
            <div className="card-body">
              <h5 className="card-title">Formal Shirt</h5>
              <p className="card-text">
                <del>3999 </del> &#8377;1899/-
              </p>
              <a href="#" className="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
          <div className="card m-3" style={{ width: "15rem" }}>
            <img
              src="/products/P (1).jpg"
              className="card-img-top"
              alt="/products/P (1).jpg"
            />
            <div className="card-body">
              <h5 className="card-title">Formal Shirt</h5>
              <p className="card-text">
                <del>3999 </del> &#8377;1899/-
              </p>
              <a href="#" className="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
          <div className="card m-3" style={{ width: "15rem" }}>
            <img
              src="/products/P (1).jpg"
              className="card-img-top"
              alt="/products/P (1).jpg"
            />
            <div className="card-body">
              <h5 className="card-title">Formal Shirt</h5>
              <p className="card-text">
                <del>3999 </del> &#8377;1899/-
              </p>
              <a href="#" className="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
          <div className="card m-3" style={{ width: "15rem" }}>
            <img
              src="/products/P (1).jpg"
              className="card-img-top"
              alt="/products/P (1).jpg"
            />
            <div className="card-body">
              <h5 className="card-title">Formal Shirt</h5>
              <p className="card-text">
                <del>3999 </del> &#8377;1899/-
              </p>
              <a href="#" className="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
      '{/* Most Popular */}
      {/* New Arrivals */}
      <div className="container " id="New-arrivals">
        <div className="text-center mt-5">
          <h6 className="text-danger">New Arrivals</h6>
          <h2>LATEST DROPS</h2>
          <hr
            style={{
              borderColor: "red",
              borderWidth: "5px",
              margin: "auto",
              width: "10%",
            }}
          />
          <p className=" text-secondary mt-4">
            Looking for the latest trends in clothing, shoes and accessories?
            Welcome to
            <br /> our 'Latest Drops' edit, bringing you all the latest styles
            from all your fave
            <br /> brands.
          </p>
        </div>

        <div className="row mt-5 row-cols-1 row-cols-md-4 mb-3 justify-content-center">
          <div className="card m-3" style={{ width: "15rem" }}>
            <img
              src="/products/P (1).jpg"
              className="card-img-top"
              alt="/products/P (1).jpg"
            />
            <div className="card-body">
              <h5 className="card-title">Formal Shirt</h5>
              <p className="card-text">
                <del>3999 </del> &#8377;1899/-
              </p>
              <a href="#" className="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
          <div className="card m-3" style={{ width: "15rem" }}>
            <img
              src="/products/P (1).jpg"
              className="card-img-top"
              alt="/products/P (1).jpg"
            />
            <div className="card-body">
              <h5 className="card-title">Formal Shirt</h5>
              <p className="card-text">
                <del>3999 </del> &#8377;1899/-
              </p>
              <a href="#" className="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
          <div className="card m-3" style={{ width: "15rem" }}>
            <img
              src="/products/P (1).jpg"
              className="card-img-top"
              alt="/products/P (1).jpg"
            />
            <div className="card-body">
              <h5 className="card-title">Formal Shirt</h5>
              <p className="card-text">
                <del>3999 </del> &#8377;1899/-
              </p>
              <a href="#" className="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
          <div className="card m-3" style={{ width: "15rem" }}>
            <img
              src="/products/P (1).jpg"
              className="card-img-top"
              alt="/products/P (1).jpg"
            />
            <div className="card-body">
              <h5 className="card-title">Formal Shirt</h5>
              <p className="card-text">
                <del>3999 </del> &#8377;1899/-
              </p>
              <a href="#" className="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
          <div className="card m-3" style={{ width: "15rem" }}>
            <img
              src="/products/P (1).jpg"
              className="card-img-top"
              alt="/products/P (1).jpg"
            />
            <div className="card-body">
              <h5 className="card-title">Formal Shirt</h5>
              <p className="card-text">
                <del>3999 </del> &#8377;1899/-
              </p>
              <a href="#" className="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
          <div className="card m-3" style={{ width: "15rem" }}>
            <img
              src="/products/P (1).jpg"
              className="card-img-top"
              alt="/products/P (1).jpg"
            />
            <div className="card-body">
              <h5 className="card-title">Formal Shirt</h5>
              <p className="card-text">
                <del>3999 </del> &#8377;1899/-
              </p>
              <a href="#" className="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
          <div className="card m-3" style={{ width: "15rem" }}>
            <img
              src="/products/P (1).jpg"
              className="card-img-top"
              alt="/products/P (1).jpg"
            />
            <div className="card-body">
              <h5 className="card-title">Formal Shirt</h5>
              <p className="card-text">
                <del>3999 </del> &#8377;1899/-
              </p>
              <a href="#" className="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* New Arrivals */}
      {/* Footer  */}
      <Footer />
      {/* Footer */}
    </>
  );
};

export default Home;
