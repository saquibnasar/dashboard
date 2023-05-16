import React, { useState } from "react";
import SIdebar from "./SIdebar";
import Topbar from "./Topbar";
import TeamCard from "./TeamCard";

export default function Home() {
  const [toggle, setToggle] = useState(false);

  const handleChange = (event) => {
    setToggle(event.target.checked);
  };
  return (
    <>
      <div className="d-flex h-100vh">
        <SIdebar />
        <div className="d-flex flex-direction-column w-80">
          <Topbar handleChange={handleChange} />
          <TeamCard mode={toggle} />
        </div>
      </div>
    </>
  );
}
