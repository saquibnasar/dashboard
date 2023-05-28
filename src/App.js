import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Signup from "./component/Signup";
import Devices from "./component/Devices";
import Setting from "./component/Setting";
import CreateCard from "./component/CreateCard";
import HomePage from "./component/HomePage";
import { useState } from "react";

function App() {
  const [isNavbar, setIsNavbar] = useState(true);

  const navbarToggle = () => {
    setIsNavbar(!isNavbar);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home navbarToggle={navbarToggle} isNavbar={isNavbar} />}
        />
        <Route path="/createCard" element={<CreateCard />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route
          path="/homepage/:homepageId"
          element={<HomePage navbarToggle={navbarToggle} isNavbar={isNavbar} />}
        />
        <Route
          path="/setting/:settingId"
          element={<Setting navbarToggle={navbarToggle} isNavbar={isNavbar} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
