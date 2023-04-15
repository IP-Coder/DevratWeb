import React from "react";
import Navebar from "./Navebar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import fb from "./Database/firebaseconfig";
import Breadcrumb from "./Breadcrumb";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import bcrypt from "bcryptjs";
const db = fb.db;
const Signup = () => {
  let history = useNavigate();
  const [loginData, setloginData] = useState({
    showPassword: false,
  });
  // var validEmailRegex =
  //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // var validtextRegex = /^.{8,25}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const salt = await bcrypt.genSalt(10);
    const SecurePassword = await bcrypt.hash(loginData.Password, salt);
    try {
      console.log("hello");
      console.log(loginData);
      const uid = loginData.MobileNumber;
      const data = {
        Aaadharback: loginData.Aaadharback,
        Aaadharfront: loginData.Aaadharfront,
        AadharNo: loginData.AadharNo,
        BankAccountNumber: loginData.BankAccountNumber,
        BankBranchAddress: loginData.BankBranchAddress,
        BankIFSCCode: loginData.BankIFSCCode,
        BankName: loginData.BankName,
        DOB: loginData.DOB,
        DistributorName: loginData.DistributorName,
        District: loginData.District,
        Email: loginData.Email,
        FatherName: loginData.FatherName,
        HouseNo: loginData.HouseNo,
        MobileNumber: loginData.MobileNumber,
        Nationality: loginData.Nationality,
        NomineeDOB: loginData.NomineeDOB,
        NomineeName: loginData.NomineeName,
        NomineeRelation: loginData.NomineeRelation,
        PanNo: loginData.PANNo,
        Password: SecurePassword,
        PanImage: loginData.PanImage,
        ProfileImage: loginData.ProfileImage,
        ParentRefferal: loginData.ReferenceCode,
        ReferralCode:
          loginData.DistributorName + loginData.MobileNumber.slice(0, 4),
        Village: loginData.Village,
        sex: loginData.sex,
        isActive: true,
      };
      const response = await setDoc(doc(db, "login", loginData.Email), data);
      console.log("Document written with ID: ", response);
      history("/login");
      // props.showAlert("Attendance submitted successfully ", "success");
    } catch (err) {
      console.error(err);
    }
    // }
  };
  const onChange = (e) => {
    setloginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navebar />
      <div className="container mt-5 mb-5">
        <Breadcrumb page="Signup" />
        {/* Form */}
        <div className="mt-5 p-5 ">
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Distributor Name*
              </label>
              <input
                type="text"
                className="form-control  p-3"
                onChange={onChange}
                name="DistributorName"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Reference Code*
              </label>
              <input
                type="text"
                className="form-control p-3"
                onChange={onChange}
                name="ReferenceCode"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Email*
              </label>
              <input
                type="text"
                className="form-control p-3"
                onChange={onChange}
                name="Email"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Father's Name*
              </label>
              <input
                type="text"
                className="form-control p-3"
                onChange={onChange}
                name="FatherName"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Date Of Birth(DOB)*
              </label>
              <input
                type="date"
                className="form-control p-3"
                onChange={onChange}
                name="DOB"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Sex*
              </label>
              <select
                id="inputState2"
                className="form-select p-3"
                name="sex"
                onChange={onChange}
              >
                <option selected>Select</option>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female </option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Aadhar No*
              </label>
              <input
                type="text"
                className="form-control p-3"
                onChange={onChange}
                name="AadharNo"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Nationality
              </label>
              <select
                id="inputState"
                className="form-select p-3"
                name="Nationality"
                onChange={onChange}
              >
                <option value={"Indian"} selected>
                  Indian
                </option>
                <option value={"Non-Indian"}>Non-Indian</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                House No/Plot*
              </label>
              <input
                type="text"
                className="form-control p-3"
                onChange={onChange}
                name="HouseNo"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Village/Post*
              </label>
              <input
                type="text"
                className="form-control p-3"
                onChange={onChange}
                name="Village"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                District*
              </label>
              <input
                type="text"
                className="form-control p-3"
                onChange={onChange}
                name="District"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Mobile Number*
              </label>
              <input
                type="text"
                className="form-control p-3"
                onChange={onChange}
                name="MobileNumber"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Nominee Name*
              </label>
              <input
                type="text"
                className="form-control p-3"
                onChange={onChange}
                name="NomineeName"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Nominee Relation*
              </label>
              <input
                type="text"
                className="form-control p-3"
                onChange={onChange}
                name="NomineeRelation"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Nominee DOB*
              </label>
              <input
                type="date"
                className="form-control p-3"
                onChange={onChange}
                name="NomineeDOB"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Bank Name*
              </label>
              <input
                type="text"
                className="form-control p-3"
                onChange={onChange}
                name="BankName"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Bank Account Number*
              </label>
              <input
                type="text"
                className="form-control p-3"
                onChange={onChange}
                name="BankAccountNumber"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Bank Branch Address*
              </label>
              <input
                type="text"
                className="form-control p-3"
                onChange={onChange}
                name="BankBranchAddress"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Bank IFSC Code*
              </label>
              <input
                type="text"
                className="form-control p-3"
                onChange={onChange}
                name="BankIFSCCode"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                PAN No*
              </label>
              <input
                type="text"
                className="form-control p-3"
                onChange={onChange}
                name="PANNo"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="formFile" className="form-label">
                PAN Image*
              </label>
              <input
                className="form-control p-3"
                type="file"
                onChange={onChange}
                name="PanImage"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="formFile" className="form-label">
                Aadhar Front Image*
              </label>
              <input
                className="form-control p-3"
                type="file"
                onChange={onChange}
                name="Aaadharfront"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="formFile" className="form-label">
                Aadhar Back Image*
              </label>
              <input
                className="form-control p-3"
                type="file"
                onChange={onChange}
                name="Aaadharback"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="formFile" className="form-label">
                Profile Image*
              </label>
              <input
                className="form-control p-3"
                type="file"
                onChange={onChange}
                name="ProfileImage"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Password*
              </label>
              <input
                type="password"
                className="form-control p-3"
                onChange={onChange}
                name="Password"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Confirm Password*
              </label>
              <input
                type="text"
                className="form-control p-3"
                onChange={onChange}
                name="ConfirmPassword"
              />
            </div>
            <button
              disabled={loginData.ConfirmPassword !== loginData.Password}
              type="submit"
              className="btn btn-primary"
            >
              Register
            </button>
          </form>
        </div>
        {/* Form */}
        <div className="text-center">
          Already have an account? <Link to="/login"> Log in.</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Signup;
