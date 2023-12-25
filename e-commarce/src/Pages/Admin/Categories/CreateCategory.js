import React, { useState } from "react";
import Layout from "../../../Components/Layout";
import Spinner from "../../../Components/Spinner";
import { toast } from "react-hot-toast";
import AdminMenu from "../../../Components/Layouts/AdminMenu";
import {
  api_endpoint,
  createCategory,
} from "../../../API_ENDPOINTS/API_endPoints";
import axios from "axios";
const CreateCategory = () => {
  const [Loading, setLoading] = useState(false);
  const [name, setname] = useState("");
  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const resp = await axios.post(`${api_endpoint}${createCategory}`, {
        name,
      });
      if (resp && resp.data.success) {
        toast.success(resp.data.message);
        setLoading(false);
      } else {
        toast.error(resp.data.message);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("something wrong! ");
    }
  };
  return (
    <Layout title="Create category | e-bazar">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          {Loading ? (
            <Spinner />
          ) : (
            <div className="col-md-9">
              <div className="row my-md-0 my-3">
                <h3 className="div-heading">Create Category</h3>
              </div>
              <form className="col-md-6 col-12 p-md-5 m-md-4 p-3 shadow" onSubmit={HandleSubmit}>
                <div classname="d-flex justify-content-center align-items-center g-2">
                  <div className="col-12 form-group">
                    <label htmlFor="category" className="py-2">
                      Enter Category Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="category"
                      required
                      onChange={(e) => {
                        setname(e.target.value);
                      }}
                      placeholder="Enter Category Name"
                    />
                    <div className="row m-0 p-0 my-3">
                      <button type="submit" className="btn btn-primary w-10">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
