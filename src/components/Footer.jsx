import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="fashion-footer"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="container">

        <div className="footer-row">

          {/* Brand */}
          <div className="footer-about">

            <h3>
              <span className="footer-gem">
                <i className="bi bi-gem"></i>
              </span>
              ÉLÉGANCE
            </h3>

            <span className="footer-tagline">
              FASHION HOUSE
            </span>

            <p>
              Discover premium fashion designed for
              confidence, comfort and modern lifestyles.
              Explore timeless men's and women's
              collections crafted for every occasion.
            </p>

            <div className="footer-highlight">
              <i className="bi bi-stars"></i>
              <span>Premium Fashion Experience</span>
            </div>

          </div>


          {/* Quick Links */}
          <div className="footer-column">

            <h5>Quick Links</h5>

            <Link to="/">
              <i className="bi bi-chevron-right"></i>
              Home
            </Link>

            <Link to="/shop">
              <i className="bi bi-chevron-right"></i>
              Shop
            </Link>

            <Link to="/about">
              <i className="bi bi-chevron-right"></i>
              About
            </Link>

            <Link to="/contact">
              <i className="bi bi-chevron-right"></i>
              Contact
            </Link>

          </div>


          {/* Collections */}
          <div className="footer-column">

            <h5>Collections</h5>

            <Link to="/shop">
              <i className="bi bi-chevron-right"></i>
              Men's Fashion
            </Link>

            <Link to="/shop">
              <i className="bi bi-chevron-right"></i>
              Women's Fashion
            </Link>

            <Link to="/shop">
              <i className="bi bi-chevron-right"></i>
              New Arrivals
            </Link>

            <Link to="/shop">
              <i className="bi bi-chevron-right"></i>
              Premium Collection
            </Link>

          </div>


          {/* Contact */}
          <div className="footer-column">

            <h5>Contact Us</h5>

            <p>
              <i className="bi bi-telephone"></i>
              <a href="tel:+919342568375">
                +91 93425 68375
              </a>
            </p>

            <p>
              <i className="bi bi-envelope"></i>
              <a href="mailto:uk556513@gmail.com">
                uk556513@gmail.com
              </a>
            </p>

            <p>
              <i className="bi bi-geo-alt"></i>
              <span>
                Puliyampatti, Pochampalli, Krishnagiri
              </span>
            </p>

          </div>

        </div>
        <hr />
        {/* Social */}
        <div className="footer-social">

          <a href="#" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>

          <a href="#" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>

          <a href="#" aria-label="Twitter">
            <i className="bi bi-twitter-x"></i>
          </a>

          <a href="#" aria-label="YouTube">
            <i className="bi bi-youtube"></i>
          </a>

          <a
            href="https://wa.me/919342568375"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <i className="bi bi-whatsapp"></i>
          </a>

        </div>


        {/* Bottom */}
        <div className="footer-bottom">

          <p>
            © 2026 ÉLÉGANCE.
            <br />
            All Rights Reserved.
          </p>

          <p className="footer-bottom-right">
            Designed with
            <i className="bi bi-heart-fill"></i>
            Modern Fashion Experience
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;