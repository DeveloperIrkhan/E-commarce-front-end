import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import AdminMenu from "../../Components/Layouts/AdminMenu";
import { FetchAllCategories } from "../../Utiles/api_services";
import { Select } from "antd";
import { toast } from "react-hot-toast";
import axios from "axios";
import Spinner from "../../Components/Spinner";
import { api_endpoint, createProduct } from "../../API_ENDPOINTS/API_endPoints";

const CreateProduct = () => {
  const { Option } = Select;
  const [categories, setcategories] = useState([]);
  const [categoryType, setcategory] = useState("");
  const [name, setName] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [quantity, setquantity] = useState("");
  const [shippingAddress, setshippingAddress] = useState("");
  const [photo, setphoto] = useState("");
  const [Loading, setLoading] = useState(false);
  //getting all categories
  const getAllCategories = async () => {
    setLoading(true);
    await FetchAllCategories().then((response) => {
      if (response?.data) {
        setLoading(false);
        setcategories(response?.data.categories);
      }
    });
  };
  const handleCreateProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const ProductData = new FormData();
      ProductData.append("name", name);
      ProductData.append("categoryType", categoryType);
      ProductData.append("description", description);
      ProductData.append("price", price);
      ProductData.append("quantity", quantity);
      ProductData.append("shippingAddress", shippingAddress);
      ProductData.append("photo", photo);
      console.log(categories);
      console.log(categoryType);
      const { data } = axios.post(
        `${api_endpoint}${createProduct}`,
        ProductData
      );
      if (data?.success) {
        setLoading(false);
        toast.error(data?.message);
      } else {
        toast.success("product added successfully");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("something went wrong!");
    }
  };
  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <Layout title="Create products | e-bazar">
      {Loading ? <Spinner /> : ""}
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div>
              <h3 className="div-heading">Create products</h3>
            </div>
            <form onSubmit={handleCreateProduct}>
              <div className="row w-100">
                <div className="p-2">
                  <label className="form-label">Select Category</label>
                  <Select
                    bordered={false}
                    placeholder="Select a cetegory"
                    size="Large"
                    showSearch
                    className="form-select mb-3"
                    onChange={(value) => {
                      setcategory(value);
                    }}
                  >
                    {categories?.map((c) => {
                      return (
                        <Option key={c._id} value={c._id}>
                          {c.name}
                        </Option>
                      );
                    })}
                  </Select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Upload Photo</label>
                  <label className="mx-3 btn btn-primary">
                    {photo ? photo.name : "Upload Photo"}
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={(e) => setphoto(e.target.files[0])}
                      hidden
                    />
                  </label>
                </div>
                <div className="mb-3">
                  {photo && (
                    <div className="text-center">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt="product Photo"
                        height={"200px"}
                        className="img img-responsive"
                      />
                    </div>
                  )}
                </div>
                <div className="mb-3 py-2">
                  <Select
                    bordered={false}
                    placeholder="Select Shipping"
                    size="Large"
                    showSearch
                    className="form-select mb-3"
                    onChange={(value) => setshippingAddress(value)}
                  >
                    <Option value="1">Yes</Option>
                    <Option value="0">No</Option>
                  </Select>
                  <input
                    type="text"
                    placeholder="Enter Product's Name"
                    className="form-control my-2"
                    onChange={(e) => setName(e.target.value)}
                    required
                    value={name}
                  />
                  <textarea
                    type="text"
                    placeholder="Enter Product's description"
                    className="form-control my-2"
                    onChange={(e) => setdescription(e.target.value)}
                    required
                    value={description}
                  />
                  <input
                    type="number"
                    placeholder="Enter Product's price"
                    className="form-control my-2"
                    onChange={(e) => setprice(e.target.value)}
                    required
                    value={price}
                  />
                  <input
                    type="number"
                    placeholder="Enter Product's quantity"
                    className="form-control my-2"
                    onChange={(e) => setquantity(e.target.value)}
                    required
                    value={quantity}
                  />
                </div>
                <div className="row">
                  <button className="mx-3 btn btn-primary w-25" type="submit">
                    <i className="fa fa-save"></i> CREATE PRODUCT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
