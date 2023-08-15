import React from "react";
import { QRCode } from "react-qrcode-logo";

export default function SettingDevices() {
  return (
    <>
      <div className="devices">
        {/* <h1>Activate Flax to Sunny’s profile</h1> */}
        <h1>Scan this qrcode to download flax activation app</h1>
        <h2>
          scan the QR code to download app and launch the Card Activation
          process
          <br className="d-md-none" />
          Use Flax app to Activate NFC cards
        </h2>
        <h3></h3>
        <QRCode
          value="https://flax.ai/"
          logoImage="https://www.flaxapp.co/assets/images/jhjhjh2.png"
          logoWidth="68"
          logoHeight="28"
          logoOpacity={1}
        />

        {/* <img src="/qrcode.png" alt="" className="img-fluid" /> */}
      </div>
    </>
  );
}
