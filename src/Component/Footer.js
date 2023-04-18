import React from "react";

const Footer = () => {
  return (
    <>
      <div className="row p-5 m-0" id="footer">
        <div className="col">
          <div className="group-lg group-wrap-3">
            <div className="group-item">
              <h4 className="text-dark">Our Contacts:-</h4>

              <h6 className="text-dark m-4">
                {" "}
                V10 Prime Marketing Private Limited{" "}
              </h6>
              <h6 className="text-dark m-4"> CIN- U52609UP2022PTC172085</h6>
              <h6 className="text-dark m-4"> GSTIN-05AAJCV0293L1Z0</h6>
            </div>
          </div>
        </div>
        <div className="col">
          <h5 className="mb-2 text-dark">CORPORATE INFO</h5>
          <ul className="list-unstyled ">
            <li>
              {" "}
              <a href="">Legal </a>{" "}
            </li>
            <li className="mt-3">
              {" "}
              <a href="contacts.html">Our Brands </a>{" "}
            </li>
          </ul>
        </div>
        <div className="col">
          <h5 className="mb-2 text-dark">USEFUL LINKS</h5>
          <ul className="list-unstyled ">
            <li className="mt-3">
              <a href="/page/license-transfer-policy">
                License Transfer Policy
              </a>
            </li>
            <li className="mt-3">
              <a href="/page/privacy-and-policy">Privacy And Policy</a>
            </li>
            <li className="mt-3">
              <a href="/page/refund-policy">Refund Policy</a>
            </li>
            <li className="mt-3">
              <a href="/page/gallery">Gallery</a>
            </li>
            <li className="mt-3">
              <a href="/page/achievers">V10 Achievers</a>
            </li>
            <li className="mt-3">
              <a href="/page/bank-payment">Bank Payment</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h5 className="mb-2 text-dark">STORE INFORMATION</h5>
          {/* <div className="footer-contant"> */}
          <ul className="list-unstyled text-dark">
            <li>
              C/O RAM SWAROOP GROUND FLOOR MAKAN NO 146 AJITPURPOST BARA
              DISTRICT UDHAAN SINGH NAGAR Kichha UR 263148 IN
            </li>
            <li className="mt-2">
              <i className="fa fa-phone"></i>Call Us:{" "}
              <a href="tel:+917895101494">+91-7895101494</a>
              <br />
              <a className="" href="tel:+918279996848">
                +91-8279996848
              </a>
            </li>
            <li className="mt-2">
              <i className="fa fa-envelope"></i>Email Us:{" "}
              <a href="mailto:devbrat7895@gmail.com">devbrat7895@gmail.com</a>
            </li>
          </ul>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
