import React from "react";

const Contact = () => {

  const phoneNumber = "919342568375";

  const callNumber = "+919342568375";

  const whatsappMessage =
    "Hello ÉLÉGANCE, I would like to know more about your fashion collection.";

  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query= Puliyampatti, Pochampalli, Krishnagiri";

  return (
    <section className="contact-page">

      <div className="container">

        <div
          className="contact-heading"
          data-aos="fade-up"
        >

          <span>GET IN TOUCH</span>

          <h1>
            Let's Talk
            <br />
            <strong>Fashion</strong>
          </h1>

          <p>
            Have a question about our collection?
            Contact our team anytime.
          </p>

        </div>

        <div className="row g-4">

          <div
            className="col-lg-5"
            data-aos="fade-right"
          >

            <div className="contact-info">

              <div className="contact-box">

                <i className="bi bi-telephone"></i>

                <div>

                  <span>Call Us</span>

                  <h5>
                    +91 93425 68375
                  </h5>

                  <a href={`tel:${callNumber}`}>
                    Call Now
                  </a>

                </div>

              </div>

              <div className="contact-box">

                <i className="bi bi-whatsapp"></i>

                <div>

                  <span>WhatsApp</span>

                  <h5>
                    Chat With Us
                  </h5>

                  <a
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                      whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open WhatsApp
                  </a>

                </div>

              </div>

              <div className="contact-box">

                <i className="bi bi-geo-alt"></i>

                <div>

                  <span>Location</span>

                  <h5>
                     Puliyampatti, Pochampalli, Krishnagiri
                  </h5>

                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Google Maps
                  </a>

                </div>

              </div>

            </div>

          </div>

          <div
            className="col-lg-7"
            data-aos="fade-left"
          >

            <div className="contact-form-card">

              <h3>
                Send Us A Message
              </h3>

              <form>

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <label>
                      Full Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <label>
                      Email
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />

                  </div>

                </div>

                <div className="mb-3">

                  <label>
                    Subject
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="What can we help you with?"
                  />

                </div>

                <div className="mb-3">

                  <label>
                    Message
                  </label>

                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Write your message..."
                  ></textarea>

                </div>

                <button className="contact-submit">

                  Send Message

                  <i className="bi bi-arrow-right"></i>

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;