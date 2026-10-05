import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className="auth-page">

      <div className="auth-bg-circle circle-a"></div>
      <div className="auth-bg-circle circle-b"></div>

      <div className="container">

        <div
          className="auth-wrapper signup-wrapper"
          data-aos="zoom-in"
        >

          <div className="auth-side signup-side">

            <div className="auth-side-content">

              <span>ÉLÉGANCE</span>

              <h2>
                Create your
                <br />
                own style.
              </h2>

              <p>
                Join our fashion community and
                explore exclusive collections.
              </p>

              <div className="auth-feature">

                <i className="bi bi-gem"></i>

                <span>
                  Exclusive Collections
                </span>

              </div>

              <div className="auth-feature">

                <i className="bi bi-truck"></i>

                <span>
                  Fast Delivery
                </span>

              </div>

            </div>

          </div>

          <div className="auth-content">

            <span className="auth-label">
              CREATE ACCOUNT
            </span>

            <h1>
              Join
              <br />
              <strong>ÉLÉGANCE</strong>
            </h1>

            <p>
              Create your account and discover
              your signature style.
            </p>

            <form>

              <div className="auth-input">

                <i className="bi bi-person"></i>

                <input
                  type="text"
                  placeholder="Full Name"
                  required
                />

              </div>

              <div className="auth-input">

                <i className="bi bi-envelope"></i>

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                />

              </div>

              <div className="auth-input">

                <i className="bi bi-phone"></i>

                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                />

              </div>

              <div className="auth-input">

                <i className="bi bi-lock"></i>

                <input
                  type="password"
                  placeholder="Create Password"
                  required
                />

              </div>

              <div className="auth-input">

                <i className="bi bi-shield-lock"></i>

                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                />

              </div>

              <label className="terms-check">

                <input
                  type="checkbox"
                  required
                />

                <span>
                  I agree to the Terms & Conditions
                </span>

              </label>

              <button
                type="submit"
                className="auth-submit"
              >
                Create Account
                <i className="bi bi-arrow-right"></i>
              </button>

            </form>

            <p className="auth-bottom">

              Already have an account?

              <Link to="/login">
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Signup;