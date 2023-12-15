import React from "react";
import Layout from "../../Components/Layout";
import AdminMenu from "../../Components/Layouts/AdminMenu";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title="Admin - Dashboard">
      <div className="container p-4">
        <div className="row">
          <h3 className="div-heading">Admin Panel</h3>
        </div>
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div>
              <h3>User Information</h3>
            </div>
            <div className="card">
              <h5>Name: {auth?.user?.name}</h5>
              <h5>Email: {auth?.user?.username}</h5>
              <h5>Contact: {auth?.user?.phone}</h5>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
