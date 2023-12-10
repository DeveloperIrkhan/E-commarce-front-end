import React from "react";
import Layout from "../../Components/Layout";
import UserMenu from "../../Components/Layouts/UserMenu";

const Dashboard = () => {
  return (
    <Layout title="User - Dashboard">
      <div className="container">
        <div className="row">
          <h2 className="div-heading">User Dashboard</h2>
        </div>

        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
