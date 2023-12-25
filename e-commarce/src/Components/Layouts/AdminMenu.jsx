import React from "react";
import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="text-center border">
      <h5>Category</h5>
      <div className="list-group p-3">
        <Link to="/dashboard/admin/show-category" className="list-group-item">
          All Categories
        </Link>
        <Link to="/dashboard/admin/create-category" className="list-group-item">
          Create Category
        </Link>
      </div>
      <h5>Products</h5>
      <div className="list-group p-3">
        <Link to="/dashboard/admin/create-product" className="list-group-item">
          Create Product
        </Link>
        <Link to="/dashboard/admin/show-all-product" className="list-group-item">
          All Products
        </Link>
      </div>
      <h5>Users</h5>
      <div className="list-group p-3">
        <Link to="/dashboard/admin/list-users" className="list-group-item">
          Users
        </Link>
      </div>
    </div>
  );
};

export default AdminMenu;
