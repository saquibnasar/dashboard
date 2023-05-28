import SIdebar from "./SIdebar";
import Topbar from "./Topbar";
import Subscription from "./setting/Subscription";
import Support from "./setting/Support";
import SettingDevices from "./setting/SettingDevices";
import Admin from "./setting/Admin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faNfcSymbol } from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useParams } from "react-router-dom";

export default function Setting(props) {
  const { settingId } = useParams();

  // const [imgUpload, setImgUpload] = useState("");
  // const handleChange = (event) => {
  //   setImgUpload(event.target.value);
  // };

  window.addEventListener("change", (e) => {
    console.log(window.innerWidth);
  });

  return (
    <>
      <div className="d-flex h-100vh">
        <SIdebar navbarToggle={props.navbarToggle} />
        <div className="d-flex flex-direction-column w-100">
          <Topbar type="setting" isNavbar={props.isNavbar} />
          <div className="setting mt-4">
            <nav className="sidebar">
              <div className="sidebar-collapse">
                <ul className="sidebar-nav">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/setting/team"
                    >
                      <img className="img-fluid" src="/dots.png" alt="" />
                      <p className="d-lg-none"> Team settings</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/setting/subscription"
                    >
                      <FontAwesomeIcon icon={faUser} />
                      <p className="d-lg-none">My subscription</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/setting/support"
                    >
                      <img className="img-fluid" src="/iconqr.png" alt="" />
                      {/* <FontAwesomeIcon icon={faHourglassEmpty} /> */}
                      <p className="d-lg-none">Support</p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/setting/devices"
                    >
                      <FontAwesomeIcon icon={faNfcSymbol} />
                      <p className="d-lg-none">Add Flax Devices</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/setting/admin"
                    >
                      <FontAwesomeIcon icon={faUserShield} />
                      <p className="d-lg-none">Admin Details</p>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            {settingId === "team" ? (
              <div className="team_setting">
                <form>
                  <div className="Company_logo">
                    <h3>Company logo</h3>
                    {/* <input
                      type="file"
                      value={imgUpload}
                      onChange={handleChange}
                    />
                    <img src={imgUpload} alt="" /> */}
                    <div className="logo">
                      <span>
                        <FontAwesomeIcon icon={faPlus} />
                      </span>
                    </div>
                  </div>
                  <div className="Company_name">
                    <h3>Company name</h3>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Company name"
                    />
                  </div>
                  <button type="summit">Update</button>
                </form>
              </div>
            ) : settingId === "subscription" ? (
              <Subscription />
            ) : settingId === "support" ? (
              <Support />
            ) : settingId === "devices" ? (
              <SettingDevices />
            ) : (
              <Admin />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
