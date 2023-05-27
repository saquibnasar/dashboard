import React, { useState } from "react";
import SIdebar from "./SIdebar";
import Topbar from "./Topbar";
import TeamCard from "./TeamCard";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");
  const [isNavbar, setIsNavbar] = useState(true);
  const navbarToggle = () => {
    setIsNavbar(!isNavbar);
  };

  const handleChange = (event) => {
    setToggle(event.target.checked);
  };

  return (
    <>
      <div className="d-flex h-100vh bg-white">
        <SIdebar navbarToggle={navbarToggle} />
        <div className="d-flex flex-direction-column w-100">
          <Topbar
            handleChange={handleChange}
            setSearch={setSearch}
            isNavbar={isNavbar}
          />
          <TeamCard mode={toggle} search={search} />
        </div>
      </div>
    </>
  );
}
