import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import herobanner from "../assets/herobanner.jpg";

import men1 from "../assets/men1.jpg";
import men2 from "../assets/men2.jpg";
import men3 from "../assets/men3.jpg";
import men4 from "../assets/men4.jpg";
import men5 from "../assets/men5.jpg";
import men6 from "../assets/men6.jpg";
import men7 from "../assets/men7.jpg";

import women1 from "../assets/women1.jpg";
import women2 from "../assets/women2.jpg";
import women3 from "../assets/women3.jpg";
import women4 from "../assets/women4.jpg";
import women5 from "../assets/women5.jpg";
import women6 from "../assets/women6.jpg";
import women7 from "../assets/women7.jpg";

import model1 from "../assets/model1.jpg";
import model2 from "../assets/model2.jpg";
import model3 from "../assets/model3.jpg";
import model4 from "../assets/model4.jpg";
import model5 from "../assets/model5.jpg";
import model6 from "../assets/model6.jpg";

import accessory1 from "../assets/accessory1.jpg";
import accessory2 from "../assets/accessory2.jpg";


const carouselItems = [
  {
    image: men1,
    title: "Urban Men",
    category: "MEN'S COLLECTION",
  },
  {
    image: women2,
    title: "Luxury Women",
    category: "WOMEN'S COLLECTION",
  },
  {
    image: men3,
    title: "Street Style",
    category: "MEN'S COLLECTION",
  },
  {
    image: women1,
    title: "Elegant Women",
    category: "WOMEN'S COLLECTION",
  },
  {
    image: men2,
    title: "Modern Classic",
    category: "MEN'S COLLECTION",
  },
  {
    image: women3,
    title: "Premium Style",
    category: "WOMEN'S COLLECTION",
  },
];

const accordionItems = [
  {
    image: model1,
    title: "MEN'S",
    text: "Sharp silhouettes, modern essentials and timeless everyday fashion.",
  },
  {
    image: model2,
    title: "WOMEN'S",
    text: "Elegant collections designed for confidence, comfort and style.",
  },
  {
    image: model3,
    title: "NEW ARRIVALS",
    text: "Discover the latest fashion pieces from our premium collection.",
  },
  {
    image: model4,
    title: "PREMIUM",
    text: "Luxury-inspired styles created for a sophisticated wardrobe.",
  },
];

const featuredProducts = [
  {
    image: men4,
    name: "Urban Essential Shirt",
    category: "Men's Fashion",
    price: "₹1,499",
    rating: "4.8",
    reviews: "126 Reviews",
  },
  {
    image: men5,
    name: "Modern Classic",
    category: "Men's Collection",
    price: "₹1,899",
    rating: "4.7",
    reviews: "98 Reviews",
  },
  {
    image: men6,
    name: "Street Mode Jacket",
    category: "Men's Fashion",
    price: "₹2,499",
    rating: "4.8",
    reviews: "109 Reviews",
  },
  {
    image: women4,
    name: "Elegant Signature Dress",
    category: "Women's Fashion",
    price: "₹2,299",
    rating: "4.9",
    reviews: "184 Reviews",
  },
  {
    image: women5,
    name: "Luxury Evening Style",
    category: "Women's Collection",
    price: "₹2,499",
    rating: "4.8",
    reviews: "143 Reviews",
  },
  {
    image: women6,
    name: "Premium Contemporary",
    category: "Women's Fashion",
    price: "₹2,199",
    rating: "4.9",
    reviews: "156 Reviews",
  },
];

const fashionCategories = [
  {
    number: "01",
    title: "T-Shirts",
    text: "Relaxed essentials for effortless everyday looks.",
  },
  {
    number: "02",
    title: "Shirts",
    text: "Smart and modern silhouettes for every occasion.",
  },
  {
    number: "03",
    title: "Jeans",
    text: "Contemporary denim designed for everyday confidence.",
  },
  {
    number: "04",
    title: "Dresses",
    text: "Elegant designs created to make every moment special.",
  },
  {
    number: "05",
    title: "Traditional",
    text: "Classic Indian fashion with a modern expression.",
  },
  {
    number: "06",
    title: "Outerwear",
    text: "Statement jackets and layers for modern wardrobes.",
  },
];

