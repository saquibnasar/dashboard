import React, { useEffect, useState } from "react";
import SIdebar from "./SIdebar";
import Topbar from "./Topbar";
import TeamCard from "./TeamCard";
import axios from "axios";

export default function Home(props) {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState();

  const handleChange = (event) => {
    setToggle(event.target.checked);
  };

  useEffect(() => {
    axios
      .get("http://192.168.1.8:3005/members/all")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <>
      {data ? (
        <div className="d-flex h-100vh">
          <SIdebar navbarToggle={props.navbarToggle} />
          <div className="d-flex flex-direction-column w-100">
            <Topbar
              handleChange={handleChange}
              setSearch={setSearch}
              isNavbar={props.isNavbar}
            />
            <TeamCard mode={toggle} search={search} data={data} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
