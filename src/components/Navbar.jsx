import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark elegance-navbar sticky-top">
      <div className="container">

        {/* Brand */}
        <Link className="navbar-brand elegance-brand" to="/">
          <span className="brand-icon">
            <i className="bi bi-gem"></i>
          </span>

          <span className="brand-content">
            <strong>ÉLÉGANCE</strong>
            <small>FASHION HOUSE</small>
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler elegance-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >

          {/* Navigation */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 elegance-nav">

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                end
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/shop"
              >
                Shop
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>

          </ul>

          {/* Search */}
          <div className="navbar-search ms-lg-3 mt-3 mt-lg-0">

            <div className="input-group">

              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>

              <input
                type="search"
                className="form-control"
                placeholder="Search fashion..."
              />

            </div>

          </div>

          {/* Login */}
          <Link
            to="/login"
            className="btn elegance-login-btn ms-lg-3 mt-3 mt-lg-0"
          >
            <i className="bi bi-person me-1"></i>
            Login
          </Link>

          {/* Sign Up */}
          <Link
            to="/signup"
            className="btn elegance-signup-btn ms-lg-2 mt-2 mt-lg-0"
          >
            <i className="bi bi-person-plus-fill me-1"></i>
            Sign Up
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;