import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import {
  admin_dashboard,
  api_endpoint,
} from "../../API_ENDPOINTS/API_endPoints";
import SpinnerWithCouter from "../SpinnerWithCouter";
export default function Adminroute() {
  const [ok, setOk] = useState(false);
  const [auth, setauth] = useAuth();
  useEffect(() => {
    const authCheck = async () => {
      const resp = await axios.get(`${api_endpoint}${admin_dashboard}`);
      if (resp.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);
  console.log(ok);
  return ok ? <Outlet /> : <SpinnerWithCouter path="/" />;
}
