import React from "react";

const SupportPanel = () => {
  return (
    <>
      <div className="container  ">
        <h1>Support</h1>
        <div className=" mt-5">
          <form class="row g-3">
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="inputEmail4"
              />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                class="form-control form-control-lg"
                id="inputPassword4"
              />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control form-control-lg"
                id="inputAddress"
              />
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">
                Write Your Message
              </label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="inputAddress2"
              />
            </div>

            <div class="col-12">
              <button type="submit" class="btn btn-primary">
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
