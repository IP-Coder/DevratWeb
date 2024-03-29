import React from "react";
import Navebar from "./Navebar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import fb from "./Database/firebaseconfig";
import Breadcrumb from "./Breadcrumb";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import bcrypt from "bcryptjs";
import "firebase/storage";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import SignupModal from "./SignupModal";

const db = fb.db;
const Signup = () => {
  let history = useNavigate();
  const [loginData, setloginData] = useState({
    showPassword: false,
  });

  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [file4, setFile4] = useState(null);
  let downloadURL1;
  let downloadURL2;
  let downloadURL3;
  let downloadURL4;
  const handleFile1InputChange = (event) => {
    const file = event.target.files[0];
    if (file.size > 50 * 1024) {
      alert("File size is greater than 50kb");
      event.target.value = null; // reset file input
      return;
    }
    if (!file.type.match("image.*")) {
      alert("Only image files are allowed");
      event.target.value = null; // reset file input
      return;
    }
    setFile1(file);
  };

  const handleFile2InputChange = (event) => {
    const file = event.target.files[0];
    if (file.size > 50 * 1024) {
      alert("File size is greater than 50kb");
      event.target.value = null; // reset file input
      return;
    }
    if (!file.type.match("image.*")) {
      alert("Only image files are allowed");
      event.target.value = null; // reset file input
      return;
    }
    setFile2(file);
  };

  const handleFile3InputChange = (event) => {
    const file = event.target.files[0];
    if (file.size > 50 * 1024) {
      alert("File size is greater than 50kb");
      event.target.value = null; // reset file input
      return;
    }
    if (!file.type.match("image.*")) {
      alert("Only image files are allowed");
      event.target.value = null; // reset file input
      return;
    }
    setFile3(file);
  };

  const handleFile4InputChange = (event) => {
    const file = event.target.files[0];
    if (file.size > 50 * 1024) {
      alert("File size is greater than 50kb");
      event.target.value = null; // reset file input
      return;
    }
    if (!file.type.match("image.*")) {
      alert("Only image files are allowed");
      event.target.value = null; // reset file input
      return;
    }
    setFile4(file);
  };

  // var validEmailRegex =
  //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // var validtextRegex = /^.{8,25}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowModal(true);
    // alert("Please wait while we are processing your request");
    const salt = await bcrypt.genSalt(10);

    let recur = loginData.ReferenceCode
      ? loginData.ReferenceCode.replace(/\s/g, "")
      : null;
    let email = null;
    while (recur !== null) {
      const q = query(
        collection(db, "login"),
        where("ReferralCode", "==", recur)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        recur = doc.data().ParentRefferal;
        email = doc.data().Email;
      });
      const washingtonRef = doc(db, "login", email);
      // Atomically add a new region to the "regions" array field.
      await updateDoc(washingtonRef, {
        Refers: arrayUnion(loginData.AadharNo),
      });
    }
    const q = query(
      collection(db, "login"),
      where(
        "ReferralCode",
        "==",
        loginData.ReferenceCode
          ? loginData.ReferenceCode.replace(/\s/g, "")
          : null
      )
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      email = doc.data().Email;
    });
    const washingtonRef = doc(db, "login", email);
    // Atomically add a new region to the "regions" array field.
    await updateDoc(washingtonRef, {
      MyRefers: arrayUnion(loginData.AadharNo),
    });
    try {
      const SecurePassword = await bcrypt.hash(loginData.Password, salt);
      const storage = getStorage();

      if (file1) {
        const storageRef1 = ref(
          storage,
          `Credentials/${loginData.MobileNumber}/AadharFront.png`
        );
        await uploadBytes(storageRef1, file1);
        downloadURL1 = await getDownloadURL(storageRef1);
      }

      if (file2) {
        const storageRef2 = ref(
          storage,
          `Credentials/${loginData.MobileNumber}/Aadharback.png`
        );
        await uploadBytes(storageRef2, file2);
        downloadURL2 = await getDownloadURL(storageRef2);
      }

      if (file3) {
        const storageRef3 = ref(
          storage,
          `Credentials/${loginData.MobileNumber}/Profile.png`
        );
        await uploadBytes(storageRef3, file3);
        downloadURL3 = await getDownloadURL(storageRef3);
      }

      if (file4) {
        const storageRef4 = ref(
          storage,
          `Credentials/${loginData.MobileNumber}/PanCard.png`
        );
        await uploadBytes(storageRef4, file4);
        downloadURL4 = await getDownloadURL(storageRef4);
      }
      const data = {
        Aaadharback: downloadURL2 ? downloadURL2 : null,
        Aaadharfront: downloadURL1 ? downloadURL1 : null,
        AadharNo: loginData.AadharNo ? loginData.AadharNo : null,
        BankAccountNumber: loginData.BankAccountNumber
          ? loginData.BankAccountNumber
          : null,
        BankBranchAddress: loginData.BankBranchAddress
          ? loginData.BankBranchAddress
          : null,
        BankIFSCCode: loginData.BankIFSCCode ? loginData.BankIFSCCode : null,
        BankName: loginData.BankName ? loginData.BankName : null,
        DOB: loginData.DOB ? loginData.DOB : null,
        DistributorName: loginData.DistributorName
          ? loginData.DistributorName
          : null,
        District: loginData.District ? loginData.District : null,
        Email: loginData.Email ? loginData.Email : null,
        FatherName: loginData.FatherName ? loginData.FatherName : null,
        HouseNo: loginData.HouseNo ? loginData.HouseNo : null,
        MobileNumber: loginData.MobileNumber ? loginData.MobileNumber : null,
        Nationality: loginData.Nationality ? loginData.Nationality : null,
        NomineeDOB: loginData.NomineeDOB ? loginData.NomineeDOB : null,
        NomineeName: loginData.NomineeName ? loginData.NomineeName : null,
        NomineeRelation: loginData.NomineeRelation
          ? loginData.NomineeRelation
          : null,
        PanNo: loginData.PANNo ? loginData.PANNo : null,
        Password: SecurePassword ? SecurePassword : null,
        PanImage: downloadURL4 ? downloadURL4 : null,
        ProfileImage: downloadURL3 ? downloadURL3 : null,
        ParentRefferal: loginData.ReferenceCode
          ? loginData.ReferenceCode.replace(/\s/g, "")
          : null,
        Refers: [],
        ReferralCode:
          loginData.DistributorName && loginData.MobileNumber
            ? loginData.DistributorName.split(" ")[0].toLowerCase() +
              loginData.MobileNumber.slice(0, 4)
            : null,
        Village: loginData.Village ? loginData.Village : null,
        sex: loginData.sex ? loginData.sex : null,
        isActive: true,
      };
      const response = await setDoc(doc(db, "login", loginData.Email), data);
      history("/login");
    } catch (err) {
      alert(err.message);
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
                // required
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
                // required
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
                // required
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
                // required
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
                // required
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
                // required
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
                <option selected>Select</option>
                <option value={"Indian"}>Indian</option>
                <option value={"Non-Indian"}>Non-Indian</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                House No/Plot*
              </label>
              <input
                // required
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
                // required
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
                // required
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
                // required
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
                // required
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
                // required
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
                // required
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
                // required
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
                // required
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
                // required
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
                // required
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
                // required
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
                // required
                className="form-control p-3"
                type="file"
                onChange={handleFile4InputChange}
                name="PanImage"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="formFile" className="form-label">
                Aadhar Front Image*
              </label>
              <input
                // required
                className="form-control p-3"
                type="file"
                onChange={handleFile1InputChange}
                name="Aaadharfront"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="formFile" className="form-label">
                Aadhar Back Image*
              </label>
              <input
                // required
                className="form-control p-3"
                type="file"
                onChange={handleFile2InputChange}
                name="Aaadharback"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="formFile" className="form-label">
                Profile Image*
              </label>
              <input
                // required
                className="form-control p-3"
                type="file"
                onChange={handleFile3InputChange}
                name="ProfileImage"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Password*
              </label>
              <input
                // required
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
                // required
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
      <SignupModal show={showModal} />
      <Footer />
    </>
  );
};
export default Signup;
