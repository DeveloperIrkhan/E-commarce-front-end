import React from "react";
import { Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="text-center">
      <div className="list-group p-3">
        <Link to="/dashboard/user/user-profile" className="list-group-item">
          Profile
        </Link>
        <Link to="/dashboard/user/user-order" className="list-group-item">
          Orders
        </Link>
       
      </div>
    </div>
  );
};

export default UserMenu;
