import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
export default function Signup() {
  const [page, setPage] = useState(1);

  return (
    <>
      <div className='signup'>
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
      </div>
    </>
  );
}
