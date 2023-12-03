import React from "react";
import { NavLink } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3">
          <span className="text-danger">
            <b>Opps! {" "}</b>
          </span>
          Page not found.
        </p>
        <p className="lead">The page you’re looking for doesn’t exist.</p>
        <NavLink to="/" className="btn btn-primary">
          Go Home
        </NavLink>
      </div>
    </div>
  );
};

export default PageNotFound;
