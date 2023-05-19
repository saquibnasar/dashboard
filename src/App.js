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
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/" element={<Home />} />
        <Route path="/createCard" element={<CreateCard />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/flaxcode" element={<FlaxCode />} />
        <Route path="/setting/team" element={<Setting type="setting" />} />
        <Route
          path="/setting/subscription"
          element={<Setting type="subscription" />}
        />
        <Route path="/setting/support" element={<Setting type="support" />} />
        <Route path="/setting/devices" element={<Setting type="devices" />} />
        <Route path="/setting/admin" element={<Setting type="admin" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
