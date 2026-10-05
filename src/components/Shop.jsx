import React, { useEffect, useState } from "react";

// ================= MEN IMAGES =================

import menTshirt from "../assets/men-tshirt.jpg";
import menShirt from "../assets/men-shirt.jpg";
import menPolo from "../assets/men-polo.jpg";
import menJeans from "../assets/men-jeans.jpg";
import menTrousers from "../assets/men-trousers.jpg";
import menCargo from "../assets/men-cargo.jpg";
import menShorts from "../assets/men-shorts.jpg";
import menHoodie from "../assets/men-hoodie.jpg";
import menSweatshirt from "../assets/men-sweatshirt.jpg";
import menJacket from "../assets/men-jacket.jpg";
import menBlazer from "../assets/men-blazer.jpg";
import menKurta from "../assets/men-kurta.jpg";
import menFormal from "../assets/men-formal.jpg";

// ================= WOMEN IMAGES =================

import womenTops from "../assets/women-tops.jpg";
import womenTshirt from "../assets/women-tshirt.jpg";
import womenShirt from "../assets/women-shirt.jpg";
import womenJeans from "../assets/women-jeans.jpg";
import womenTrousers from "../assets/women-trousers.jpg";
import womenSkirt from "../assets/women-skirt.jpg";
import womenDress from "../assets/women-dress.jpg";
import womenKurti from "../assets/women-kurti.jpg";
import womenSaree from "../assets/women-saree.jpg";
import womenSalwar from "../assets/women-salwar.jpg";
import womenPalazzo from "../assets/women-palazzo.jpg";
import womenJumpsuit from "../assets/women-jumpsuit.jpg";
import womenHoodie from "../assets/women-hoodie.jpg";
import womenJacket from "../assets/women-jacket.jpg";
import womenTraditional from "../assets/women-traditional.jpg";

// ================= DEFAULT PRODUCTS =================

const defaultProducts = [
  {
    id: 1,
    name: "T-Shirts",
    category: "Men",
    price: 999,
    rating: 4.8,
    reviews: 120,
    image: menTshirt,
  },
  {
    id: 2,
    name: "Shirts",
    category: "Men",
    price: 1499,
    rating: 4.7,
    reviews: 98,
    image: menShirt,
  },
  {
    id: 3,
    name: "Polo T-Shirts",
    category: "Men",
    price: 1299,
    rating: 4.8,
    reviews: 86,
    image: menPolo,
  },
  {
    id: 4,
    name: "Jeans",
    category: "Men",
    price: 1899,
    rating: 4.6,
    reviews: 145,
    image: menJeans,
  },
  {
    id: 5,
    name: "Trousers / Pants",
    category: "Men",
    price: 1599,
    rating: 4.7,
    reviews: 76,
    image: menTrousers,
  },
  {
    id: 6,
    name: "Cargo Pants",
    category: "Men",
    price: 1799,
    rating: 4.8,
    reviews: 112,
    image: menCargo,
  },
  {
    id: 7,
    name: "Shorts",
    category: "Men",
    price: 899,
    rating: 4.5,
    reviews: 64,
    image: menShorts,
  },
  {
    id: 8,
    name: "Hoodies",
    category: "Men",
    price: 1699,
    rating: 4.9,
    reviews: 156,
    image: menHoodie,
  },
  {
    id: 9,
    name: "Sweatshirts",
    category: "Men",
    price: 1499,
    rating: 4.7,
    reviews: 91,
    image: menSweatshirt,
  },
  {
    id: 10,
    name: "Jackets",
    category: "Men",
    price: 2499,
    rating: 4.8,
    reviews: 103,
    image: menJacket,
  },
  {
    id: 11,
    name: "Blazers",
    category: "Men",
    price: 2999,
    rating: 4.7,
    reviews: 72,
    image: menBlazer,
  },
  {
    id: 12,
    name: "Traditional Wear – Kurta, Veshti",
    category: "Men",
    price: 2199,
    rating: 4.9,
    reviews: 134,
    image: menKurta,
  },
  {
    id: 13,
    name: "Formal Wear",
    category: "Men",
    price: 2799,
    rating: 4.8,
    reviews: 88,
    image: menFormal,
  },

  {
    id: 14,
    name: "Tops",
    category: "Women",
    price: 899,
    rating: 4.7,
    reviews: 112,
    image: womenTops,
  },
  {
    id: 15,
    name: "T-Shirts",
    category: "Women",
    price: 799,
    rating: 4.6,
    reviews: 94,
    image: womenTshirt,
  },
  {
    id: 16,
    name: "Shirts",
    category: "Women",
    price: 1299,
    rating: 4.8,
    reviews: 105,
    image: womenShirt,
  },
  {
    id: 17,
    name: "Jeans",
    category: "Women",
    price: 1799,
    rating: 4.7,
    reviews: 132,
    image: womenJeans,
  },
  {
    id: 18,
    name: "Trousers / Pants",
    category: "Women",
    price: 1499,
    rating: 4.6,
    reviews: 83,
    image: womenTrousers,
  },
  {
    id: 19,
    name: "Skirts",
    category: "Women",
    price: 1199,
    rating: 4.8,
    reviews: 76,
    image: womenSkirt,
  },
  {
    id: 20,
    name: "Dresses",
    category: "Women",
    price: 2299,
    rating: 4.9,
    reviews: 168,
    image: womenDress,
  },
  {
    id: 21,
    name: "Kurtis",
    category: "Women",
    price: 1399,
    rating: 4.8,
    reviews: 143,
    image: womenKurti,
  },
  {
    id: 22,
    name: "Sarees",
    category: "Women",
    price: 2499,
    rating: 4.9,
    reviews: 187,
    image: womenSaree,
  },
  {
    id: 23,
    name: "Salwar Suits",
    category: "Women",
    price: 2199,
    rating: 4.8,
    reviews: 126,
    image: womenSalwar,
  },
  {
    id: 24,
    name: "Palazzo",
    category: "Women",
    price: 999,
    rating: 4.6,
    reviews: 69,
    image: womenPalazzo,
  },
  {
    id: 25,
    name: "Jumpsuits",
    category: "Women",
    price: 1899,
    rating: 4.7,
    reviews: 84,
    image: womenJumpsuit,
  },
  {
    id: 26,
    name: "Hoodies",
    category: "Women",
    price: 1599,
    rating: 4.8,
    reviews: 101,
    image: womenHoodie,
  },
  {
    id: 27,
    name: "Jackets",
    category: "Women",
    price: 2399,
    rating: 4.7,
    reviews: 77,
    image: womenJacket,
  },
  {
    id: 28,
    name: "Traditional Wear",
    category: "Women",
    price: 2699,
    rating: 4.9,
    reviews: 159,
    image: womenTraditional,
  },
];

