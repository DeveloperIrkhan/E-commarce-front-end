import React, { useEffect, useState } from "react";
import Layout from "../../../Components/Layout";
import AdminMenu from "../../../Components/Layouts/AdminMenu";
import Spinner from "../../../Components/Spinner";
import {
  GetSinglePhoto,
  api_endpoint,
  getAllProducts,
} from "../../../API_ENDPOINTS/API_endPoints";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [Loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [TotalProducts, setTotalProducts] = useState("");

  const GetAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${api_endpoint}${getAllProducts}`);
      if (data) {
        setLoading(false);
        setProducts(data.products);
        toast.success("All Products List");
        setTotalProducts(data.totalproducts);
      } else {
        setLoading(false);
        toast.success("can't fetch product list");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("something went wrong!");
    }
  };
  useEffect(() => {
    GetAllProducts();
  }, []);
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
              <div className="row">
                <h3 className="div-heading">All Products</h3>
              </div>
              <div className="row">
                <span>Total Product Found: {TotalProducts}</span>
                {products?.map((product) => {
                  return (
                    <div key={product._id} className="col-md-4 g-2">
                      <Link
                        className="product-Link"
                        to={`/dashboard/admin/update-product/${product.slug}`}
                      >
                        <div className="card d-flex justify-content-center align-items-center">
                          <img
                            className="card-img card-img-top p-5"
                            src={`${api_endpoint}${GetSinglePhoto}${product._id}`}
                            alt={product.name}
                          />
                          <div className="card-body">
                            <h5 className="card-text">Name: {product.name}</h5>
                            <h5 className="card-text">
                              Price: {product.price}
                            </h5>
                            <p className="card-text">
                              Description: {product.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AllProducts;
