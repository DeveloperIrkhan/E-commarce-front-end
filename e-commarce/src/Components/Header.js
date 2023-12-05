import React, { useState } from "react";
import { Link, NavLink,useNavigate  } from "react-router-dom";
import { useAuth } from "../context/auth";
import Spinner from "./Spinner";
import toast from 'react-hot-toast'
const Header = () => {
  // window.addEventListener("scroll",()=>{
  //   var header = document.querySelector("navbar");
  //   header.classList.toggle("sticky", window.scrollY > 0)
  //   console.log(header)
  // })
  const navigate = useNavigate();
  const [auth, setauth] = useAuth();
  const [loading, setloading] = useState(false);
  const handleLogout = () => {
    setloading(true);
    setauth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    navigate("/");
    setTimeout(() => {
      setloading(false);
    }, 1000);
    toast.success('user logout successfully')
  };
  return (
    <>
      {loading ? <Spinner /> : ""}
      <div>
        <nav className="navbar bg-body-tertiary navbar-expand-lg">
          <div className="container-fluid">
            <NavLink to="/" className="navbar-brand d-flex flex-row">
              <img className="img-fluid logo" src="./Imgs/E-shop.png" />
              <span className="logo-text d-flex align-items-center p-3">
                E-Bazar
              </span>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  E-Bazar Menu
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className="nav-link mx-lg-2"
                      aria-current="page"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Fitness" className="nav-link mx-lg-2">
                      Fitness
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Glasses" className="nav-link mx-lg-2">
                      Glasses
                    </NavLink>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle mx-lg-3"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Wallets
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item">Gents Wallets</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Ladies Wallets</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle mx-lg-3"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Electronics
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item">Tourches</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Hair Trimmers</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Solar Lights</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">More</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle mx-lg-3"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Profile
                    </a>
                    <ul className="dropdown-menu">
                      {!auth.user ? (
                        <>
                          <li>
                            <Link to="/Signin" className="dropdown-item">
                              Signin
                            </Link>
                          </li>
                          <li>
                            <Link to="/Signup" className="dropdown-item">
                              Signup
                            </Link>
                          </li>
                        </>
                      ) : (
                       <>
                        <li>
                          <Link to="/dashboard"
                            className="dropdown-item"
                          >
                            Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={handleLogout}
                            className="dropdown-item"
                          >
                            Signout
                          </Link>
                        </li>
                       </>
                      )}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
