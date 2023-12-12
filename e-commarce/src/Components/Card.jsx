import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ categories }) => {
  return (
    <div className="row  d-flex justify-content-center">
      {categories.map((catname, index) => {
        return (
            <div
              key={index}
              className="card col-md-4 col-12 g-3 mx-2 shadow"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <div className="row card-title mx-1">Category Name :</div>
                <h5 className="card-title mx-auto">{catname.name}</h5>
                <div className="py-4 d-flex justify-content-around ">
                  <NavLink to={`${catname.slug}`}>
                    <i className="text-primary mx-1 fa-solid fa-eye"></i>
                  </NavLink>
                  <NavLink to={`${catname.slug}`}>
                    <i className="text-danger mx-1 fa-solid fa-trash"></i>
                  </NavLink>
                </div>
              </div>
            </div>
        );
      })}
    </div>
  );
};

export default Card;
