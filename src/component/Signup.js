import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Signup() {
  let togglePassword;
  const [attribute, setAttribute] = useState("password");
  const [font, setFont] = useState(faEye);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  setTimeout(() => {
    togglePassword = document.querySelector(".input-password svg");
    togglePassword.addEventListener("click", () => {
      setAttribute(attribute === "password" ? "text" : "password");
      setFont(font === faEye ? faEyeSlash : faEye);
    });
  }, 1);

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
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
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
                  <FontAwesomeIcon icon={font} />
                  <label className="did-floating-label">Password</label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Continue
              </button>
              {/* <div className="form_or">
                <span></span>
                OR
                <span></span>
              </div>
              <div className="form_btns">
                <button type="submit" className="btn btn-primary">
                  <svg
                    width="11"
                    height="21"
                    viewBox="0 0 11 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.33906 20.3438H1.66094C0.889844 20.3438 0.25 19.7203 0.25 18.9328V2.06719C0.25 1.29609 0.889844 0.65625 1.66094 0.65625H9.33906C10.1102 0.65625 10.75 1.27969 10.75 2.06719V18.9492C10.75 19.7203 10.1102 20.3438 9.33906 20.3438Z"
                      fill="#424242"
                    />
                    <path
                      d="M9.235 19.7055H1.55031C1.19758 19.7055 0.912109 19.4201 0.912109 19.0673V3.22383C0.912109 2.87273 1.19758 2.58727 1.54867 2.58727H9.44828C9.80102 2.58727 10.0865 2.87273 10.0865 3.22547V18.964C10.0865 19.1166 9.8568 19.7055 9.235 19.7055Z"
                      fill="black"
                    />
                    <path
                      d="M7.0832 1.90149H3.9332C3.81836 1.90149 3.73633 1.80305 3.73633 1.70461C3.73633 1.60617 3.83477 1.50774 3.9332 1.50774H7.0668C7.18164 1.50774 7.26367 1.60617 7.26367 1.70461C7.26367 1.80305 7.18164 1.90149 7.0832 1.90149Z"
                      fill="#212121"
                    />
                    <path
                      d="M9.33906 0.984375C9.93625 0.984375 10.4219 1.47 10.4219 2.06719V18.9492C10.4219 19.5366 9.93625 20.0156 9.33906 20.0156H1.66094C1.06375 20.0156 0.578125 19.53 0.578125 18.9328V2.06719C0.578125 1.47984 1.07359 0.984375 1.66094 0.984375H9.33906ZM9.33906 0.65625H1.66094C0.889844 0.65625 0.25 1.29609 0.25 2.06719V18.9328C0.25 19.7203 0.889844 20.3438 1.66094 20.3438H9.33906C10.1102 20.3438 10.75 19.7203 10.75 18.9492V2.06719C10.75 1.27969 10.1102 0.65625 9.33906 0.65625Z"
                      fill="#757575"
                    />
                    <path
                      d="M2.93187 4.91531H1.88844C1.76867 4.91531 1.67188 4.81852 1.67188 4.69875V3.65531C1.67188 3.53555 1.76867 3.43875 1.88844 3.43875H2.93187C3.05164 3.43875 3.14844 3.53555 3.14844 3.65531V4.69875C3.14844 4.81852 3.05164 4.91531 2.93187 4.91531Z"
                      fill="#EAB56E"
                    />
                    <path
                      d="M4.99047 4.91531H3.94703C3.82727 4.91531 3.73047 4.81852 3.73047 4.69875V3.65531C3.73047 3.53555 3.82727 3.43875 3.94703 3.43875H4.99047C5.11023 3.43875 5.20703 3.53555 5.20703 3.65531V4.69875C5.20703 4.81852 5.11023 4.91531 4.99047 4.91531Z"
                      fill="#FB8C00"
                    />
                    <path
                      d="M7.05133 4.91531H6.00953C5.88977 4.91531 5.79297 4.81852 5.79297 4.69875V3.65531C5.79297 3.53555 5.88977 3.43875 6.00953 3.43875H7.05297C7.17273 3.43875 7.26953 3.53555 7.26953 3.65531V4.69875C7.26953 4.81852 7.17273 4.91531 7.05133 4.91531Z"
                      fill="#FF80AB"
                    />
                    <path
                      d="M9.11156 4.91531H8.06812C7.94836 4.91531 7.85156 4.81852 7.85156 4.69875V3.65531C7.85156 3.53555 7.94836 3.43875 8.06812 3.43875H9.11156C9.23133 3.43875 9.32812 3.53555 9.32812 3.65531V4.69875C9.32812 4.81852 9.23133 4.91531 9.11156 4.91531Z"
                      fill="#0288D1"
                    />
                    <path
                      d="M2.93187 7.23844H1.88844C1.76867 7.23844 1.67188 7.14164 1.67188 7.02188V5.97844C1.67188 5.85867 1.76867 5.76188 1.88844 5.76188H2.93187C3.05164 5.76188 3.14844 5.85867 3.14844 5.97844V7.02188C3.14844 7.14164 3.05164 7.23844 2.93187 7.23844Z"
                      fill="#00BFA5"
                    />
                    <path
                      d="M4.99047 7.23844H3.94703C3.82727 7.23844 3.73047 7.14164 3.73047 7.02188V5.97844C3.73047 5.85867 3.82727 5.76188 3.94703 5.76188H4.99047C5.11023 5.76188 5.20703 5.85867 5.20703 5.97844V7.02188C5.20703 7.14164 5.11023 7.23844 4.99047 7.23844Z"
                      fill="#81D4FA"
                    />
                    <path
                      d="M7.05133 7.23844H6.00953C5.88977 7.23844 5.79297 7.14164 5.79297 7.02188V5.97844C5.79297 5.85867 5.88977 5.76188 6.00953 5.76188H7.05297C7.17273 5.76188 7.26953 5.85867 7.26953 5.97844V7.02188C7.26953 7.14164 7.17273 7.23844 7.05133 7.23844Z"
                      fill="#FB8C00"
                    />
                    <path
                      d="M9.11156 7.23844H8.06812C7.94836 7.23844 7.85156 7.14164 7.85156 7.02188V5.97844C7.85156 5.85867 7.94836 5.76188 8.06812 5.76188H9.11156C9.23133 5.76188 9.32812 5.85867 9.32812 5.97844V7.02188C9.32812 7.14164 9.23133 7.23844 9.11156 7.23844Z"
                      fill="#EAB56E"
                    />
                    <path
                      d="M2.93187 9.56156H1.88844C1.76867 9.56156 1.67188 9.46476 1.67188 9.345V8.30156C1.67188 8.1818 1.76867 8.085 1.88844 8.085H2.93187C3.05164 8.085 3.14844 8.1818 3.14844 8.30156V9.345C3.14844 9.46476 3.05164 9.56156 2.93187 9.56156Z"
                      fill="#FB8C00"
                    />
                    <path
                      d="M4.99047 9.56156H3.94703C3.82727 9.56156 3.73047 9.46476 3.73047 9.345V8.30156C3.73047 8.1818 3.82727 8.085 3.94703 8.085H4.99047C5.11023 8.085 5.20703 8.1818 5.20703 8.30156V9.345C5.20703 9.46476 5.11023 9.56156 4.99047 9.56156Z"
                      fill="#FF80AB"
                    />
                    <path
                      d="M7.05133 9.56156H6.00953C5.88977 9.56156 5.79297 9.46476 5.79297 9.345V8.30156C5.79297 8.1818 5.88977 8.085 6.00953 8.085H7.05297C7.17273 8.085 7.26953 8.1818 7.26953 8.30156V9.345C7.26953 9.46476 7.17273 9.56156 7.05133 9.56156Z"
                      fill="#00BFA5"
                    />
                    <path
                      d="M9.11047 9.56156H8.06703C7.94727 9.56156 7.85047 9.46476 7.85047 9.345V8.30156C7.85047 8.1818 7.94727 8.085 8.06703 8.085H9.11047C9.23024 8.085 9.32703 8.1818 9.32703 8.30156V9.345C9.32703 9.46476 9.23024 9.56156 9.11047 9.56156ZM2.93187 11.8847H1.88844C1.76867 11.8847 1.67188 11.7879 1.67188 11.6681V10.6247C1.67188 10.5049 1.76867 10.4081 1.88844 10.4081H2.93187C3.05164 10.4081 3.14844 10.5049 3.14844 10.6247V11.6681C3.14844 11.7879 3.05164 11.8847 2.93187 11.8847Z"
                      fill="#0288D1"
                    />
                    <path
                      d="M4.99086 11.8847H3.94742C3.82766 11.8847 3.73086 11.7879 3.73086 11.6681V10.6247C3.73086 10.5049 3.82766 10.4081 3.94742 10.4081H4.99086C5.11063 10.4081 5.20742 10.5049 5.20742 10.6247V11.6681C5.20742 11.7879 5.11063 11.8847 4.99086 11.8847ZM2.93187 18.8541H1.88844C1.76867 18.8541 1.67188 18.7573 1.67188 18.6375V17.5941C1.67188 17.4743 1.76867 17.3775 1.88844 17.3775H2.93187C3.05164 17.3775 3.14844 17.4743 3.14844 17.5941V18.6375C3.14844 18.7556 3.05164 18.8541 2.93187 18.8541Z"
                      fill="#81D4FA"
                    />
                    <path
                      d="M4.99047 18.8541H3.94703C3.82727 18.8541 3.73047 18.7573 3.73047 18.6375V17.5941C3.73047 17.4743 3.82727 17.3775 3.94703 17.3775H4.99047C5.11023 17.3775 5.20703 17.4743 5.20703 17.5941V18.6375C5.20703 18.7556 5.11023 18.8541 4.99047 18.8541Z"
                      fill="#0288D1"
                    />
                    <path
                      d="M7.05133 18.8541H6.00953C5.88977 18.8541 5.79297 18.7573 5.79297 18.6375V17.5941C5.79297 17.4743 5.88977 17.3775 6.00953 17.3775H7.05297C7.17273 17.3775 7.26953 17.4743 7.26953 17.5941V18.6375C7.26953 18.7556 7.17273 18.8541 7.05133 18.8541Z"
                      fill="#00BFA5"
                    />
                    <path
                      d="M9.11156 18.8541H8.06812C7.94836 18.8541 7.85156 18.7573 7.85156 18.6375V17.5941C7.85156 17.4743 7.94836 17.3775 8.06812 17.3775H9.11156C9.23133 17.3775 9.32812 17.4743 9.32812 17.5941V18.6375C9.32812 18.7556 9.23133 18.8541 9.11156 18.8541Z"
                      fill="#FF80AB"
                    />
                  </svg>
                  Continue with Mobile
                </button>
                <button type="submit" className="btn btn-primary">
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.0182 10.2114C20.0182 9.58745 19.9676 8.96007 19.8597 8.34619H11.2012V11.8811H16.1595C15.9538 13.0211 15.2926 14.0297 14.3246 14.6705V16.9641H17.2827C19.0198 15.3654 20.0182 13.0043 20.0182 10.2114Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M11.205 19.1803C13.6808 19.1803 15.7686 18.3674 17.2899 16.9643L14.3318 14.6706C13.5088 15.2306 12.4463 15.5476 11.2084 15.5476C8.8136 15.5476 6.78306 13.932 6.0545 11.7598H3.00195V14.1242C4.56027 17.224 7.73424 19.1803 11.205 19.1803Z"
                      fill="#34A853"
                    />
                    <path
                      d="M6.0491 11.76C5.66458 10.6199 5.66458 9.38538 6.0491 8.24532V5.88086H2.99992C1.69794 8.47468 1.69794 11.5306 2.99992 14.1244L6.0491 11.76Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M11.205 4.45387C12.5137 4.43364 13.7786 4.92609 14.7264 5.83005L17.3472 3.20924C15.6877 1.65093 13.4851 0.794191 11.205 0.821175C7.73424 0.821175 4.56027 2.7775 3.00195 5.88064L6.05112 8.2451C6.77631 6.06953 8.81022 4.45387 11.205 4.45387Z"
                      fill="#EA4335"
                    />
                  </svg>
                  Continue with Google
                </button>
              </div> */}
              <h3>
                Already use Flax? <Link to="/signin"> Login</Link>
              </h3>
              <p>
                By continuing, you agree to Flax{" "}
                <a href="/"> Terms and Conditions </a>
                and confirm you have read our <a href="/"> Privacy Notice</a>.
              </p>
            </form>
          </div>
        </div>
        <div className="signup_promotion">
          <img className="img-fluid" src="/signup.png" alt="" />
          {/* <h1>Save upto 100% cost while sharing your business card</h1>
          <div className="d-flex justify-content-between mt-4 align-items-center">
            <img className="img-fluid" src="/signup_spider.png" alt="" />
            <img className="img-fluid" src="/signup_spider2.png" alt="" />
          </div>
          <div className="d-flex justify-content-between signup_promotion_cards">
            <div className="signup_promotion_card">
              <h2>Never Ends on business card again</h2>
              <img className="img-fluid" src="/signup_card.png" alt="" />
            </div>
            <div className="signup_promotion_card">
              <h2>Track your business card </h2>
              <img
                className="img-fluid"
                src="/signup_businesscard.png"
                alt=""
              />
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className='signup'>
        <div className='signup_form-container'>
          <div
            className={
              page === 1
                ? "signup_navbar d-flex justify-content-end"
                : "signup_navbar d-flex justify-content-between"
            }
          >
            {page === 1 ? (
              ""
            ) : (
              <button
                className='signup_navbar-back'
                onClick={() => setPage(page - 1)}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
                <p>Back</p>
              </button>
            )}

            <div className='signup_navbar-tab'>
              <button
                className={page === 1 ? "signup_navbar-active" : ""}
                onClick={() => setPage(1)}
                href='/'
              >
                1
              </button>
              <button
                className={page === 2 ? "signup_navbar-active" : ""}
                onClick={() => setPage(2)}
                href='/'
              >
                2
              </button>
              <button
                className={page === 3 ? "signup_navbar-active" : ""}
                onClick={() => setPage(3)}
                href='/'
              >
                3
              </button>
              <button
                className={page === 4 ? "signup_navbar-active" : ""}
                onClick={() => setPage(4)}
                href='/'
              >
                4
              </button>
            </div>
          </div>
          <div className='form'>
            <div className='form_logo'>
              <img className='img-fluid' src='/logo.svg' alt='' />
              <h2>Create a Flax Card</h2>
            </div>
            <form action=''>
              <div className='mt-5 email_input'>
                <div id='emailHelp' className='form-text'>
                  {page === 1 ? (
                    "Name*"
                  ) : (
                    <>
                      {page === 2 ? (
                        "Company"
                      ) : (
                        <> {page === 3 ? "dummy3" : "dummy4"}</>
                      )}
                    </>
                  )}
                </div>
                <div className='did-floating-label-content input-group'>
                  <input
                    className='did-floating-input'
                    type='text'
                    placeholder=' '
                    required
                  />
                  <label className='did-floating-label'>
                    {page === 1 ? (
                      "Name"
                    ) : (
                      <>
                        {page === 2 ? (
                          "Company"
                        ) : (
                          <> {page === 3 ? "dummy3" : "dummy4"}</>
                        )}
                      </>
                    )}
                  </label>
                </div>
              </div>
              <div className='mt-4 email_input'>
                <div id='emailHelp' className='form-text'>
                  {page === 1 ? (
                    "Mobile"
                  ) : (
                    <>
                      {page === 2 ? (
                        "Designation"
                      ) : (
                        <> {page === 3 ? "dummy3" : "dummy4"}</>
                      )}
                    </>
                  )}
                </div>
                <div className='did-floating-label-content input-group'>
                  <input
                    className='did-floating-input'
                    type='text'
                    placeholder=' '
                    required
                  />
                  <label className='did-floating-label'>
                    {page === 1 ? (
                      "+124 56565 5 5 55"
                    ) : (
                      <>
                        {page === 2 ? (
                          "Designation"
                        ) : (
                          <> {page === 3 ? "dummy3" : "dummy4"}</>
                        )}
                      </>
                    )}
                  </label>
                </div>
              </div>

              <button
                type='submit'
                className='btn btn-primary'
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                Continue
              </button>
            </form>
          </div>
        </div>
        <div className='signup_phone text-center'>
          <p>Live Profile Preview</p>
          <div className='signup_phone-container'>
            <img src='/phone_bannner.svg' className='img-fluid' alt='' />
            <h3>Name</h3>
            <h4>Designation</h4>
            <h4>Company Name</h4>
            <div className='signup_phone-boxs'>
              <div className='signup_phone-box'></div>
              <div className='signup_phone-box'></div>
              <div className='signup_phone-box'></div>
              <div className='signup_phone-box'></div>
              <div className='signup_phone-box'></div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
