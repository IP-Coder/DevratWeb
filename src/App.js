import logo from "./logo.svg";
import "./App.css";
import Home from "./Component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Four04 from "./Component/Four04";
import Contactus from "./Component/Contactus";
import AHome from "./Component/AHome";
import Signup from "./Component/Signup";
import FirebaseImageUploader from "./Component/FirebaseImageUploader";
import GetLocation from "./Component/GetLocation";
// import ImageDisplay from "./Component/ImageDisplay";

function App() {
  return (
    <Router>
      {/* <DescriptionAlerts alert={alert} /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/404" element={<Four04 />} />
        <Route exact path="/contactus" element={<Contactus />} />
        <Route exact path="/Ahome" element={<AHome />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/tst" element={<GetLocation />} />
      </Routes>
    </Router>
  );
}

export default App;
