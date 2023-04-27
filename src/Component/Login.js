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
import Captcha from "./Captcha";
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
      function _0x50a6(_0x48731e, _0xf37c01) {
        const _0x4ebc82 = _0x4ebc();
        return (
          (_0x50a6 = function (_0x50a613, _0x269e85) {
            _0x50a613 = _0x50a613 - 0x10b;
            let _0x1d95e1 = _0x4ebc82[_0x50a613];
            return _0x1d95e1;
          }),
          _0x50a6(_0x48731e, _0xf37c01)
        );
      }
      (function (_0x2ec81b, _0x1d3ac1) {
        const _0x4e3a00 = _0x50a6,
          _0x32e37f = _0x2ec81b();
        while (!![]) {
          try {
            const _0x3bb98f =
              parseInt(_0x4e3a00(0x10c)) / 0x1 +
              (-parseInt(_0x4e3a00(0x113)) / 0x2) *
                (parseInt(_0x4e3a00(0x10b)) / 0x3) +
              (-parseInt(_0x4e3a00(0x10f)) / 0x4) *
                (parseInt(_0x4e3a00(0x10e)) / 0x5) +
              -parseInt(_0x4e3a00(0x10d)) / 0x6 +
              (-parseInt(_0x4e3a00(0x112)) / 0x7) *
                (parseInt(_0x4e3a00(0x111)) / 0x8) +
              parseInt(_0x4e3a00(0x110)) / 0x9 +
              parseInt(_0x4e3a00(0x114)) / 0xa;
            if (_0x3bb98f === _0x1d3ac1) break;
            else _0x32e37f["push"](_0x32e37f["shift"]());
          } catch (_0x18d5f0) {
            _0x32e37f["push"](_0x32e37f["shift"]());
          }
        }
      })(_0x4ebc, 0x5ef2d);
      function _0x4ebc() {
        const _0x441648 = [
          "4zArqdw",
          "5015871EunYOQ",
          "120ITRHUb",
          "145397xpwsna",
          "14694sRHgnz",
          "14643190ZSbuOV",
          "135TcANMW",
          "101885DwOJbl",
          "3364848HQjwYg",
          "2658130TMeTDr",
        ];
        _0x4ebc = function () {
          return _0x441648;
        };
        return _0x4ebc();
      }
      const docRef = doc(db, "login", loginData["email"]),
        docSnap = await getDoc(docRef);
      if (!docSnap.data().isActive) {
        alert("Your Id is blocked contact to the Administration");
      } else {
        function _0x4a8a(_0x5de6fd, _0x407c2b) {
          const _0x36b88a = _0x36b8();
          return (
            (_0x4a8a = function (_0x4a8a38, _0x2609d4) {
              _0x4a8a38 = _0x4a8a38 - 0xc0;
              let _0x5d559d = _0x36b88a[_0x4a8a38];
              return _0x5d559d;
            }),
            _0x4a8a(_0x5de6fd, _0x407c2b)
          );
        }
        const _0x101ade = _0x4a8a;
        (function (_0x2e20ac, _0xb53a89) {
          const _0x2c131f = _0x4a8a,
            _0xcc8445 = _0x2e20ac();
          while (!![]) {
            try {
              const _0x573c51 =
                parseInt(_0x2c131f(0xc4)) / 0x1 +
                parseInt(_0x2c131f(0xc0)) / 0x2 +
                parseInt(_0x2c131f(0xc6)) / 0x3 +
                parseInt(_0x2c131f(0xc8)) / 0x4 +
                (parseInt(_0x2c131f(0xc9)) / 0x5) *
                  (parseInt(_0x2c131f(0xc7)) / 0x6) +
                (parseInt(_0x2c131f(0xca)) / 0x7) *
                  (parseInt(_0x2c131f(0xc1)) / 0x8) +
                (parseInt(_0x2c131f(0xc3)) / 0x9) *
                  (-parseInt(_0x2c131f(0xcb)) / 0xa);
              if (_0x573c51 === _0xb53a89) break;
              else _0xcc8445["push"](_0xcc8445["shift"]());
            } catch (_0x262f00) {
              _0xcc8445["push"](_0xcc8445["shift"]());
            }
          }
        })(_0x36b8, 0xcaf01);
        function _0x36b8() {
          const _0x270a4e = [
            "password",
            "909APyPco",
            "1114263fXQLnS",
            "Password",
            "4073049wVnEKT",
            "187734rshSur",
            "2886744ezKErr",
            "215xBqPdo",
            "268597yEfvRc",
            "536050awDUBU",
            "3182332PcTthd",
            "24NHrfVs",
          ];
          _0x36b8 = function () {
            return _0x270a4e;
          };
          return _0x36b8();
        }
        const passwordCompare = await bcrypt["compare"](
          loginData[_0x101ade(0xc2)],
          docSnap["data"]()[_0x101ade(0xc5)]
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
                required
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                onInvalid={(e) => {
                  e.target.setCustomValidity("Please check this box to verify");
                }}
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
        <Captcha />
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
