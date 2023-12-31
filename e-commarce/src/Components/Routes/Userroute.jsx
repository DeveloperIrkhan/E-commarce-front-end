import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { api_endpoint, dashboard } from "../../API_ENDPOINTS/API_endPoints";
import SpinnerWithCouter from "../SpinnerWithCouter";
export default function Userroute() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const resp = await axios.get(`${api_endpoint}${dashboard}`);
      //you can also add globally header in contextapi
      // const resp = await axios.get("http://localhost:4040/auth/dashboard", {
      //     headers: {
      //       Authorization: auth?.token,
      //     },
      //   });

      if (resp.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };

    if (auth?.token) authCheck();
  }, [auth?.token]);
  return ok ? (
    <Outlet />
  ) : (
    <SpinnerWithCouter message="You are not login, please login first" />
  );
}
