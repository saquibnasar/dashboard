import React, { useEffect, useState } from "react";
import SIdebar from "./SIdebar";
import Topbar from "./Topbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNfcSymbol } from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useParams } from "react-router-dom";
import AddCard from "./AddCard";
import LInks from "./LInks";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import About from "./About";
import FlaxCode from "./FlaxCode";
import UserProfile from "./UserProfile/UserProfile";
import { Link } from "react-router-dom";
import axios from "axios";
export default function HomePage(props) {
  const { homepageId, userId } = useParams();
  const [isLinks, setIslinks] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [data, setData] = useState();
  const [formData, setFormData] = useState({
    userInfo: {},
    userLink: [],
    userPlugin: [],

    userImages: {
      userProfile: "",
      bannerImage1: "",
      bannerImage2: "",
      bannerImage3: "",
    },
  });
  useEffect(() => {
    axios
      .get(`http://192.168.1.8:3005/members/${userId}`)
      .then((response) => {
        setData(response.data);
        setFormData((prevData) => {
          return {
            ...prevData,
            name: response.data.name,
            designation: response.data.designation,
            employeeBio: response.data.employeeBio,
            officeEmailId: response.data.officeEmailId,
            whatsAppNumber: response.data.whatsAppNumber,
            mobileNumber: response.data.mobileNumber,
            userLink: response.data.links,
            bannerImages: response.data.bannerImages,
            profileImage: response.data.profileImage,
            employeeId: response.data.employeeId,
          };
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  const handleChange = (event) => {
    setFormData((prevformData) => {
      return {
        ...prevformData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const addLin = () => {
    setIslinks(!isLinks);
  };
  const [image, setImage] = useState({
    logoimage: "",
    bannerImage1: "",
    bannerImage2: "",
    bannerImage3: "",
    raw: "",
  });
  const imagehandleChange = (e) => {
    if (e.target.files.length) {
      setImage((prevformData) => {
        return {
          ...prevformData,
          [e.target.name]: URL.createObjectURL(e.target.files[0]),
        };
      });
    }
  };

  return (
    <>
      <div className={`d-flex homePage ${homepageId} overflow-hidden`}>
        <SIdebar navbarToggle={props.navbarToggle} />
        <div className="d-flex flex-direction-column w-100 ">
          <Topbar
            type="user"
            title=""
            isNavbar={props.isNavbar}
            text="Wilmette"
          />
          <div className="homePage_container mt-4">
            <nav className="sidebar">
              <div className="sidebar-collapse">
                <ul className="sidebar-nav">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to={`/homepage/content/${userId}`}
                    >
                      <img className="img-fluid" src="/dots.png" alt="" />
                      <p className="d-lg-none">Content</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to={`/homepage/about/${userId}`}
                    >
                      <FontAwesomeIcon icon={faUser} />
                      <p className="d-lg-none">About</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to={`/homepage/flaxcode/${userId}`}
                    >
                      <img className="img-fluid" src="/iconqr.png" alt="" />
                      <p className="d-lg-none">FlaxCode</p>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/setting_devices"
                    >
                      <FontAwesomeIcon icon={faNfcSymbol} />
                      <p className="d-lg-none">Add Flax Devices</p>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            <div
              className={`homePage_container-bottom ${isLinks ? "d-none" : ""}`}
            >
              {homepageId === "content" ? (
                <div className="links">
                  {data && data.links ? (
                    <LInks addLin={addLin} data={data} />
                  ) : (
                    <div className="link_container">
                      <div>
                        <h2>This profile doesn’t have any linked content</h2>
                        <h3>
                          Add links to contact Information, website,
                          <br className="d-lg-none" />
                          Social media handles and more
                        </h3>

                        <button className="btn_add" onClick={addLin}>
                          <FontAwesomeIcon icon={faPlus} />
                          Add Links and contact info
                        </button>
                      </div>

                      <img src="/bglink.png" alt="" className="img-fluid" />
                    </div>
                  )}
                </div>
              ) : homepageId === "about" ? (
                <About
                  addLink={addLin}
                  handleChange={handleChange}
                  formData={formData}
                  imageData={image}
                  imagehandleChange={imagehandleChange}
                  setImage={setImage}
                  data={data}
                  setFormData={setFormData}
                />
              ) : homepageId === "flaxcode" ? (
                <FlaxCode />
              ) : (
                ""
              )}
              <div className="signup_phone text-center overflow-hidden">
                <Link to="/a" className="btn btn-preview">
                  Live Preview <FontAwesomeIcon icon={faShareSquare} />{" "}
                </Link>
                <div className="signup_phone-container">
                  <UserProfile
                    formData={formData}
                    logo={image.logoimage}
                    images={image}
                  />
                </div>
              </div>
            </div>
            {isLinks ? <AddCard removeLink={addLin} isClick={isClick} /> : ""}
          </div>
        </div>
      </div>
    </>
  );
}
