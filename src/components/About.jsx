import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about-page">

      {/* ABOUT HERO */}

      <section className="about-hero">

        <div className="about-hero-orb orb-one"></div>
        <div className="about-hero-orb orb-two"></div>

        <div className="container">

          <div
            className="about-header"
            data-aos="fade-up"
          >

            <span>
              ÉLÉGANCE / OUR STORY
            </span>

            <h1>
              Fashion That
              <br />
              <strong>Defines You</strong>
            </h1>

            <p>
              Where timeless elegance meets modern
              design, confidence and individuality.
            </p>

          </div>

        </div>

      </section>


      {/* INTRO STORY */}

      <section className="about-story-section">

        <div className="container">

          <div className="row align-items-center g-5">

            <div
              className="col-lg-6"
              data-aos="fade-right"
            >

              <div className="about-glass">

                <span>01 / OUR STORY</span>

                <h2>
                  Designed For
                  <br />
                  <strong>Modern Living</strong>
                </h2>

                <p>
                  ÉLÉGANCE is a modern fashion destination
                  created for people who believe that style
                  is more than clothing.
                </p>

                <p>
                  Our collections are built around a simple
                  idea: fashion should help you express
                  who you are while making you feel
                  comfortable and confident.
                </p>

                <p>
                  From everyday essentials to statement
                  pieces, every collection is created with
                  attention to design, detail and experience.
                </p>

                <div className="about-numbers">

                  <div>
                    <strong>10+</strong>
                    <span>Years</span>
                  </div>

                  <div>
                    <strong>50K+</strong>
                    <span>Customers</span>
                  </div>

                  <div>
                    <strong>500+</strong>
                    <span>Styles</span>
                  </div>

                </div>

              </div>

            </div>


            <div
              className="col-lg-6"
              data-aos="fade-left"
            >

              <div className="about-content">

                <span className="about-small-title">
                  OUR PHILOSOPHY
                </span>

                <h3>
                  Fashion should
                  <br />
                  <strong>feel personal.</strong>
                </h3>

                <p>
                  We believe clothing becomes meaningful
                  when it reflects your personality.
                  That is why our collections combine
                  contemporary trends with timeless
                  elements.
                </p>

                <div
                  className="accordion"
                  id="aboutAccordion"
                >

                  <div className="accordion-item">

                    <h2 className="accordion-header">

                      <button
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#one"
                      >
                        Premium Materials
                      </button>

                    </h2>

                    <div
                      id="one"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#aboutAccordion"
                    >

                      <div className="accordion-body">
                        We focus on quality fabrics,
                        comfortable textures and durable
                        finishing for everyday confidence.
                      </div>

                    </div>

                  </div>


                  <div className="accordion-item">

                    <h2 className="accordion-header">

                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#two"
                      >
                        Modern Design
                      </button>

                    </h2>

                    <div
                      id="two"
                      className="accordion-collapse collapse"
                      data-bs-parent="#aboutAccordion"
                    >

                      <div className="accordion-body">
                        Our designs combine current fashion
                        trends with timeless silhouettes
                        that remain versatile.
                      </div>

                    </div>

                  </div>


                  <div className="accordion-item">

                    <h2 className="accordion-header">

                      <button
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#three"
                      >
                        Customer First
                      </button>

                    </h2>

                    <div
                      id="three"
                      className="accordion-collapse collapse"
                      data-bs-parent="#aboutAccordion"
                    >

                      <div className="accordion-body">
                        From discovery to delivery, we focus
                        on creating a smooth and enjoyable
                        shopping experience.
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* NUMBERS */}

      <section className="about-stat-section">

        <div className="container">

          <div className="row g-4">

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
            >
              <div className="about-stat-card">
                <span>01</span>
                <strong>10+</strong>
                <p>Years of Fashion Experience</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="about-stat-card">
                <span>02</span>
                <strong>50K+</strong>
                <p>Fashion Customers</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="about-stat-card">
                <span>03</span>
                <strong>500+</strong>
                <p>Curated Styles</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="about-stat-card">
                <span>04</span>
                <strong>4.9</strong>
                <p>Customer Experience</p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* VALUES */}

      <section className="about-values-section">

        <div className="container">

          <div
            className="section-heading"
            data-aos="fade-up"
          >

            <span>02 / WHAT WE BELIEVE</span>

            <h2>
              Our Core
              <br />
              <strong>Values</strong>
            </h2>

            <p>
              The principles behind every collection,
              experience and design.
            </p>

          </div>


          <div className="row g-4">

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
            >

              <div className="value-card">

                <div className="value-icon">
                  <i className="bi bi-gem"></i>
                </div>

                <span>01</span>

                <h3>Quality</h3>

                <p>
                  We believe good fashion begins with
                  thoughtful materials, careful finishing
                  and attention to detail.
                </p>

                <div className="value-line"></div>

              </div>

            </div>


            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >

              <div className="value-card">

                <div className="value-icon">
                  <i className="bi bi-stars"></i>
                </div>

                <span>02</span>

                <h3>Creativity</h3>

                <p>
                  We bring fresh ideas, modern silhouettes
                  and expressive details into every season.
                </p>

                <div className="value-line"></div>

              </div>

            </div>


            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >

              <div className="value-card">

                <div className="value-icon">
                  <i className="bi bi-heart"></i>
                </div>

                <span>03</span>

                <h3>Confidence</h3>

                <p>
                  Our purpose is to help people feel
                  comfortable and confident in their own style.
                </p>

                <div className="value-line"></div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* EXPERIENCE */}

      <section className="about-experience-section">

        <div className="container">

          <div
            className="about-experience"
            data-aos="zoom-in"
          >

            <div className="experience-content">

              <span>
                03 / THE EXPERIENCE
              </span>

              <h2>
                Your style.
                <br />
                <strong>Your identity.</strong>
              </h2>

              <p>
                Discover a fashion experience created around
                individuality, comfort and modern living.
                Every detail is designed to make your journey
                feel effortless.
              </p>

              <Link to="/shop">
                Explore Collection
                <i className="bi bi-arrow-up-right"></i>
              </Link>

            </div>


            <div className="experience-grid">

              <div>
                <i className="bi bi-person-check"></i>
                <strong>Personal Style</strong>
                <span>Designed around you</span>
              </div>

              <div>
                <i className="bi bi-box-seam"></i>
                <strong>Curated Fashion</strong>
                <span>Selected collections</span>
              </div>

              <div>
                <i className="bi bi-stars"></i>
                <strong>Modern Trends</strong>
                <span>Fresh seasonal looks</span>
              </div>

              <div>
                <i className="bi bi-shield-check"></i>
                <strong>Premium Quality</strong>
                <span>Attention to detail</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* JOURNEY */}

      <section className="about-journey-section">

        <div className="container">

          <div
            className="section-heading text-center"
            data-aos="fade-up"
          >

            <span>04 / OUR JOURNEY</span>

            <h2>
              From Vision
              <br />
              <strong>To ÉLÉGANCE</strong>
            </h2>

          </div>


          <div className="journey-timeline">

            <div
              className="journey-item"
              data-aos="fade-right"
            >

              <div className="journey-year">
                2016
              </div>

              <div className="journey-content">
                <span>THE BEGINNING</span>

                <h3>
                  A Simple Fashion Idea
                </h3>

                <p>
                  ÉLÉGANCE began with a simple vision:
                  create fashion that feels modern,
                  personal and accessible.
                </p>
              </div>

            </div>


            <div
              className="journey-item reverse"
              data-aos="fade-left"
            >

              <div className="journey-year">
                2019
              </div>

              <div className="journey-content">
                <span>GROWING TOGETHER</span>

                <h3>
                  Building Our Community
                </h3>

                <p>
                  Our collections expanded while our
                  community of fashion lovers continued
                  to grow.
                </p>
              </div>

            </div>


            <div
              className="journey-item"
              data-aos="fade-right"
            >

              <div className="journey-year">
                2023
              </div>

              <div className="journey-content">
                <span>THE NEW ERA</span>

                <h3>
                  Modern Fashion House
                </h3>

                <p>
                  We introduced new collections,
                  contemporary designs and an improved
                  digital shopping experience.
                </p>
              </div>

            </div>


            <div
              className="journey-item reverse"
              data-aos="fade-left"
            >

              <div className="journey-year">
                2026
              </div>

              <div className="journey-content">
                <span>TODAY</span>

                <h3>
                  Style Without Limits
                </h3>

                <p>
                  Today, ÉLÉGANCE continues to create
                  fashion for people who want to express
                  their identity through style.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* PHILOSOPHY */}

      <section className="about-philosophy">

        <div className="container">

          <div
            className="philosophy-box"
            data-aos="fade-up"
          >

            <div className="philosophy-number">
              05
            </div>

            <div>

              <span>
                OUR FASHION PHILOSOPHY
              </span>

              <h2>
                Wear what
                <br />
                <strong>feels like you.</strong>
              </h2>

              <p>
                Fashion is not about following every trend.
                It is about discovering pieces that fit
                your personality, lifestyle and confidence.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CUSTOMER EXPERIENCE */}

      <section className="customer-experience-section">

        <div className="container">

          <div
            className="section-heading"
            data-aos="fade-up"
          >

            <span>06 / CUSTOMER FIRST</span>

            <h2>
              More Than
              <br />
              <strong>Just Fashion</strong>
            </h2>

          </div>


          <div className="row g-4">

            <div
              className="col-lg-4"
              data-aos="fade-up"
            >

              <div className="customer-card">

                <i className="bi bi-search"></i>

                <h3>
                  Discover
                </h3>

                <p>
                  Explore collections designed to
                  inspire your next look.
                </p>

              </div>

            </div>


            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >

              <div className="customer-card">

                <i className="bi bi-handbag"></i>

                <h3>
                  Choose
                </h3>

                <p>
                  Find pieces that fit your personal
                  style and everyday lifestyle.
                </p>

              </div>

            </div>


            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >

              <div className="customer-card">

                <i className="bi bi-person-heart"></i>

                <h3>
                  Express
                </h3>

                <p>
                  Wear your choices with confidence
                  and make every look your own.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="about-final-section">

        <div className="container">

          <div
            className="about-final-banner"
            data-aos="zoom-in"
          >

            <span>
              07 / YOUR NEXT LOOK
            </span>

            <h2>
              Your style.
              <br />
              <strong>Your story.</strong>
            </h2>

            <p>
              Discover the collection created for
              your next chapter.
            </p>

            <Link to="/shop">
              Explore ÉLÉGANCE
              <i className="bi bi-arrow-right"></i>
            </Link>

          </div>

        </div>

      </section>

    </section>
  );
};

export default About;