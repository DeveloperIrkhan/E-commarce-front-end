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
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Glasses" element={<Glasses />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Fitness" element={<Fitness />} />
      <Route path="/Signin" element={<Login />} />
      <Route path="/Signup" element={<Register/>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
