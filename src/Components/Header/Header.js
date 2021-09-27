import React from "react";
import "./header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div>
      <div className="bg-head">
        <div className="top-head  container">
          <div className="contuct">
            <span className="me-2">
              <i className="fas fa-phone-volume"></i>
            </span>
            <span>+880163-4900664</span>
          </div>
          <div className="mail">
            <span className="me-2">
              <i className="fas fa-paper-plane"></i>
            </span>
            <span>FreshShop@gmail.com</span>
          </div>
          <div className="policy">
            <span>
              3-5 business days Deliverys and{" "}
              <span className="free">Free Returns.</span>
            </span>
          </div>
        </div>
      </div>
      <div className="navs">
        <nav className="navbar navbar-expand-lg navbar-light bg-nav container">
          <div className="container-fluid">
            <a className="navbar-brand" href="/header">
              <img className="logo" src={logo} alt="" />
              <h4 className="d-inline ms-3">Fresh Store</h4>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/components"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/header">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="header">
                    Contuct
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="header">
                    Order
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
