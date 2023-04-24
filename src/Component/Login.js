import React from "react";
import Navebar from "./Navebar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import fb from "./Database/firebaseconfig";
import Breadcrumb from "./Breadcrumb";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import bcrypt from "bcryptjs";
const db = fb.db;
const Login = () => {
  const [Emailerror, setEmailerror] = React.useState(null);
  const [Passworderror, setPassworderror] = React.useState(null);

  let history = useNavigate();

  const [loginData, setloginData] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  var validEmailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var validpasswordRegex = /^.{8,25}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!loginData.email && !loginData.password) {
    //   setPassworderror("Please enter your password");
    //   setEmailerror("Please enter your Email Address");
    // } else if (!loginData.email) {
    //   setEmailerror("Please enter your Email Address");
    // } else if (!validEmailRegex.test(loginData.email)) {
    //   setEmailerror("Email is not valid");
    // } else if (!loginData.password) {
    //   setPassworderror("Please enter your password");
    // } else if (!validpasswordRegex.test(loginData.password)) {
    //   setPassworderror("password must be 8 characters");
    // }
    // else if (!isOnline) {
    //   props.showAlert("You are not connected to the network.", "danger");
    // }
    // else {
    try {
      const docRef = doc(db, "login", loginData.email);
      const docSnap = await getDoc(docRef);
      if (!docSnap.data().isActive) {
        alert("Your Id is blocked contact to the Administration");
      } else {
        const passwordCompare = await bcrypt.compare(
          loginData.password,
          docSnap.data().Password
        );
        if (passwordCompare) {
          // set the user in the local storage

          localStorage.setItem("isLoggedin", true);
          localStorage.setItem("email", docSnap.data().Email);
          history("/Ahome");
        } else {
          // display error message
          // props.showAlert("Invalid Credentials", "danger");
          alert("Invalid Credentials");
        }
      }
    } catch (err) {
      console.error(err);
    }
    // }
  };
  const onChange = (e) => {
    setloginData({ ...loginData, [e.target.name]: e.target.value });
    setEmailerror(null);
    setPassworderror(null);
  };

  return (
    <>
      <Navebar />
      <div className="container mt-5 mb-5">
        <Breadcrumb page="Login" />
        {/* Form */}
        <div className="mt-5 p-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                onChange={onChange}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              {/* <div
                id="emailHelp"
                className="form-text"
                error={Boolean(Emailerror)}
                variant="standard"
                style={{ display: Emailerror ? "block" : "none" }}
              >
                {Emailerror}
              </div> */}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                onChange={onChange}
                name="password"
                className="form-control"
                id="exampleInputPassword1"
              />
              {/* <div
                id="emailHelp"
                className="form-text"
                error={Boolean(Passworderror)}
                variant="standard"
                style={{ display: Passworderror ? "block" : "none" }}
              >
                {Passworderror}
              </div> */}
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                I am not a robot
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        {/* Form */}
        <div className="text-center">
          Don't have an account? <Link to="/signup"> Sign Up.</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