const Shop = () => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("elegance-products");

    if (savedProducts) {
      return JSON.parse(savedProducts);
    }

    return defaultProducts;
  });

  const [filter, setFilter] = useState("All");
  const [wishlist, setWishlist] = useState([]);

  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("Men");
  const [productPrice, setProductPrice] = useState("");
  const [productRating, setProductRating] = useState("5");
  const [productReviews, setProductReviews] = useState("");
  const [productImage, setProductImage] = useState("");
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    localStorage.setItem("elegance-products", JSON.stringify(products));
  }, [products]);

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((product) => product.category === filter);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImageName(file.name);

    const reader = new FileReader();

    reader.onload = () => {
      setProductImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    if (
      !productName ||
      !productPrice ||
      !productReviews ||
      !productImage
    ) {
      alert("Please fill all product details and select an image.");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: productName,
      category: productCategory,
      price: Number(productPrice),
      rating: Number(productRating),
      reviews: Number(productReviews),
      image: productImage,
      custom: true,
    };

    setProducts([newProduct, ...products]);

    setProductName("");
    setProductCategory("Men");
    setProductPrice("");
    setProductRating("5");
    setProductReviews("");
    setProductImage("");
    setImageName("");
  };

  const handleDeleteProduct = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    setProducts(products.filter((product) => product.id !== id));

    setWishlist(wishlist.filter((item) => item !== id));
  };

  return (
    <section className="shop-page">

      {/* ================= SHOP HERO ================= */}

      <div className="shop-hero">
        <div className="container">
          <div className="shop-hero-content" data-aos="fade-up">
            <span>ÉLÉGANCE / COLLECTION 2026</span>

            <h1>
              Discover Your
              <br />
              <strong>Signature Style</strong>
            </h1>

            <p>
              Explore premium men's and women's
              fashion designed for modern lifestyles.
            </p>

            <div className="shop-hero-stats">
              <div>
                <strong>28+</strong>
                <span>Categories</span>
              </div>

              <div>
                <strong>50K+</strong>
                <span>Customers</span>
              </div>

              <div>
                <strong>10+</strong>
                <span>Years</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= ADD PRODUCT ================= */}

      <div className="container">

        <div className="add-product-section" data-aos="fade-up">

          <div className="add-product-heading">
            <span>PRODUCT MANAGEMENT</span>

            <h2>
              Add New
              <br />
              <strong>Fashion Product</strong>
            </h2>

            <p>
              Upload any image size and create a new product.
            </p>
          </div>

          <form
            className="add-product-form"
            onSubmit={handleAddProduct}
          >

            <div className="add-form-grid">

              <div className="add-form-group">
                <label>Product Name</label>

                <input
                  type="text"
                  placeholder="Example: Premium T-Shirt"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>

              <div className="add-form-group">
                <label>Category</label>

                <select
                  value={productCategory}
                  onChange={(e) =>
                    setProductCategory(e.target.value)
                  }
                >
                  <option value="Men">Men's Fashion</option>
                  <option value="Women">Women's Fashion</option>
                </select>
              </div>

              <div className="add-form-group">
                <label>Price</label>

                <input
                  type="number"
                  placeholder="₹999"
                  value={productPrice}
                  onChange={(e) =>
                    setProductPrice(e.target.value)
                  }
                />
              </div>

              <div className="add-form-group">
                <label>Rating</label>

                <select
                  value={productRating}
                  onChange={(e) =>
                    setProductRating(e.target.value)
                  }
                >
                  <option value="5">5.0 ⭐</option>
                  <option value="4.9">4.9 ⭐</option>
                  <option value="4.8">4.8 ⭐</option>
                  <option value="4.7">4.7 ⭐</option>
                  <option value="4.6">4.6 ⭐</option>
                  <option value="4.5">4.5 ⭐</option>
                  <option value="4.0">4.0 ⭐</option>
                </select>
              </div>

              <div className="add-form-group">
                <label>Reviews</label>

                <input
                  type="number"
                  placeholder="120"
                  value={productReviews}
                  onChange={(e) =>
                    setProductReviews(e.target.value)
                  }
                />
              </div>

              <div className="add-form-group image-upload-group">

                <label>Product Image</label>

                <label className="image-upload-button">

                  <i className="bi bi-cloud-arrow-up"></i>

                  <span>
                    {imageName
                      ? imageName
                      : "Choose Product Image"}
                  </span>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />

                </label>

              </div>

            </div>

            {productImage && (
              <div className="upload-preview">

                <span>Image Preview</span>

                <div className="preview-image-box">
                  <img
                    src={productImage}
                    alt="Preview"
                  />
                </div>

              </div>
            )}

            <button
              type="submit"
              className="add-product-button"
            >
              <i className="bi bi-plus-circle"></i>
              Add Product
            </button>

          </form>

        </div>

        {/* ================= COLLECTION HEADING ================= */}

        <div
          className="shop-heading"
          data-aos="fade-up"
        >
          <span>OUR COLLECTION</span>

          <h2>
            Fashion Made
            <br />
            <strong>For Every Moment</strong>
          </h2>

          <p>
            From everyday essentials to statement outfits,
            discover carefully selected styles for every occasion.
          </p>
        </div>

        {/* ================= FILTER ================= */}

        <div
          className="filter-buttons"
          data-aos="fade-up"
        >

          <button
            className={filter === "All" ? "active" : ""}
            onClick={() => setFilter("All")}
          >
            All Collection
          </button>

          <button
            className={filter === "Men" ? "active" : ""}
            onClick={() => setFilter("Men")}
          >
            👔 Men's Fashion
          </button>

          <button
            className={filter === "Women" ? "active" : ""}
            onClick={() => setFilter("Women")}
          >
            👗 Women's Fashion
          </button>

        </div>

        {/* ================= PRODUCTS ================= */}

        <div className="row g-4">

          {filteredProducts.map((product, index) => (

            <div
              className="col-xl-3 col-lg-4 col-md-6"
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={(index % 4) * 100}
            >

              <div className="product-card">

                <div className="product-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <span className="product-badge">
                    {product.custom ? "ADDED" : "NEW"}
                  </span>

                  <button
                    className="wishlist"
                    onClick={() =>
                      toggleWishlist(product.id)
                    }
                  >
                    <i
                      className={
                        wishlist.includes(product.id)
                          ? "bi bi-heart-fill"
                          : "bi bi-heart"
                      }
                    ></i>
                  </button>

                  <div className="product-overlay">

                    <button>
                      <i className="bi bi-eye"></i>
                      Quick View
                    </button>

                  </div>

                </div>

                <div className="product-info">

                  <span className="product-category">
                    {product.category === "Men"
                      ? "👔 Men's Fashion"
                      : "👗 Women's Fashion"}
                  </span>

                  <h3>{product.name}</h3>

                  <div className="product-rating">

                    <div className="stars">

                      {[1, 2, 3, 4, 5].map((star) => (

                        <i
                          key={star}
                          className={
                            star <=
                            Math.round(product.rating)
                              ? "bi bi-star-fill"
                              : "bi bi-star"
                          }
                        ></i>

                      ))}

                    </div>

                    <strong>
                      {product.rating}
                    </strong>

                    <span>
                      ({product.reviews})
                    </span>

                  </div>

                  <div className="product-bottom">

                    <strong className="product-price">
                      ₹{product.price.toLocaleString("en-IN")}
                    </strong>

                    <button className="add-button">
                      <i className="bi bi-bag"></i>
                      Add
                    </button>

                  </div>

                  {product.custom && (
                    <button
                      className="delete-product-button"
                      onClick={() =>
                        handleDeleteProduct(product.id)
                      }
                    >
                      <i className="bi bi-trash3"></i>
                      Delete Product
                    </button>
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* ================= MEN COLLECTION ================= */}

        <div
          className="category-section"
          data-aos="fade-up"
        >

          <div className="category-title">

            <span>MEN'S COLLECTION</span>

            <h2>
              👔 Men's <strong>Fashion</strong>
            </h2>

          </div>

          <div className="category-list">

            <span>T-Shirts</span>
            <span>Shirts</span>
            <span>Polo T-Shirts</span>
            <span>Jeans</span>
            <span>Trousers / Pants</span>
            <span>Cargo Pants</span>
            <span>Shorts</span>
            <span>Hoodies</span>
            <span>Sweatshirts</span>
            <span>Jackets</span>
            <span>Blazers</span>
            <span>Traditional Wear – Kurta, Veshti</span>
            <span>Formal Wear</span>

          </div>

        </div>

        {/* ================= WOMEN COLLECTION ================= */}

        <div
          className="category-section women-section"
          data-aos="fade-up"
        >

          <div className="category-title">

            <span>WOMEN'S COLLECTION</span>

            <h2>
              👗 Women's <strong>Fashion</strong>
            </h2>

          </div>

          <div className="category-list">

            <span>Tops</span>
            <span>T-Shirts</span>
            <span>Shirts</span>
            <span>Jeans</span>
            <span>Trousers / Pants</span>
            <span>Skirts</span>
            <span>Dresses</span>
            <span>Kurtis</span>
            <span>Sarees</span>
            <span>Salwar Suits</span>
            <span>Palazzo</span>
            <span>Jumpsuits</span>
            <span>Hoodies</span>
            <span>Jackets</span>
            <span>Traditional Wear</span>

          </div>

        </div>

        {/* ================= BENEFITS ================= */}

        <div className="shop-benefits">

          <div
            className="benefit-card"
            data-aos="fade-up"
          >
            <div className="benefit-icon">
              <i className="bi bi-truck"></i>
            </div>

            <div>
              <h4>Fast Delivery</h4>
              <p>
                Quick and reliable delivery to your doorstep.
              </p>
            </div>
          </div>

          <div
            className="benefit-card"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="benefit-icon">
              <i className="bi bi-shield-check"></i>
            </div>

            <div>
              <h4>Secure Shopping</h4>
              <p>
                Your shopping experience stays safe and secure.
              </p>
            </div>
          </div>

          <div
            className="benefit-card"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="benefit-icon">
              <i className="bi bi-arrow-repeat"></i>
            </div>

            <div>
              <h4>Easy Returns</h4>
              <p>
                Simple return experience for selected products.
              </p>
            </div>
          </div>

        </div>

        {/* ================= NEWSLETTER ================= */}

        <div
          className="shop-newsletter"
          data-aos="zoom-in"
        >

          <span>STAY IN STYLE</span>

          <h2>
            Get the latest
            <br />
            <strong>fashion updates.</strong>
          </h2>

          <p>
            Subscribe for new arrivals,
            exclusive collections and special offers.
          </p>

          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >

            <input
              type="email"
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
  );
};

export default Shop;