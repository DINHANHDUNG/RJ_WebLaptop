import React from "react";
import { Link } from "react-router-dom";
import ItemProduct from "../customer/product/item-product/item-product";

function SlickCarouselProduct() {
  return (
    <div>
      <h2 className="title title-border">Sản phẩm bán chạy</h2>

      <div
        className="owl-carousel owl-simple owl-nav-top carousel-equal-height carousel-with-shadow"
        data-toggle="owl"
        data-owl-options='{
        "nav": true, 
        "dots": false,
        "margin": 20,
        "loop": true,
        "autoplayTimeout": 3000,
        "responsive": {
            "0": {
                "items":1
            },
            "480": {
                "items":1
            },
            "768": {
                "items":3
            },
            "1200": {
                "items":4
            }
        }
    }'
      >
        <ItemProduct />

        <ItemProduct />

        <ItemProduct />

        <ItemProduct />

        <ItemProduct />

        {/* Link ảnh
        id
        title
        desciption
        price */}

        {/* <div className="product">
          <figure className="product-media">
            <Link to="/detailproduct/1">
              <img
                src="assets/images/demos/demo-13/products/product-8.jpg"
                alt="Product image"
                className="product-image"
              />
            </Link>
          </figure>

          <div className="product-body">
            <h3 className="product-title">
              <Link to="/detailproduct/1">
                Bose - SoundLink Bluetooth Speaker
              </Link>
            </h3>
            <p>
              Chinh phục mọi ánh nhìn với vẻ ngoài ấn tượng Laptop Dell này được
              chế tác từ chất liệu nhựa…
            </p>
            <div className="product-price">$79.99</div>
          </div>
        </div>

        <div className="product">
          <figure className="product-media">
            <Link to="/detailproduct/1">
              <img
                src="assets/images/demos/demo-13/products/product-9.jpg"
                alt="Product image"
                className="product-image"
              />
            </Link>
          </figure>

          <div className="product-body">
            <h3 className="product-title">
              <Link to="/detailproduct/1">
                Apple - 11 Inch iPad Pro with Wi-Fi 256GB{" "}
                <p>
                  Chinh phục mọi ánh nhìn với vẻ ngoài ấn tượng Laptop Dell này
                  được chế tác từ chất liệu nhựa…
                </p>
              </Link>
            </h3>
            <div className="product-price">$899.99</div>
          </div>
        </div>

        <div className="product">
          <figure className="product-media">
            <Link to="/detailproduct/1">
              <img
                src="assets/images/demos/demo-13/products/product-10.jpg"
                alt="Product image"
                className="product-image"
              />
            </Link>
          </figure>

          <div className="product-body">
            <h3 className="product-title">
              <Link to="/detailproduct/1">Google - Pixel 3 XL 128GB</Link>
            </h3>
            <p>
              Chinh phục mọi ánh nhìn với vẻ ngoài ấn tượng Laptop Dell này được
              chế tác từ chất liệu nhựa…
            </p>

            <div className="product-price">
              $899.99
              <span className="old-price">Giá cũ $410.00</span>
            </div>
          </div>
        </div>

        <div className="product">
          <figure className="product-media">
            <Link to="/detailproduct/1">
              <img
                src="assets/images/demos/demo-13/products/product-6.jpg"
                alt="Product image"
                className="product-image"
              />
            </Link>
          </figure>

          <div className="product-body">
            <h3 className="product-title">
              <Link to="/detailproduct/1">Neato Robotics</Link>
            </h3>
            <p>
              Chinh phục mọi ánh nhìn với vẻ ngoài ấn tượng Laptop Dell này được
              chế tác từ chất liệu nhựa…
            </p>
            <div className="product-price">$399.00</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default SlickCarouselProduct;
