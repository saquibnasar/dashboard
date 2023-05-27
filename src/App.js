import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Signup from "./component/Signup";
import Devices from "./component/Devices";
import Setting from "./component/Setting";
import CreateCard from "./component/CreateCard";
import HomePage from "./component/HomePage";
import FlaxCode from "./component/FlaxCode";
import About from "./component/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createCard" element={<CreateCard />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/homepage/:homepageId" element={<HomePage />} />
        <Route path="/setting/:settingId" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
