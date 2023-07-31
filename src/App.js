import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Signup from "./component/Signup";
import Devices from "./component/Devices";
import Setting from "./component/Setting";
import CreateCard from "./component/CreateCard";
import HomePage from "./component/HomePage";
import { useState } from "react";
import Signin from "./component/Signin";
import UserProfile from "./component/UserProfile/UserProfile";

function App() {
  const [isNavbar, setIsNavbar] = useState(false);

  const navbarToggle = () => {
    setIsNavbar(!isNavbar);
  };

  // if (window.innerWidth < 992) {
  //   setIsNavbar(!isNavbar);
  //   navbarToggle();
  // }
  const [linkData, setLinkData] = useState([
    {
      linkData: "9999999999",
      linkTitle: "whatsapp",
      linkType: "whatsapp",
    },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home navbarToggle={navbarToggle} isNavbar={isNavbar} />}
        />
        <Route
          path="/createCard"
          element={<CreateCard linkData={linkData} />}
        />
        <Route
          path="/devices"
          element={<Devices navbarToggle={navbarToggle} isNavbar={isNavbar} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/homepage/:homepageId"
          element={<HomePage navbarToggle={navbarToggle} isNavbar={isNavbar} />}
        />
        <Route
          path="/setting/:settingId"
          element={<Setting navbarToggle={navbarToggle} isNavbar={isNavbar} />}
        />
        <Route path="/:userProfileId" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
