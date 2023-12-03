import React, { useState } from "react";
import Layout from "../../Components/Layout";
import Spinner from "../../Components/Spinner";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import {
  api_endpoint,
  endpointforLogin,
} from "../../API_ENDPOINTS/API_endPoints";
import axios from "axios";
const Login = () => {
  const [Username, setUsername] = useState("");
  const [Loading, setLoading] = useState(false);
  const [Password, setPassword] = useState("");
  const [auth, setauth] = useAuth();
  const navigate = useNavigate();
  const HandleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const resp = await axios.post(`${api_endpoint}${endpointforLogin}`, {
        Username,
        Password,
      });
      if (resp && resp.data.success) {
        setLoading(false);
        setauth({
          ...auth,
          user: resp.data.user,
          token: resp.data.token,
        });
        localStorage.setItem('auth',JSON.stringify(resp.data))
        toast.success(resp.data && resp.data.message);
        navigate("/");
      } else {
        setLoading(false);
      }
      toast.error(resp.data.message);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("something wrong!");
    }
  };
  return (
    <>
      {Loading ? <Spinner /> : ""}
      <Layout title="Register - e-Bazar">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <form
              className="flex-column col-lg-6 col-12"
              onSubmit={HandleSubmit}
            >
              <div className="row">
                <h3>Login</h3>
              </div>
              <div className="form-group my-2">
                <label htmlFor="email">Email Address</label>
                <b className="text-danger">*</b>
                <input
                  type="email"
                  value={Username}
                  className="form-control"
                  id="email"
                  required
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group my-2">
                <label htmlFor="Password">Password</label>
                <b className="text-danger">*</b>
                <input
                  type="Password"
                  value={Password}
                  className="form-control"
                  id="Password"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
