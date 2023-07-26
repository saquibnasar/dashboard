import React from "react";
import Pdfmaker from "./Plugin/Pdfmaker";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

export default function FlaxCode() {
  return (
    <>
      <div className="links">
        <h2>User QR code</h2>
        <h3>Flax Event Badge</h3>
        <p>
          Download a printable QR code event badge for any <br />
          upcoming events. The QR code will automatically <br />
          share the member’s Flax digital business card with others.
        </p>
        {/* <PDFViewer>
          <Pdfmaker />
        </PDFViewer> */}
        <PDFDownloadLink document={<Pdfmaker />} filename="FORM">
          <button className="btn_add">Download</button>
        </PDFDownloadLink>
      </div>
      <div className="flaxCode-bottom text-center">
        <h3>User QR Code</h3>
        <h2>Sunny Katyal</h2>
        <img className="img-fluid" src="/qrcode.png" alt="" />

        <button className="btn_add">Download QR Code</button>
      </div>
    </>
  );
}
