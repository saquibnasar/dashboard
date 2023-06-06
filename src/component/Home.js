import React, { useState } from "react";
import SIdebar from "./SIdebar";
import Topbar from "./Topbar";
import TeamCard from "./TeamCard";

export default function Home(props) {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setToggle(event.target.checked);
  };

  return (
    <>
      <div className="d-flex h-100vh">
        <SIdebar navbarToggle={props.navbarToggle} />
        <div className="d-flex flex-direction-column w-100">
          <Topbar
            handleChange={handleChange}
            setSearch={setSearch}
            isNavbar={props.isNavbar}
          />
          <TeamCard mode={toggle} search={search} />
        </div>
      </div>
    </>
  );
}
