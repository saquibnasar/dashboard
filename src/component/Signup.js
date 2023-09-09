import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import Alert from "./Alert";
export default function Signup() {
  const [attribute, setAttribute] = useState("password");
  const [font, setFont] = useState(faEye);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    otp: "",
  });
  const [isOtp, setIsOtp] = useState(false);
  const [alertText, setAlertText] = useState("");

  const changeInputType = () => {
    setAttribute(attribute === "password" ? "text" : "password");
    setFont(font === faEye ? faEyeSlash : faEye);
  };

  const handleChange = (event) => {
    setFormData((prevformData) => {
      return {
        ...prevformData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isOtp) {
      axios
        .post("http://13.127.69.231/auth/verify-email-otp", {
          email: formData.email,
          otp: parseInt(formData.otp),
        })
        .then(function (response) {
          localStorage.setItem("userName", response.data.result.userName);
          localStorage.setItem("fullName", response.data.result.fullName);
          localStorage.setItem("email", response.data.result.email);
          localStorage.setItem("accessToken", response.data.result.accessToken);
          localStorage.setItem(
            "refreshToken",
            response.data.result.refreshToken
          );
          setAlertText(response.data.message);
          // alert(response.data.message);
          window.location.href = "/";
        })
        .catch(function (error) {
          setAlertText(error.response.data.message);
          // alert(error.response.data.message);
        });
    } else {
      axios
        .post("http://13.127.69.231/auth/signup", {
          email: formData.email,
          password: formData.password,
          fullName: "Asim Nasar",
        })
        .then(function (response) {
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);
          setIsOtp(true);
        })
        .catch(function (error) {
          setAlertText(error.response.data.message);
          // alert(error.response.data.message);
        });
    }
  };

  return (
    <>
      <div className="signup">
        <div className="signup_form-container">
          <div className="signup_navbar">
            <svg
              width="94"
              height="36"
              viewBox="0 0 94 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="img-fluid"
            >
              <g clipPath="url(#clip0_2076_326)">
                <path
                  d="M2.13281 28.8V7.1701H15.9895V10.4547H6.05111V16.3269H15.039V19.6115H6.05111V28.8H2.13281ZM23.2136 7.1701V28.8H19.3903V7.1701H23.2136ZM31.8133 29.1274C30.7853 29.1274 29.8594 28.9444 29.0356 28.5782C28.2189 28.2051 27.5711 27.6559 27.0923 26.9307C26.6206 26.2054 26.3847 25.3112 26.3847 24.248C26.3847 23.3327 26.5537 22.5758 26.8917 21.9773C27.2296 21.3788 27.6908 20.9 28.2752 20.5409C28.8596 20.1819 29.5179 19.9108 30.2502 19.7277C30.9895 19.5376 31.7535 19.4003 32.5421 19.3158C33.4926 19.2173 34.2636 19.1292 34.855 19.0518C35.4465 18.9673 35.876 18.8406 36.1435 18.6716C36.4181 18.4955 36.5554 18.2245 36.5554 17.8583V17.795C36.5554 16.9993 36.3195 16.3832 35.8478 15.9467C35.3761 15.5102 34.6966 15.2919 33.8094 15.2919C32.873 15.2919 32.1302 15.4961 31.5809 15.9045C31.0388 16.3128 30.6727 16.7951 30.4825 17.3514L26.9127 16.8444C27.1944 15.8587 27.6591 15.0349 28.3069 14.373C28.9547 13.7041 29.7468 13.2042 30.6832 12.8733C31.6197 12.5353 32.6547 12.3663 33.7883 12.3663C34.5698 12.3663 35.3479 12.4579 36.1224 12.6409C36.8969 12.824 37.6045 13.1268 38.2453 13.5492C38.886 13.9646 39.4 14.5315 39.7873 15.2496C40.1816 15.9678 40.3787 16.8655 40.3787 17.9428V28.8H36.7033V26.5716H36.5766C36.3442 27.0222 36.0168 27.4447 35.5943 27.839C35.1789 28.2262 34.6544 28.5395 34.0207 28.7789C33.394 29.0113 32.6582 29.1274 31.8133 29.1274ZM32.8061 26.3181C33.5736 26.3181 34.2389 26.1667 34.8022 25.8639C35.3655 25.5542 35.7985 25.1458 36.1013 24.6388C36.4111 24.1318 36.566 23.5791 36.566 22.9806V21.069C36.4463 21.1676 36.2421 21.2591 35.9534 21.3436C35.6718 21.4281 35.3549 21.5021 35.0029 21.5654C34.6508 21.6288 34.3023 21.6851 33.9573 21.7344C33.6123 21.7837 33.313 21.8259 33.0596 21.8611C32.4892 21.9386 31.9788 22.0653 31.5281 22.2414C31.0775 22.4174 30.7219 22.6638 30.4614 22.9806C30.2009 23.2904 30.0707 23.6918 30.0707 24.1846C30.0707 24.8887 30.3277 25.4204 30.8416 25.7794C31.3556 26.1385 32.0104 26.3181 32.8061 26.3181ZM47.3491 12.5776L50.6235 18.566L53.9501 12.5776H57.9952L53.1053 20.6888L58.0799 28.8H54.0559L50.6235 22.9595L47.2225 28.8H43.1669L48.1096 20.6888L43.2937 12.5776H47.3491Z"
                  fill="#4353FC"
                />
                <path
                  d="M62.918 5.10223C62.918 3.87038 63.9424 2.87061 65.206 2.87061H91.5866C92.8506 2.87061 93.8746 3.87038 93.8746 5.10223V31.7923C93.8746 33.0246 92.8506 34.0235 91.5866 34.0235H65.206C63.9424 34.0235 62.918 33.0246 62.918 31.7927V5.10181V5.10223Z"
                  fill="#4353FC"
                />
                <path
                  d="M72.8462 29.1273C71.8184 29.1273 70.8923 28.9442 70.0688 28.5781C69.2519 28.205 68.6043 27.6558 68.1253 26.9306C67.6537 26.2053 67.418 25.3111 67.418 24.2479C67.418 23.3326 67.5869 22.5757 67.9248 21.9772C68.2627 21.3787 68.7239 20.8999 69.3083 20.5408C69.8928 20.1818 70.5511 19.9107 71.2834 19.7276C72.0227 19.5375 72.7864 19.4002 73.5751 19.3157C74.5257 19.2172 75.2965 19.1291 75.8881 19.0517C76.4796 18.9672 76.9088 18.8405 77.1765 18.6715C77.4514 18.4954 77.5883 18.2244 77.5883 17.8583V17.7949C77.5883 16.9992 77.3525 16.3832 76.881 15.9466C76.409 15.5101 75.7295 15.2918 74.8424 15.2918C73.906 15.2918 73.1634 15.496 72.6142 15.9044C72.0716 16.3128 71.7055 16.7951 71.5154 17.3513L67.946 16.8443C68.2274 15.8586 68.6923 15.0348 69.3399 14.3729C69.9879 13.7041 70.7799 13.2042 71.7163 12.8732C72.6528 12.5353 73.6876 12.3663 74.8213 12.3663C75.6029 12.3663 76.3808 12.4578 77.1554 12.6409C77.93 12.8239 78.6377 13.1267 79.2782 13.5491C79.9191 13.9646 80.433 14.5314 80.8203 15.2496C81.2147 15.9677 81.4118 16.8655 81.4118 17.9427V28.7999H77.7365V26.5715H77.6095C77.377 27.0221 77.05 27.4445 76.6274 27.8388C76.2118 28.2261 75.6876 28.5394 75.0537 28.7788C74.4269 29.0112 73.6914 29.1273 72.8462 29.1273ZM73.8391 26.318C74.6067 26.318 75.2721 26.1666 75.8354 25.8638C76.3987 25.554 76.8316 25.1457 77.1342 24.6387C77.4443 24.1317 77.5991 23.579 77.5991 22.9805V21.0689C77.4791 21.1675 77.2749 21.259 76.9864 21.3435C76.705 21.428 76.3878 21.502 76.0358 21.5653C75.6838 21.6287 75.3351 21.685 74.9902 21.7343C74.6453 21.7836 74.346 21.8258 74.0928 21.861C73.5224 21.9385 73.0118 22.0652 72.561 22.2413C72.1107 22.4173 71.7549 22.6637 71.4947 22.9805C71.234 23.2903 71.1036 23.6917 71.1036 24.1845C71.1036 24.8886 71.3606 25.4203 71.8749 25.7793C72.3888 26.1384 73.0434 26.318 73.8391 26.318ZM85.2561 28.7999V12.5775H89.0791V28.7999H85.2561ZM87.1784 10.2751C86.5728 10.2751 86.0518 10.0744 85.6151 9.6731C85.1784 9.26472 84.9605 8.77536 84.9605 8.20506C84.9605 7.62769 85.1784 7.13833 85.6151 6.73701C86.0518 6.32864 86.5728 6.12445 87.1784 6.12445C87.7906 6.12445 88.3121 6.32864 88.7412 6.73701C89.1779 7.13833 89.3963 7.62769 89.3963 8.20506C89.3963 8.77536 89.1779 9.26472 88.7412 9.6731C88.3121 10.0744 87.7906 10.2751 87.1784 10.2751Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2076_326">
                  <rect width="93.8823" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="form">
            <div className="form_logo">
              <h1>Create your Account</h1>
              <h2>
                Get started with the #1 Digital Business Card <br /> Platform
              </h2>
            </div>
            <form action="/" onSubmit={handleSubmit}>
              {isOtp ? (
                <>
                  <div className="mt-4 email_input">
                    <div id="emailHelp" className="form-text">
                      Enter Otp
                    </div>
                    <div className="did-floating-label-content input-group input-password">
                      <input
                        className="did-floating-input"
                        type={attribute}
                        id="id_otp"
                        placeholder=" "
                        required
                        name="otp"
                        value={formData.otp}
                        onChange={handleChange}
                      />
                      <FontAwesomeIcon icon={font} />
                      <label className="did-floating-label">OTP</label>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="mt-4 email_input">
                    <div id="emailHelp" className="form-text">
                      Email
                    </div>
                    <div className="did-floating-label-content input-group">
                      <input
                        className="did-floating-input"
                        type="text"
                        placeholder=" "
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <label className="did-floating-label">Email</label>
                    </div>
                  </div>
                  <div className="mt-4 email_input">
                    <div id="emailHelp" className="form-text">
                      Password
                    </div>
                    <div className="did-floating-label-content input-group input-password">
                      <input
                        className="did-floating-input"
                        type={attribute}
                        id="id_password"
                        placeholder=" "
                        required
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <FontAwesomeIcon icon={font} onClick={changeInputType} />
                      <label className="did-floating-label">Password</label>
                    </div>
                  </div>
                </>
              )}

              <button type="submit" className="btn btn-primary">
                Continue
              </button>

              <h3>
                Already use Flax? <Link to="/login"> Login</Link>
              </h3>
              <p>
                By continuing, you agree to Flax{" "}
                <a href="/"> Terms and Conditions </a>
                and confirm you have read our <a href="/"> Privacy Notice</a>.
              </p>
            </form>
          </div>
          {alertText ? (
            <Alert alertText={alertText} setAlertText={setAlertText} />
          ) : (
            ""
          )}
        </div>
        <div className="signup_promotion">
          <img className="img-fluid" src="/signup.png" alt="" />
        </div>
      </div>
    </>
  );
}
