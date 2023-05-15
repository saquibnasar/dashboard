import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
export default function Signup() {
  let togglePassword;
  const [attribute, setAttribute] = useState("password");
  const [font, setFont] = useState(faEye);
  setTimeout(() => {
    togglePassword = document.querySelector(".input-password svg");
    togglePassword.addEventListener("click", () => {
      setAttribute(attribute === "password" ? "text" : "password");
      setFont(font === faEye ? faEyeSlash : faEye);
    });
  }, 1);

  return (
    <>
      <div className="signup">
        <div className="signup_form-container">
          <div className="signup_navbar">
            <img className="img-fluid" src="logofill.svg" alt="" />
          </div>
          <div className="form">
            <div className="form_logo">
              <h1>Create your Account</h1>
              <h2>
                Get started with the #1 Digital Business Card <br /> Platform
              </h2>
            </div>
            <form action="">
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
                  />
                  <FontAwesomeIcon icon={font} />
                  <label className="did-floating-label">Password</label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Continue
              </button>
              <div className="form_or">
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
              </div>
              <h3>
                Already use Flax? <a href="/"> Login</a>
              </h3>
              <p>
                By continuing, you agree to Flax{" "}
                <a href="/"> Terms and Conditions </a>
                and confirm you have read our <a href="/"> Privacy Notice</a>.
              </p>
            </form>
          </div>
        </div>
        {/* <div className="signup_phone text-center">
          <p>Live Profile Preview</p>
          <div className="signup_phone-container">
            <img src="/phone_bannner.svg" className="img-fluid" alt="" />
            <h3>Name</h3>
            <h4>Designation</h4>
            <h4>Company Name</h4>
            <div className="signup_phone-boxs">
              <div className="signup_phone-box"></div>
              <div className="signup_phone-box"></div>
              <div className="signup_phone-box"></div>
              <div className="signup_phone-box"></div>
              <div className="signup_phone-box"></div>
            </div>
          </div>
        </div> */}
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
