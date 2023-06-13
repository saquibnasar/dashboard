import React from "react";

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <footer className="footer">
        <h3>
          © Copyright {year}{" "}
          <a href="/" target="blank">
            investorsclinic.in
          </a>{" "}
          All Rights Reserved
        </h3>
        <h5>
          <span>Disclaimer :</span>
          <p>
            The information provided herein certified by ICIPL is for verified
            employee informational purposes only.{" "}
          </p>
        </h5>
      </footer>
    </>
  );
}
