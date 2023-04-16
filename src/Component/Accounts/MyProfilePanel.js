import React, { useEffect, useState } from "react";
import fb from "../Database/firebaseconfig";
import { doc, getDoc } from "firebase/firestore";
const db = fb.db;
const MyProfilePanel = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "login", localStorage.getItem("email"));
      const docSnap = await getDoc(docRef);
      setData(docSnap.data());
    };
    fetchData();
  }, []);
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
                placeholder={data.DistributorName}
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
                placeholder={data.ReferralCode}
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
                placeholder={data.Email}
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
                placeholder={data.FatherName}
                name="FatherName"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Date Of Birth(DOB)*
              </label>
              <input
                type="text"
                className="form-control"
                id="disabledTextInput"
                placeholder={data.DOB}
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
                placeholder={data.sex}
                name="Sex"
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
                placeholder={data.AadharNo}
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
                placeholder={data.Nationality}
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
                placeholder={data.HouseNo}
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
                placeholder={data.Village}
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
                placeholder={data.District}
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
                placeholder={data.MobileNumber}
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
                placeholder={data.NomineeName}
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
                placeholder={data.NomineeRelation}
                name="NomineeRelation"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Nominee DOB*
              </label>
              <input
                type="text"
                className="form-control"
                id="disabledTextInput"
                placeholder={data.NomineeDOB}
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
                placeholder={data.BankName}
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
                placeholder={data.BankAccountNumber}
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
                placeholder={data.BankBranchAddress}
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
                placeholder={data.BankIFSCCode}
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
                placeholder={data.PanNo}
                name="PANNo"
              />
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default MyProfilePanel;
