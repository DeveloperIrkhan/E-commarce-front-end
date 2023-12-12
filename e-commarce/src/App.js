import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import PageNotFound from "./Pages/PageNotFound";
import Glasses from "./Pages/Glasses";
import Fitness from "./Pages/Fitness";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import Userroute from "./Components/Routes/Userroute";
import Adminroute from "./Components/Routes/Adminroute";
import Dashboard from "./Pages/User/Dashboard";
import AboutUs from "./Pages/AboutUs";
import Privacy from "./Pages/Privacy";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import TermsCondition from "./Pages/TermsCondition";
import Forgotpassword from "./Pages/Auth/Forgotpassword";
import CreateProduct from "./Pages/Admin/CreateProduct";
import CreateCategory from "./Pages/Admin/CreateCategory";
import UserList from "./Pages/Admin/UserList";
import UserProfile from "./Pages/User/UserProfile";
import UserOrder from "./Pages/User/UserOrder";
import ShowAllCategories from "./Pages/Admin/ShowAllCategories";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* this is protected routes */}
      <Route path="/dashboard" element={<Userroute />}>
        <Route path="user" element={<Dashboard />} />
        <Route path="user/user-profile" element={<UserProfile />} />
        <Route path="user/user-order" element={<UserOrder />} />
      </Route>
      <Route path="/dashboard" element={<Adminroute/>}>
        <Route path="admin" element={<AdminDashboard/>} />
        <Route path="admin/create-product" element={<CreateProduct/>} />
        <Route path="admin/create-category" element={<CreateCategory/>} />
        <Route path="admin/show-category" element={<ShowAllCategories/>} />
        <Route path="admin/list-users" element={<UserList/>} />
      </Route>
      
      <Route path="/Glasses" element={<Glasses />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Fitness" element={<Fitness />} />
      <Route path="/Signin" element={<Login />} />
      <Route path="/Signup" element={<Register />} />
      <Route path="/contact-us" element={<Contact/>} />
      <Route path="/about-us" element={<AboutUs/>} />
      <Route path="/privacy" element={<Privacy/>} />
      <Route path="/Forgot-Password" element={<Forgotpassword/>} />
      <Route path="/Terms-and-conditions" element={<TermsCondition/>} />
      
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
