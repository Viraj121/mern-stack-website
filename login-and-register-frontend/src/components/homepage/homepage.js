import React, { useEffect } from "react";
import "./homepage.css";
import "../login/login";
import { useState } from "react";

const Homepage = ({ updateUser }) => {

  const data = localStorage.getItem("MyUser");
  const data2 = JSON.parse(data);
  // console.log(data2);
  return (
    <div className="homepage">
      <h1>Hello, {data2.name}</h1>
      <br></br>
      <h2>Email: {data2.email}</h2>
      <div className="button" onClick={() => updateUser({})}>
        Logout
      </div>
    </div>
  );
};

export default Homepage;
