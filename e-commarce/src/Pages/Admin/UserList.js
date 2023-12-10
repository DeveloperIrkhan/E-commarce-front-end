import React from "react";
import AdminMenu from "../../Components/Layouts/AdminMenu";
import Layout from "../../Components/Layout";

const UserList = () => {
  return (
    <Layout title="Users  | e-bazar">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div>
              <h3 className="div-heading">User List</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserList;
