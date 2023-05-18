import React from "react";

export default function Admin() {
  return (
    <>
      <div className="admin">
        <div className="admin_detail">
          <h1>Admin Details</h1>
          <div className="">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="email id"
            />
          </div>
          {/* <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Forget Password</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Password"/>
   </div> */}
        </div>
        <div className="admin_authentication">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>2-factor authentication</h2>
            <div className="form-check form-switch">
              {/* <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/> */}
              <div className="tg-list-item">
                <input className="tgl tgl-flat" id="cb4" type="checkbox" />
                <label className="tgl-btn" htmlFor="cb4"></label>
              </div>
            </div>
          </div>
          <p>
            We’ll ask you for a login code in addition to your password when you
            log in on a device we don’t recognise.
          </p>

          <div className="">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              enter number
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="mobile number"
            />
          </div>

          <div className="">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter OTP"
            />
          </div>
          <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-primary">
              Update
            </button>
            <button type="button" className="btn btn-primary">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
