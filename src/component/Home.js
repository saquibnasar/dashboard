import React, { useEffect, useState } from "react";
import SIdebar from "./SIdebar";
import Topbar from "./Topbar";
import TeamCard from "./TeamCard";
import axios from "axios";

export default function Home(props) {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");

  const handleChange = (event) => {
    setToggle(event.target.checked);
  };

  useEffect(() => {
    axios
      .get(
        "http://ec2-3-111-248-112.ap-south-1.compute.amazonaws.com:3000/members/all"
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        if (error.response.status == 401) {
          window.location.href = "/login";
        }
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
