import React from "react";
import { Link, NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="text-center">
      <div className="list-group p3">
        <Link to="/dashboard/admin/show-category" className="list-group-item">
          All Categories
        </Link>
        <Link to="/dashboard/admin/create-category" className="list-group-item">
          Create Category
        </Link>
        <Link to="/dashboard/admin/create-product" className="list-group-item">
          Create Product
        </Link>
        <Link to="/dashboard/admin/list-users" className="list-group-item">
          Users
        </Link>
      </div>
    </div>
  );
};

export default AdminMenu;
