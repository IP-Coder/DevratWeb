import React from "react";

const MyProfilePanel = () => {
  const db = "Helllo World";
  return (
    <>
      <div className=" ">
        <form>
          <fieldset disabled className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Distributor Name*
              </label>
              <input
                type="text"
                className="form-control"
                id="disabledTextInput"
                placeholder={db}
                name="DistributorName"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Reference Code*
              </label>
              <input
                type="text"
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                name="ReferenceCode"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Email*
              </label>
              <input
                type="text"
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                name="Email"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Father's Name*
              </label>
              <input
                type="text"
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                name="FatherName"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Date Of Birth(DOB)*
              </label>
              <input
                type="date"
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                name="DOB"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Sex*
              </label>
              <input
                type="text"
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                name="sex"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Aadhar No*
              </label>
              <input
                type="text"
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                name="AadharNo"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Nationality
              </label>
              <input
                type="text"
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                name="Nationality"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                House No/Plot*
              </label>
              <input
                type="text"
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                name="HouseNo"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Village/Post*
              </label>
              <input
                type="text"
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                name="Village"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                District*
              </label>
              <input
                type="text"
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                name="District"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Mobile Number*
              </label>
              <input
                type="text"
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                name="MobileNumber"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Nominee Name*
              </label>
              <input
                type="text"
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                name="NomineeName"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Nominee Relation*
              </label>
              <input
                type="text"
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                name="NomineeRelation"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Nominee DOB*
              </label>
              <input
                type="date"
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                name="NomineeDOB"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Bank Name*
              </label>
              <input
                type="text"
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                name="BankName"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Bank Account Number*
              </label>
              <input
                type="text"
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                name="BankAccountNumber"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Bank Branch Address*
              </label>
              <input
                type="text"
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                name="BankBranchAddress"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Bank IFSC Code*
              </label>
              <input
                type="text"
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                name="BankIFSCCode"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                PAN No*
              </label>
              <input
                type="text"
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                name="PANNo"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="formFile" className="form-label">
                PAN Image*
              </label>
              <input
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                type="file"
                name="PanImage"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="formFile" className="form-label">
                Aadhar Front Image*
              </label>
              <input
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                type="file"
                name="Aaadharfront"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="formFile" className="form-label">
                Aadhar Back Image*
              </label>
              <input
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                type="file"
                name="Aaadharback"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="formFile" className="form-label">
                Profile Image*
              </label>
              <input
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                type="file"
                name="ProfileImage"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Password*
              </label>
              <input
                type="password"
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                name="Password"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Confirm Password*
              </label>
              <input
                type="text"
                className="form-control"
                id="disabledTextInput"
                placeholder="Disabled input"
                name="ConfirmPassword"
              />
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default MyProfilePanel;
