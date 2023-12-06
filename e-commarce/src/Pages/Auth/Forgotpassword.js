import React, { useState } from "react";
import Layout from "../../Components/Layout";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Spinner from "../../Components/Spinner";
import {
  api_endpoint,
  endPointForForgotPassword,
} from "../../API_ENDPOINTS/API_endPoints";
import axios from "axios";


const Forgotpassword = () => {
  const [email, setemail] = useState("");
  const [Loading, setLoading] = useState(false);
  const [newPassword, setnewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const HandleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const resp = await axios.post(
        `${api_endpoint}${endPointForForgotPassword}`,
        {
          email,
          newPassword,
          answer
        }
      );
      if (resp && resp.data.success) {
        setLoading(false);
        toast.success(resp.data && resp.data.message);
        navigate("/Signin");
      } else {
        setLoading(false);
      }
      toast.success(resp.data.message);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("something wrong!");
    }
  };

  return (
    <>
      {Loading ? <Spinner /> : ""}
      <Layout title="Forgot Password - e-Bazar">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <form
              className="flex-column col-lg-6 col-12"
              onSubmit={HandleSubmit}
            >
              <div className="row mb-5">
                <h3 className="div-heading">Forgot Password</h3>
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
                <label htmlFor="Password">New Password</label>
                <b className="text-danger">*</b>
                <input
                  type="Password"
                  value={newPassword}
                  className="form-control"
                  id="Password"
                  required
                  onChange={(e) => {
                    setnewPassword(e.target.value);
                  }}
                  placeholder="New Password"
                />
              </div>
              <div className="form-group my-2">
                <label htmlFor="answer">What is your First School Name?</label>
                <b className="text-danger">*</b>
                <input
                  type="text"
                  value={answer}
                  className="form-control"
                  id="answer"
                  required
                  onChange={(e) => {
                    setAnswer(e.target.value);
                  }}
                  placeholder="What is your First School Name?"
                />
              </div>
              <button type="submit" className="btn m-1 btn-primary w-25">
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Forgotpassword;
