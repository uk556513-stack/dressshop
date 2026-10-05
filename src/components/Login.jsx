import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="auth-page">

      <div className="auth-bg-circle circle-a"></div>
      <div className="auth-bg-circle circle-b"></div>

      <div className="container">

        <div className="auth-wrapper" data-aos="zoom-in">

          <div className="auth-content">

            <span className="auth-label">
              WELCOME BACK
            </span>

            <h1>
              Login to
              <br />
              <strong>ÉLÉGANCE</strong>
            </h1>

            <p>
              Access your account and continue
              your fashion journey.
            </p>

            <form>

              <div className="auth-input">

                <i className="bi bi-envelope"></i>

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                />

              </div>

              <div className="auth-input">

                <i className="bi bi-lock"></i>

                <input
                  type="password"
                  placeholder="Password"
                  required
                />

              </div>

              <div className="auth-options">

                <label>
                  <input type="checkbox" />
                  Remember me
                </label>

                <a href="#forgot">
                  Forgot Password?
                </a>

              </div>

              <button
                type="submit"
                className="auth-submit"
              >
                Login
                <i className="bi bi-arrow-right"></i>
              </button>

            </form>

            <div className="auth-divider">
              <span>OR</span>
            </div>

            <p className="auth-bottom">
              Don't have an account?
              <Link to="/signup">
                Create Account
              </Link>
            </p>

          </div>

          <div className="auth-side">

            <div className="auth-side-content">

              <span>ÉLÉGANCE</span>

              <h2>
                Style is
                <br />
                an attitude.
              </h2>

              <p>
                Discover fashion that reflects
                your personality and confidence.
              </p>

              <div className="auth-feature">
                <i className="bi bi-shield-check"></i>
                <span>Secure Account</span>
              </div>

              <div className="auth-feature">
                <i className="bi bi-stars"></i>
                <span>Premium Fashion</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Login;