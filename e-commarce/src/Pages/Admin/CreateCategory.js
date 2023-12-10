import React from "react";
import Layout from "../../Components/Layout";
import AdminMenu from "../../Components/Layouts/AdminMenu";

const CreateCategory = () => {
  return (
    <Layout title="Create category | e-bazar">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div>
              <h3 className="div-heading">Create Category</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
