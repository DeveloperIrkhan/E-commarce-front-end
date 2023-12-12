import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import Spinner from "../../Components/Spinner";
import { toast } from "react-hot-toast";
import axios from "axios";
import AdminMenu from "../../Components/Layouts/AdminMenu";
import {
  api_endpoint,
  createCategory,
  getAllCategories,
} from "../../API_ENDPOINTS/API_endPoints";
import { NavLink } from "react-router-dom";
import Card from "../../Components/Card";
import TableView from "../../Components/TableView";
import CategoryInput from "../../Components/Layouts/Forms/CategoryInput";
const ShowAllCategories = () => {
  const [ViewType, setViewType] = useState("table");
  const [name, setName] = useState("");
  const [Loading, setLoading] = useState(false);
  const [categories, setcategories] = useState([]);
  const showAll = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`${api_endpoint}${getAllCategories}`);
      if (result.data) {
        setLoading(false);
        setcategories(result.data.categories);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    showAll();
  }, []);
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(`${api_endpoint}${createCategory}`, {
        name,
      });
      if (data?.success) {
        toast.success(`${name} is created successfully!`);
        setLoading(false);
        showAll();
      } else {
        toast.error(data.message);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("something wrong! ");
    }
  };

  return (
    <Layout title="Show all category | e-bazar">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          {Loading ? (
            <Spinner />
          ) : (
            <div className="col-md-9">
              <div>
                <CategoryInput
                  handleSubmitfun={handleSubmit}
                  value={name}
                  placeholder={"Please Enter New category"}
                  setValue={setName}
                  InputButtonText={"Create New Category"}
                />
              </div>
              <div className="row">
                <h3 className="div-heading">All Categories</h3>
              </div>
              <div>
                <div className="my-4 d-flex justify-content-end align-item-center">
                  <button
                    onClick={() => {
                      setViewType("table");
                    }}
                    className="fontaweome-icons border-0 mx-2"
                  >
                    <i className="fa-solid fa-list"></i>
                  </button>
                  <button
                    onClick={() => {
                      setViewType("card");
                    }}
                    className="fontaweome-icons border-0 mx-2"
                  >
                    <i className="fa-solid fa-chess-board"></i>
                  </button>
                </div>
              </div>
              <div>
                {ViewType === "table" ? (
                  <TableView categories={categories} />
                ) : (
                  <div>
                    <Card categories={categories} />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        
      </div>
    </Layout>
  );
};

export default ShowAllCategories;
