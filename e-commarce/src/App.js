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
import Privateroute from "./Components/Routes/Privateroute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AboutUs from "./Pages/AboutUs";
import Privacy from "./Pages/Privacy";
import TermsCondition from "./Pages/TermsCondition";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Glasses" element={<Glasses />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Fitness" element={<Fitness />} />
      <Route path="/Signin" element={<Login />} />
      <Route path="/Signup" element={<Register />} />
      <Route path="/contact-us" element={<Contact/>} />
      <Route path="/about-us" element={<AboutUs/>} />
      <Route path="/privacy" element={<Privacy/>} />
      <Route path="/Terms-and-conditions" element={<TermsCondition/>} />
      {/* this is protected routes */}
      <Route path="/dashboard" element={<Privateroute />}>
        <Route path="" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