const styleFeatures = [
  {
    icon: "bi-gem",
    title: "Premium Quality",
    text: "Carefully selected materials and refined finishing.",
  },
  {
    icon: "bi-stars",
    title: "Modern Design",
    text: "Fresh silhouettes inspired by contemporary fashion.",
  },
  {
    icon: "bi-heart",
    title: "Made With Care",
    text: "Every collection is created with attention to detail.",
  },
  {
    icon: "bi-shield-check",
    title: "Trusted Experience",
    text: "A simple and comfortable fashion shopping experience.",
  },
];

const Home = () => {
  const heroRef = useRef(null);

  const [rotate, setRotate] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (window.innerWidth / 2 - event.clientX) / 40;
      const y = (window.innerHeight / 2 - event.clientY) / 40;

      if (heroRef.current) {
        heroRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const nextSlide = () => {
    setRotate((prev) => prev + 1);
  };

  const previousSlide = () => {
    setRotate((prev) => prev - 1);
  };

  const handleNewsletter = (event) => {
    event.preventDefault();

    if (!newsletterEmail.trim()) {
      return;
    }

    setNewsletterEmail("");
  };

  const filteredProducts =
    activeCategory === "ALL"
      ? featuredProducts
      : featuredProducts.filter((product) =>
          product.category.toUpperCase().includes(activeCategory)
        );

  return (
    <div className="home-page">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section className="fashion-hero">
        <div className="hero-grid"></div>

        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>

        <div
          className="container position-relative"
          style={{ zIndex: 3 }}
        >
          <div className="row align-items-center min-vh-100">

            <div
              className="col-lg-6"
              data-aos="fade-right"
            >
              <span className="hero-small-title">
                ÉLÉGANCE / FASHION HOUSE
              </span>

              <h1 className="hero-title">
                DEFINE
                <br />
                <span>YOUR STYLE.</span>
              </h1>

              <p className="hero-description">
                Discover premium men's and women's fashion
                designed for confidence, comfort and individuality.
              </p>

              <div className="hero-buttons">
                <Link
                  to="/shop"
                  className="hero-main-btn"
                >
                  Explore Collection
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

                <a
                  href="#collections"
                  className="hero-outline-btn"
                >
                  Discover More
                </a>
              </div>

              <div className="hero-stats">

                <div>
                  <strong>250+</strong>
                  <span>Styles</span>
                </div>

                <div>
                  <strong>50+</strong>
                  <span>Collections</span>
                </div>

                <div>
                  <strong>4.9</strong>
                  <span>Rating</span>
                </div>

              </div>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-left"
            >
              <div
                className="hero-visual"
                ref={heroRef}
              >
                <div className="hero-ring"></div>

                <div className="hero-image-card">

                  <img
                    src={herobanner}
                    alt="Élégance Fashion"
                  />

                  <div className="hero-image-overlay">
                    <span>NEW SEASON</span>
                    <strong>2026</strong>
                  </div>

                </div>

                <div className="floating-fashion-card card-top">

                  <i className="bi bi-stars"></i>

                  <div>
                    <strong>Premium</strong>
                    <span>Quality</span>
                  </div>

                </div>

                <div className="floating-fashion-card card-bottom">
                  <span>EST.</span>
                  <strong>1985</strong>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          QUICK INTRO
      ========================================================= */}

      <section className="fashion-intro-section">
        <div className="container">

          <div className="row align-items-center g-5">

            <div
              className="col-lg-5"
              data-aos="fade-right"
            >
              <span className="section-mini-label">
                ESTABLISHED WITH STYLE
              </span>

              <h2 className="intro-title">
                Fashion that
                <br />
                <strong>speaks for you.</strong>
              </h2>
            </div>

            <div
              className="col-lg-7"
              data-aos="fade-left"
            >
              <p className="intro-text">
                ÉLÉGANCE brings together contemporary design,
                timeless fashion and expressive individuality.
                Our collections are created for people who
                want their clothing to feel as confident as
                they look.
              </p>

              <div className="intro-links">

                <Link to="/about">
                  Discover Our Story
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

                <Link to="/shop">
                  Explore Collection
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          3D OBJECT CAROUSEL
      ========================================================= */}

      <section className="object-carousel-section">
        <div className="container">

          <div
            className="section-heading"
            data-aos="fade-up"
          >
            <span>01 / FEATURED</span>

            <h2>
              3D Fashion
              <br />
              <strong>Collection</strong>
            </h2>

            <p>
              Explore our signature collection through
              an interactive 3D experience.
            </p>
          </div>

          <div className="object-carousel">

            <div
              className="carousel-stage"
              style={{
                transform: `rotateY(${rotate * -60}deg)`,
              }}
            >

              {carouselItems.map((item, index) => (
                <div
                  className="object-card"
                  key={index}
                  style={{
                    transform: `
                      rotateY(${index * 60}deg)
                      translateZ(330px)
                    `,
                  }}
                >

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="object-card-info">

                    <span>{item.category}</span>

                    <h3>{item.title}</h3>

                    <Link to="/shop">
                      View
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>

                  </div>

                </div>
              ))}

            </div>
          </div>

          <div className="carousel-controls">

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
            >
              <i className="bi bi-arrow-left"></i>
            </button>

            <span>
              DRAG / EXPLORE
            </span>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <i className="bi bi-arrow-right"></i>
            </button>

          </div>

        </div>
      </section>


      {/* =========================================================
          COLLECTION GLASS CARDS
      ========================================================= */}

      <section
        className="glass-fashion-section"
        id="collections"
      >
        <div className="container">

          <div className="section-heading text-center">

            <span>02 / COLLECTIONS</span>

            <h2>
              Find Your
              <strong> Identity</strong>
            </h2>

            <p>
              Discover collections created around
              your lifestyle and personality.
            </p>

          </div>

          <div className="row g-4 mt-4">

            <div
              className="col-lg-6"
              data-aos="fade-right"
            >
              <div className="glass-fashion-card">

                <img
                  src={men7}
                  alt="Men Collection"
                />

                <div className="glass-content">

                  <span>01</span>

                  <h3>Men's Collection</h3>

                  <p>
                    Modern tailoring, casual essentials
                    and contemporary streetwear.
                  </p>

                  <Link to="/shop">
                    Explore Men
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>

                </div>

              </div>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-left"
            >
              <div className="glass-fashion-card">

                <img
                  src={women7}
                  alt="Women Collection"
                />

                <div className="glass-content">

                  <span>02</span>

                  <h3>Women's Collection</h3>

                  <p>
                    Elegant silhouettes, premium fabrics
                    and expressive fashion.
                  </p>

                  <Link to="/shop">
                    Explore Women
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          HORIZONTAL ACCORDION
      ========================================================= */}

      <section className="accordion-fashion-section">

        <div className="container">

          <div className="section-heading">

            <span>03 / DISCOVER</span>

            <h2>
              Fashion
              <strong> Stories</strong>
            </h2>

            <p>
              Every collection tells a different story.
              Find the one that represents you.
            </p>

          </div>

          <div className="fashion-accordion">

            {accordionItems.map((item, index) => (

              <div
                key={index}
                className={`fashion-accordion-card ${
                  activeAccordion === index
                    ? "active"
                    : ""
                }`}
                onClick={() => setActiveAccordion(index)}
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="accordion-number">
                  0{index + 1}
                </div>

                <div className="accordion-overlay"></div>

                <div className="accordion-content">

                  <span>ÉLÉGANCE</span>

                  <h3>{item.title}</h3>

                  <p>
                    {item.text}
                  </p>

                  <Link
                    to="/shop"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Explore
                    <i className="bi bi-arrow-right"></i>
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          FEATURED PRODUCTS
      ========================================================= */}

      <section className="home-products-section">

        <div className="container">

          <div
            className="section-heading"
            data-aos="fade-up"
          >

            <span>04 / TRENDING NOW</span>

            <h2>
              Curated
              <br />
              <strong>For You.</strong>
            </h2>

            <p>
              Explore some of the styles currently
              defining the ÉLÉGANCE collection.
            </p>

          </div>

          <div className="home-product-filter">

            <button
              type="button"
              className={
                activeCategory === "ALL"
                  ? "active"
                  : ""
              }
              onClick={() => setActiveCategory("ALL")}
            >
              All
            </button>

            <button
              type="button"
              className={
                activeCategory === "MEN"
                  ? "active"
                  : ""
              }
              onClick={() => setActiveCategory("MEN")}
            >
              Men's
            </button>

            <button
              type="button"
              className={
                activeCategory === "WOMEN"
                  ? "active"
                  : ""
              }
              onClick={() => setActiveCategory("WOMEN")}
            >
              Women's
            </button>

          </div>

          <div className="row g-4 mt-4">

            {filteredProducts.map((product, index) => (

              <div
                className="col-lg-4 col-md-6"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >

                <div className="home-product-card">

                  <div className="home-product-image">

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <span className="home-product-badge">
                      FEATURED
                    </span>

                    <button
                      type="button"
                      className="home-wishlist"
                      aria-label="Add to wishlist"
                    >
                      <i className="bi bi-heart"></i>
                    </button>

                  </div>

                  <div className="home-product-info">

                    <span className="home-product-category">
                      {product.category}
                    </span>

                    <h3>{product.name}</h3>

                    <div className="home-product-rating">

                      <span>
                        <i className="bi bi-star-fill"></i>
                        {product.rating}
                      </span>

                      <small>
                        {product.reviews}
                      </small>

                    </div>

                    <div className="home-product-bottom">

                      <strong>
                        {product.price}
                      </strong>

                      <Link to="/shop">
                        Shop
                        <i className="bi bi-arrow-up-right"></i>
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

          <div
            className="text-center mt-5"
            data-aos="fade-up"
          >
            <Link
              to="/shop"
              className="home-view-all-btn"
            >
              View Full Collection
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

        </div>

      </section>


      {/* =========================================================
          STYLE PHILOSOPHY
      ========================================================= */}

      <section className="style-philosophy-section">

        <div className="container">

          <div className="row align-items-center g-5">

            <div
              className="col-lg-6"
              data-aos="fade-right"
            >

              <div className="philosophy-image">

                <img
                  src={model5}
                  alt="Élégance Philosophy"
                />

                <div className="philosophy-floating-card">

                  <span>OUR PHILOSOPHY</span>

                  <strong>
                    STYLE
                    <br />
                    WITHOUT
                    <br />
                    LIMITS.
                  </strong>

                </div>

              </div>

            </div>

            <div
              className="col-lg-6"
              data-aos="fade-left"
            >

              <span className="section-mini-label">
                THE ÉLÉGANCE PHILOSOPHY
              </span>

              <h2 className="philosophy-title">
                Fashion should
                <br />
                <strong>feel personal.</strong>
              </h2>

              <p className="philosophy-text">
                We believe fashion becomes meaningful
                when it reflects the person wearing it.
                That is why our collections balance
                contemporary trends with timeless design.
              </p>

              <p className="philosophy-text">
                From relaxed everyday essentials to
                statement pieces, every style is designed
                to help you build a wardrobe that feels
                uniquely yours.
              </p>

              <Link
                to="/about"
                className="philosophy-button"
              >
                Our Story
                <i className="bi bi-arrow-up-right"></i>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          TILT PARALLAX
      ========================================================= */}

      <section className="tilt-section">

        <div className="container">

          <div
            className="tilt-main-card"
            data-aos="zoom-in"
          >

            <div className="tilt-image">

              <img
                src={model6}
                alt="Premium Fashion"
              />

            </div>

            <div className="tilt-glass-panel">

              <span>05 / SIGNATURE</span>

              <h2>
                Wear Your
                <br />
                <strong>Confidence.</strong>
              </h2>

              <p>
                Fashion is more than clothing.
                It is the way you express yourself
                without saying a word.
              </p>

              <Link to="/shop">
                Shop Signature
                <i className="bi bi-arrow-up-right"></i>
              </Link>

            </div>

            <div className="tilt-circle">
              ÉLÉGANCE
            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}

      <section className="why-fashion-section">

        <div className="container">

          <div
            className="section-heading text-center"
            data-aos="fade-up"
          >

            <span>06 / WHY ÉLÉGANCE</span>

            <h2>
              Designed For
              <br />
              <strong>Modern You.</strong>
            </h2>

            <p>
              A fashion experience built around
              quality, design and individuality.
            </p>

          </div>

          <div className="row g-4 mt-4">

            {styleFeatures.map((feature, index) => (

              <div
                className="col-lg-3 col-md-6"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >

                <div className="why-fashion-card">

                  <div className="why-icon">

                    <i
                      className={`bi ${feature.icon}`}
                    ></i>

                  </div>

                  <span>
                    0{index + 1}
                  </span>

                  <h3>
                    {feature.title}
                  </h3>

                  <p>
                    {feature.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          FASHION NUMBERS
      ========================================================= */}

      <section className="fashion-numbers-section">

        <div className="container">

          <div className="fashion-numbers-box">

            <div
              className="number-item"
              data-aos="zoom-in"
            >
              <strong>250+</strong>
              <span>Fashion Styles</span>
            </div>

            <div
              className="number-item"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <strong>50+</strong>
              <span>Collections</span>
            </div>

            <div
              className="number-item"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <strong>10K+</strong>
              <span>Happy Customers</span>
            </div>

            <div
              className="number-item"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <strong>40+</strong>
              <span>Years Of Style</span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FASHION CATEGORIES
      ========================================================= */}

      <section className="fashion-category-section">

        <div className="container">

          <div
            className="section-heading"
            data-aos="fade-up"
          >

            <span>07 / EXPLORE</span>

            <h2>
              Shop By
              <br />
              <strong>Category.</strong>
            </h2>

            <p>
              Build your wardrobe with essentials,
              statement pieces and timeless favourites.
            </p>

          </div>

          <div className="fashion-category-grid">

            {fashionCategories.map((category, index) => (

              <Link
                to="/shop"
                className="fashion-category-card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 70}
              >

                <span>
                  {category.number}
                </span>

                <div>

                  <h3>
                    {category.title}
                  </h3>

                  <p>
                    {category.text}
                  </p>

                </div>

                <i className="bi bi-arrow-up-right"></i>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          MEN STYLE STORY
      ========================================================= */}

      <section className="style-story-section">

        <div className="container">

          <div className="row g-4 align-items-stretch">

            <div
              className="col-lg-6"
              data-aos="fade-right"
            >

              <div className="style-story-card">

                <img
                  src={men6}
                  alt="Men Fashion"
                />

                <div className="style-story-overlay">

                  <span>FOR HIM</span>

                  <h2>
                    Modern
                    <br />
                    <strong>Menswear.</strong>
                  </h2>

                  <p>
                    From everyday essentials to
                    sophisticated statement pieces.
                  </p>

                  <Link to="/shop">
                    Shop Men's
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>

                </div>

              </div>

            </div>


            <div
              className="col-lg-6"
              data-aos="fade-left"
            >

              <div className="style-story-card">

                <img
                  src={women6}
                  alt="Women Fashion"
                />

                <div className="style-story-overlay">

                  <span>FOR HER</span>

                  <h2>
                    Elegant
                    <br />
                    <strong>Womenswear.</strong>
                  </h2>

                  <p>
                    Discover expressive silhouettes
                    designed for every occasion.
                  </p>

                  <Link to="/shop">
                    Shop Women's
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          SEASONAL COLLECTION
      ========================================================= */}

      <section className="seasonal-fashion-section">

        <div className="container">

          <div className="seasonal-fashion-banner">

            <div
              className="seasonal-content"
              data-aos="fade-right"
            >

              <span>
                2026 / NEW SEASON
              </span>

              <h2>
                The Season
                <br />
                <strong>Of Expression.</strong>
              </h2>

              <p>
                Discover fresh silhouettes, refined
                textures and contemporary pieces
                created for the new season.
              </p>

              <Link to="/shop">
                Explore New Season
                <i className="bi bi-arrow-up-right"></i>
              </Link>

            </div>

            <div
              className="seasonal-visual"
              data-aos="fade-left"
            >

              <img
                src={herobanner}
                alt="New Season"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PREMIUM COLLECTION
      ========================================================= */}

      <section className="premium-collection-section">

        <div className="container">

          <div className="row align-items-center g-5">

            <div
              className="col-lg-5"
              data-aos="fade-right"
            >

              <span className="section-mini-label">
                08 / PREMIUM
              </span>

              <h2 className="premium-title">
                Elevate
                <br />
                Your
                <br />
                <strong>Everyday.</strong>
              </h2>

              <p>
                Discover carefully selected pieces that
                combine modern proportions, sophisticated
                details and effortless comfort.
              </p>

              <Link
                to="/shop"
                className="premium-button"
              >
                Explore Premium
                <i className="bi bi-arrow-right"></i>
              </Link>

            </div>

            <div
              className="col-lg-7"
              data-aos="fade-left"
            >

              <div className="premium-image-grid">

                <div className="premium-image large">

                  <img
                    src={accessory1}
                    alt="Premium Collection"
                  />

                  <span>
                    SIGNATURE
                  </span>

                </div>

                <div className="premium-image small">

                  <img
                    src={accessory2}
                    alt="Premium Style"
                  />

                  <span>
                    ELEGANCE
                  </span>

                </div>

              </div>

              {/* EXTRA ACCESSORY IMAGES */}

    

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          CUSTOMER EXPERIENCE
      ========================================================= */}

      <section className="experience-section">

        <div className="container">

          <div
            className="section-heading text-center"
            data-aos="fade-up"
          >

            <span>09 / EXPERIENCE</span>

            <h2>
              More Than
              <br />
              <strong>Fashion.</strong>
            </h2>

            <p>
              Everything is designed to make your
              fashion journey feel effortless.
            </p>

          </div>

          <div className="row g-4 mt-4">

            <div
              className="col-lg-4"
              data-aos="fade-up"
            >

              <div className="experience-card">

                <i className="bi bi-truck"></i>

                <span>01</span>

                <h3>Fast Delivery</h3>

                <p>
                  Get your favourite styles delivered
                  with a simple and convenient experience.
                </p>

              </div>

            </div>

            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >

              <div className="experience-card">

                <i className="bi bi-shield-check"></i>

                <span>02</span>

                <h3>Secure Shopping</h3>

                <p>
                  Enjoy a smooth shopping journey with
                  a focus on simplicity and security.
                </p>

              </div>

            </div>

            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >

              <div className="experience-card">

                <i className="bi bi-arrow-repeat"></i>

                <span>03</span>

                <h3>Easy Returns</h3>

                <p>
                  Shop with confidence and enjoy a
                  straightforward return experience.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FASHION QUOTE
      ========================================================= */}

      <section className="fashion-quote-section">

        <div className="container">

          <div
            className="fashion-quote"
            data-aos="fade-up"
          >

            <i className="bi bi-quote"></i>

            <h2>
              "Fashion is not just what you wear.
              <br />
              <strong>
                It is how you express who you are.
              </strong>
            </h2>

            <span>
              — ÉLÉGANCE
            </span>

          </div>

        </div>

      </section>


      {/* =========================================================
          STYLE JOURNAL
      ========================================================= */}

      <section className="style-journal-section">

        <div className="container">

          <div className="section-heading">

            <span>10 / STYLE JOURNAL</span>

            <h2>
              Inspiration
              <br />
              <strong>For Every Day.</strong>
            </h2>

            <p>
              Simple ideas to help you discover
              your own personal fashion language.
            </p>

          </div>

          <div className="row g-4 mt-4">

            <div
              className="col-lg-4"
              data-aos="fade-up"
            >

              <article className="journal-card">

                <div className="journal-image">

                  <img
                    src={men5}
                    alt="Everyday Men's Style"
                  />

                  <span>
                    MEN'S STYLE
                  </span>

                </div>

                <div className="journal-content">

                  <small>
                    STYLE GUIDE / 01
                  </small>

                  <h3>
                    Building A Modern
                    Everyday Wardrobe
                  </h3>

                  <p>
                    Discover simple combinations that
                    make everyday dressing feel effortless.
                  </p>

                  <Link to="/shop">
                    Explore Styles
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>

                </div>

              </article>

            </div>


            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >

              <article className="journal-card">

                <div className="journal-image">

                  <img
                    src={women5}
                    alt="Women's Style"
                  />

                  <span>
                    WOMEN'S STYLE
                  </span>

                </div>

                <div className="journal-content">

                  <small>
                    STYLE GUIDE / 02
                  </small>

                  <h3>
                    Effortless Elegance
                    For Every Occasion
                  </h3>

                  <p>
                    Explore versatile pieces that move
                    naturally from day to evening.
                  </p>

                  <Link to="/shop">
                    Explore Styles
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>

                </div>

              </article>

            </div>


            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >

              <article className="journal-card">

                <div className="journal-image">

                  <img
                    src={model3}
                    alt="Premium Fashion"
                  />

                  <span>
                    PREMIUM
                  </span>

                </div>

                <div className="journal-content">

                  <small>
                    STYLE GUIDE / 03
                  </small>

                  <h3>
                    The Art Of
                    Personal Expression
                  </h3>

                  <p>
                    Learn how thoughtful details can
                    transform a simple outfit.
                  </p>

                  <Link to="/shop">
                    Explore Styles
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>

                </div>

              </article>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FASHION PROMO
      ========================================================= */}

      <section className="fashion-promo-section">

        <div className="container">

          <div
            className="fashion-promo"
            data-aos="zoom-in"
          >

            <div className="promo-content">

              <span>
                ÉLÉGANCE EXCLUSIVE
              </span>

              <h2>
                Your Style.
                <br />
                <strong>Your Rules.</strong>
              </h2>

              <p>
                Explore curated collections created
                to help you build a wardrobe that
                feels completely yours.
              </p>

              <Link to="/shop">
                Start Shopping
                <i className="bi bi-arrow-right"></i>
              </Link>

            </div>

            <div className="promo-side">

              <div>
                <strong>01</strong>
                <span>DISCOVER</span>
              </div>

              <div>
                <strong>02</strong>
                <span>CHOOSE</span>
              </div>

              <div>
                <strong>03</strong>
                <span>EXPRESS</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          NEWSLETTER
      ========================================================= */}

      <section className="fashion-newsletter-section">

        <div className="container">

          <div
            className="fashion-newsletter"
            data-aos="zoom-in"
          >

            <div className="newsletter-icon">

              <i className="bi bi-envelope-paper"></i>

            </div>

            <span>
              STAY IN STYLE
            </span>

            <h2>
              Get The Latest
              <br />
              <strong>Fashion Updates.</strong>
            </h2>

            <p>
              Subscribe to receive new arrivals,
              exclusive collections and style updates.
            </p>

            <form
              className="newsletter-input"
              onSubmit={handleNewsletter}
            >

              <input
                type="email"
                value={newsletterEmail}
                onChange={(event) =>
                  setNewsletterEmail(event.target.value)
                }
                placeholder="Enter your email address"
                required
              />

              <button type="submit">
                Subscribe
                <i className="bi bi-arrow-right"></i>
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL BRAND STATEMENT
      ========================================================= */}

      <section className="brand-statement-section">

        <div className="container">

          <div
            className="brand-statement"
            data-aos="fade-up"
          >

            <span>
              ÉLÉGANCE / FASHION HOUSE
            </span>

            <h2>
              Confidence
              <br />
              <strong>Looks Good On You.</strong>
            </h2>

            <p>
              Discover clothing that complements
              your personality, your lifestyle and
              your individual sense of style.
            </p>

            <Link to="/shop">
              Discover ÉLÉGANCE
              <i className="bi bi-arrow-up-right"></i>
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL BANNER
      ========================================================= */}

      <section className="fashion-final-section">

        <div className="container">

          <div
            className="final-fashion-banner"
            data-aos="fade-up"
          >

            <div>

              <span>
                THE NEW ERA OF FASHION
              </span>

              <h2>
                STYLE
                <br />
                <strong>STARTS HERE.</strong>
              </h2>

            </div>

            <Link to="/shop">
              Shop Now
              <i className="bi bi-arrow-right"></i>
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;