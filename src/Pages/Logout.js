import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Logout = () => {
  const Navigation = useNavigate();
  return (
    <>
      <button className="Logout" onClick={() => Navigation("/login")}>
        Login page
      </button>
    </>
  );
};

export default Logout;
