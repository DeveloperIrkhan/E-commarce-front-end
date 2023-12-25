import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SpinnerWithCouter = ({ message, path = "Signin" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [timer, settimer] = useState(2);
  useEffect(() => {
    const interval = setInterval(() => {
      settimer((prevValue) => --prevValue);
    }, 1000);
    timer === 0 && navigate(`${path}`, { state: location.pathname });
    // after timer we have to clean interval var
    return () => clearInterval(interval);
  }, [timer, navigate, location, path]);
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <img src="/Imgs/spiner.svg" alt="spinner" />
      <span className="text-danger">{message ? message : "Loading"}</span>
      <h2 className="text-center">Redirecting You in {timer} seconds</h2>
    </div>
  );
};

export default SpinnerWithCouter;
