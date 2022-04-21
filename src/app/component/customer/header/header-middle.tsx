import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../../../assets/images/logo/logo2.png";

function HeaderMiddle() {
  return (
    <div className="header-middle">
      <div className="container">
        <div className="header-left">
          <button className="mobile-menu-toggler">
            <span className="sr-only">Toggle mobile menu</span>
            <i className="fa-solid fa-align-justify"></i>
          </button>
          <a href="/">
            <img
              src={logo2}
              alt="Logo"
              width="105"
              height="25"
              // onClick={() => navigate("/")}
            />
          </a>
          {/* <Link to="/" className="logo"></Link> */}
        </div>

        <div className="header-center">
          <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
            <a href="#" className="search-toggle" role="button">
              {/* <i className="fa-light fa-magnifying-glass"></i> */}
              <i className="fa-brands fa-searchengin"></i>
            </a>
            <form action="#" method="get">
              <div className="header-search-wrapper search-wrapper-wide">
                <div className="select-custom">
                  <select id="cat" name="cat">
                    <option value="">Tất cả danh mục</option>
                    <option value="1">Fashion</option>
                    <option value="2">- Women</option>
                    <option value="3">- Men</option>
                    <option value="4">- Jewellery</option>
                    <option value="5">- Kids Fashion</option>
                    <option value="6">Electronics</option>
                    <option value="7">- Smart TVs</option>
                    <option value="8">- Cameras</option>
                    <option value="9">- Games</option>
                    <option value="10">Home &amp; Garden</option>
                    <option value="11">Motors</option>
                    <option value="12">- Cars and Trucks</option>
                    <option value="15">- Boats</option>
                    <option value="16">- Auto Tools &amp; Supplies</option>
                  </select>
                </div>
                <label htmlFor="q" className="sr-only">
                  Search
                </label>
                <input
                  type="search"
                  className="form-control"
                  name="q"
                  id="q"
                  placeholder="Tìm kiếm sản phẩm ..."
                  required
                />
                <button className="btn btn-primary" type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Cart */}
        <div className="header-right">
          {/* <div className="header-dropdown-link">
            <div className="dropdown cart-dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <span
                  className="cart-count"
                  style={{ backgroundColor: "#258cae" }}
                >
                  2
                </span>
                <span className="cart-txt "></span>
              </a>

              <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-cart-products">
                  <div className="product">
                    <div className="product-cart-details">
                      <h4 className="product-title">
                        <a href="product.html">
                          Beige knitted elastic runner shoes
                        </a>
                      </h4>

                      <span className="cart-product-info">
                        <span className="cart-product-qty">1</span>x $84.00
                      </span>
                    </div>

                    <figure className="product-image-container">
                      <a href="product.html" className="product-image">
                        <img
                          src="assets/images/products/cart/product-1.jpg"
                          alt="product"
                        />
                      </a>
                    </figure>
                    <a href="#" className="btn-remove" title="Remove Product">
                      <i className="icon-close"></i>
                    </a>
                  </div>

                  <div className="product">
                    <div className="product-cart-details">
                      <h4 className="product-title">
                        <a href="product.html">
                          Blue utility pinafore denim dress
                        </a>
                      </h4>

                      <span className="cart-product-info">
                        <span className="cart-product-qty">1</span>x $76.00
                      </span>
                    </div>

                    <figure className="product-image-container">
                      <a href="product.html" className="product-image">
                        <img
                          src="assets/images/products/cart/product-2.jpg"
                          alt="product"
                        />
                      </a>
                    </figure>
                    <a href="#" className="btn-remove" title="Remove Product">
                      <i className="icon-close"></i>
                    </a>
                  </div>
                </div>

                <div className="dropdown-cart-total">
                  <span>Total</span>

                  <span className="cart-total-price">$160.00</span>
                </div>

                <div className="dropdown-cart-action">
                  <a href="cart.html" className="btn btn-primary">
                    View Cart
                  </a>
                  <a href="checkout.html" className="btn btn-outline-primary-2">
                    <span>Checkout</span>
                    <i className="icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HeaderMiddle;
