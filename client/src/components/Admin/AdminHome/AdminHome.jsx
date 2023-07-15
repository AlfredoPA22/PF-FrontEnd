import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import Dasboard from "./Dasboard.jsx";
import LeftSide from "./LeftSide.jsx";

const AdminHome = () => {
  return (
    <div
      className="font-lamia flex"
    >
      <NavBar />
      <Dasboard />
      <LeftSide/>
    </div>
  );
};

export default AdminHome;
