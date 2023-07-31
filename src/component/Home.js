import React, { useEffect, useState } from "react";
import SIdebar from "./SIdebar";
import Topbar from "./Topbar";
import TeamCard from "./TeamCard";
import axios from "axios";

export default function Home(props) {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setToggle(event.target.checked);
  };

  useEffect(() => {

    
    axios
      .get("http://localhost:3005/members/all")
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        alert(error.response.data.message);
      });
  }, []);
  return (
    <>
      <div className='d-flex h-100vh'>
        <SIdebar navbarToggle={props.navbarToggle} />
        <div className='d-flex flex-direction-column w-100'>
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
