import React from "react";
import SIdebar from "./SIdebar";
import Topbar from "./Topbar";
import TeamCard from "./TeamCard";

export default function Home() {
  return (
    <>
      <div className="d-flex">
        <SIdebar />
        <div className="d-flex flex-direction-column w-78">
          <Topbar />
          <TeamCard />
        </div>
      </div>
    </>
  );
}
