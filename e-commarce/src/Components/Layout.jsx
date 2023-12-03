import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import {Toaster} from 'react-hot-toast'


const Layout = ({ children, auther, title, description, keywords }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="auther" content={auther} />
      </Helmet>
      <Header />
      <main
        className=""
        style={{ minHeight: "75vh", margin: "50px 0px" }}
      >
        {children}
        <Toaster/>
      </main>
      <Footer />
    </div>
  );
};
Layout.defaultProps={
  title:"E-Bazar Shoping Center",
  auther:"IrfanShah",
  description:"Online Shoping Center",
  keywords:"ShopingCenter,OnlineShoping,E-bazar,Ebazar"
}
export default Layout;
