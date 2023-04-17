import React from "react";

const SupportPanel = () => {
  return (
    <>
      <div className="container  ">
        <h1>Support</h1>
        <div className=" mt-5">
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="inputEmail4"
              />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control form-control-lg"
                id="inputPassword4"
              />
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="inputAddress"
              />
            </div>
            <div className="col-12">
              <label for="inputAddress2" className="form-label">
                Write Your Message
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="inputAddress2"
              />
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SupportPanel;
