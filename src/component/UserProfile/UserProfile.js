import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SocialLink from "../SocialLink";
import Footer from "../Footer";

export default function UserProfile() {
  const { userProfileId } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      `https://7drkndiu7g.execute-api.ap-south-1.amazonaws.com/v1/previewprofile/${userProfileId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [1]);

  return (
    <>
      {data ? (
        <section className="userProile hero main-container">
          <div className="container">
            {/* <div className="p-relative">
              <div className="logo-only text-center d-flex justify-content-center">
                <img className="img-fluid" src="/safari.png" alt="" />
              </div>
            </div> */}
            <button className="btn-dot">
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path
                  fill="black"
                  stroke="black"
                  d="M12.6661 7.33348C12.2979 7.33348 11.9994 7.63195 11.9994 8.00014C11.9994 8.36833 12.2979 8.66681 12.6661 8.66681C13.0343 8.66681 13.3328 8.36833 13.3328 8.00014C13.3328 7.63195 13.0343 7.33348 12.6661 7.33348Z"
                ></path>
                <path
                  fill="black"
                  stroke="black"
                  d="M8.00057 7.33348C7.63238 7.33348 7.3339 7.63195 7.3339 8.00014C7.3339 8.36833 7.63238 8.66681 8.00057 8.66681C8.36876 8.66681 8.66724 8.36833 8.66724 8.00014C8.66724 7.63195 8.36876 7.33348 8.00057 7.33348Z"
                ></path>
                <path
                  fill="black"
                  stroke="black"
                  d="M3.33333 7.33348C2.96514 7.33348 2.66667 7.63195 2.66667 8.00014C2.66667 8.36833 2.96514 8.66681 3.33333 8.66681C3.70152 8.66681 4 8.36833 4 8.00014C4 7.63195 3.70152 7.33348 3.33333 7.33348Z"
                ></path>
              </svg>
            </button>
            <div className="mt-3 header_content text-center">
              <img className="img-fluid" src="/qrcode.png" alt="" />

              <h1>Harsh Vardhan</h1>

              <h2>Designation</h2>
              <h3>Employee ID - 007</h3>
              <button className="btn">Save My Contact </button>
            </div>
            <SocialLink />
            <Footer />
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}
