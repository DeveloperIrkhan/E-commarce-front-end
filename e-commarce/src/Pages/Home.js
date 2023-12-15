import React from "react";
import Layout from "../Components/Layout";
import { useAuth } from "../context/auth";
const Home = () => {
  const [auth] = useAuth();
  return (
    <Layout
      auther={"IrfanShah"}
      title={"E-Bazar Shoping Center"}
      description={"E-Bazar for online shoping"}
      keywords={"Online, Online Shoping"}
    >
      <div className="container">I'm Home</div>
      <pre>{JSON.stringify(auth, null, 4)} </pre>
    </Layout>
  );
};

export default Home;
