import React, { useState } from "react";
import Layout from "../../Components/Layout";
import Spinner from "../../Components/Spinner";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  api_endpoint,
  endpointforRegister,
} from "../../API_ENDPOINTS/API_endPoints";
import axios from "axios";
const Register = () => {
  const [Loading, setLoading] = useState(false);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [address, setaddress] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  const HandleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const resp = await axios.post(`${api_endpoint}${endpointforRegister}`, {
        firstName,
        lastName,
        email,
        password,
        address,
        phoneNumber,
      });
      if (resp && resp.data.success) {
        setLoading(false);
        navigate("/Signin");
        toast.success(resp.data && resp.data.message);
      } else {
        setLoading(false);
        toast.error(resp.data.message);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("something wrong! ");
    }
  };
  // console.log(process.env.REACT_APP_API)
  return (
    <>
      {Loading ? <Spinner /> : ""}
      <Layout title="Register - e-Bazar">
        <div className="container">
          <div className="d-flex justify-content-center align-content-center">
            <form
              className="flex-column col-lg-6 col-12"
              onSubmit={HandleSubmit}
            >
              <div className="row mb-5">
                <h3 className="div-heading">Signup</h3>
              </div>
              <div className="form-group my-2">
                <label htmlFor="firstName">FirstName</label>
                <b className="text-danger">*</b>
                <input
                  type="text"
                  value={firstName}
                  required
                  onChange={(e) => {
                    setfirstName(e.target.value);
                  }}
                  className="form-control"
                  id="firstName"
                  placeholder="Enter firstName"
                />
              </div>
              <div className="form-group my-2">
                <label htmlFor="lastName">LastName</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => {
                    setlastName(e.target.value);
                  }}
                  className="form-control"
                  id="lastName"
                  placeholder="Enter Last Name"
                />
              </div>
              <div className="form-group my-2">
                <label htmlFor="phoneNumber">Phone Number</label>
                <b className="text-danger">*</b>
                <input
                  type="text"
                  value={phoneNumber}
                  className="form-control"
                  id="phoneNumber"
                  required
                  onChange={(e) => {
                    setphoneNumber(e.target.value);
                  }}
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="form-group my-2">
                <label htmlFor="address">Address</label>
                <b className="text-danger">*</b>
                <input
                  type="text"
                  value={address}
                  className="form-control"
                  id="address"
                  required
                  onChange={(e) => {
                    setaddress(e.target.value);
                  }}
                  placeholder="Enter address"
                />
              </div>
              <div className="form-group my-2">
                <label htmlFor="email">Email Address</label>
                <b className="text-danger">*</b>
                <input
                  type="email"
                  value={email}
                  className="form-control"
                  id="email"
                  required
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group my-2">
                <label htmlFor="password">Password</label>
                <b className="text-danger">*</b>
                <input
                  type="password"
                  value={password}
                  className="form-control"
                  id="password"
                  required
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  placeholder="password"
                />
              </div>
              <button type="submit" className="btn btn-primary w-25">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Register;
