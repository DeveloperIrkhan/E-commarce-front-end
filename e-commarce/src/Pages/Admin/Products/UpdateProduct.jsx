import React, { useState, useEffect } from "react";
import Layout from "../../../Components/Layout";
import AdminMenu from "../../../Components/Layouts/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import {
  GetSinglePhoto,
  api_endpoint,
  deleteSingleProduct,
  singleProduct,
  updateProduct,
} from "../../../API_ENDPOINTS/API_endPoints";
import Spinner from "../../../Components/Spinner";
import { FetchAllCategories } from "../../../Utiles/api_services";
const { Option } = Select;

const UpdateProduct = () => {
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categoryType, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shippingAddress, setshippingAddress] = useState("");
  const [photo, setPhoto] = useState("");
  const [id, setId] = useState("");

  // //deleting product
  // const handleDelete = async () => {
  //   try {
  //     let answer = window.prompt("Are You Sure want to delete this product ? ");
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Something went wrong");
  //   }
  // };
  //updatefunction
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("shippingAddress", shippingAddress);
      productData.append("quantity", quantity);
      photo && productData.append("photo", photo);
      productData.append("categoryType", categoryType);
      const { data } = axios.put(
        `${api_endpoint}${updateProduct}/${id}`,
        productData
      );
      if (data?.success) {
        setLoading(false);
        toast.error(data?.message);
      } else {
        toast.success("Product Updated Successfully");
        navigate("/dashboard/admin/show-all-product");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("something went wrong");
    }
  };
  const handleDelete = async () => {
    try {
      let answer = window.prompt("are you sure to delete this product?");
      if (!answer) return;
      const { data } = axios.delete(
        `${api_endpoint}${deleteSingleProduct}${id}`
      );
      toast.success("Product Updated Successfully");
      navigate("/dashboard/admin/show-all-product");
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("something went wrong");
    }
  };
  //getsingleProduct
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `${api_endpoint}${singleProduct}${params.slug}`
      );
      setName(data.product.name);
      setId(data.product._id);
      setDescription(data.product.description);
      setPrice(data.product.price);
      setQuantity(data.product.quantity);
      setshippingAddress(data.product.shippingAddress);
      setCategory(data.product.categoryType._id);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("error while getting single product!");
    }
  };
  //getallcategories
  const ShowAllcategories = async () => {
    setLoading(true);
    await FetchAllCategories().then((response) => {
      if (response?.data) {
        setLoading(false);
        setCategories(response?.data.categories);
      }
    });
  };
  useEffect(() => {
    ShowAllcategories();
    getSingleProduct();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Layout title="Update products | e-bazar Dashbaord">
        {Loading ? <Spinner /> : ""}
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <AdminMenu />
            </div>
            <div className="col-md-9">
              <div>
                <h3 className="div-heading">Update products</h3>
              </div>
              <div className="row w-100">
                <div className="p-2">
                  <label className="form-label">Update Category</label>
                  <Select
                    bordered={false}
                    placeholder="Select a cetegory"
                    size="Large"
                    showSearch
                    className="form-select mb-3"
                    onChange={(value) => {
                      setCategory(value);
                    }}
                    value={categoryType}
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
                  {/* <label className="form-label">Upload Photo</label> */}
                  <div className="d-flex justify-content-center align-items-center">
                    <label className="mx-3 btn btn-primary w-50">
                      {photo ? photo.name : "Upload Photo"}
                      <input
                        type="file"
                        name="photo"
                        accept="image/*"
                        onChange={(e) => setPhoto(e.target.files[0])}
                        hidden
                      />
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  {photo ? (
                    <div className="text-center">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt="product Photo"
                        height={"200px"}
                        className="img img-responsive"
                      />
                    </div>
                  ) : (
                    <div className="text-center border rounded w-auto">
                      <img
                        src={`${api_endpoint}${GetSinglePhoto}${id}`}
                        alt="product Photo"
                        style={{
                          height: "200px",
                          width: "auto",
                          padding: "1rem",
                        }}
                        className="img img-fluid img-responsive"
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
                    value={shippingAddress ? "Yes" : "No"}
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
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    value={description}
                  />
                  <input
                    type="number"
                    placeholder="Enter Product's price"
                    className="form-control my-2"
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    value={price}
                  />
                  <input
                    type="number"
                    placeholder="Enter Product's quantity"
                    className="form-control my-2"
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                    value={quantity}
                  />
                </div>
                <div className="row">
                  <button
                    className="m-3 btn btn-primary w-lg-25 w-100 text-capitalize"
                    onClick={handleUpdate}
                  >
                    <i className="fa fa-save"></i> Update product
                  </button>
                  <button
                    className="m-3 btn btn-danger w-lg-25 w-100 text-capitalize"
                    onClick={handleDelete}
                  >
                    <i className="fa fa-trash"></i> Delete product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default UpdateProduct;
