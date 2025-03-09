import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link from react-router-dom

function Header() {
  return (
    <div>
      <div className="container-xxl position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
          <Link to="/" className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-utensils me-3" />
              Assignment
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 pe-4">
              <Link to="/" className="nav-item nav-link active">
                Home
              </Link>
              <Link to="/about-us" className="nav-item nav-link">
                About
              </Link>
              <Link to="/food-menu" className="nav-item nav-link">
                Food Menu
              </Link>

              
              <Link to="/contact-us" className="nav-item nav-link">
                Contact
              </Link>
            </div>
            <Link to="/order" className="btn btn-primary py-2 px-4">
              Book Your Order
            </Link>
          </div>
        </nav>
        
      </div>
    </div>
  );
}

export default Header;
