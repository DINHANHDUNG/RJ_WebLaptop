import { Image } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { ProductHomePage } from "../../types/product-home-page";
interface propsSlide {
  value: ProductHomePage;
}
function SlickDetailProduct() {
  return (
    <div
      className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
      data-toggle="owl"
      data-owl-options='{
        "nav": true, 
        "dots": false,
        "margin": 20,
        "loop": true,
        "autoplayTimeout": 3000,
        autoplay: false,
        "responsive": {
            "0": {
                "items":4
            },
            "480": {
                "items":4
            },
            "768": {
                "items":4
            },
            "1200": {
                "items":4
            }
        }
    }'
    >
      <div className="product">
        <figure className="product-media">
          {/* <span className="product-label label-top">Top</span> */}
          <Link to={"/detailproduct/" + 96}>
            {/* <img
            src="https://png.pngtree.com/png-clipart/20190117/ourlarge/pngtree-black-laptop-beautiful-laptop-hand-drawn-laptop-cartoon-laptop-png-image_417215.jpg"
            alt="Product image"
            className="product-image"
          /> */}

            <img
              src="http://103.173.155.138:5500/images/6261c3c87a784944a838e737c3752825.jpg"
              alt="Product image"
              className="product-image"
            />
          </Link>
          {/* <Link to="/detailproduct/1"></Link> */}
        </figure>

        <div className="product-body">
          {/* <div className="product-cat">
              <a href="#">Laptops</Link>
            </div> */}
          <h3 className="product-title">
            <Link title={"Test"} to={"/detailproduct/" + 96}>
              Test
            </Link>
          </h3>
          <p className="product-describe">Test</p>
          <div className="product-price">
            10000000 VNĐ
            {/* <span className="old-price">Giá cũ {props.value.price_origin} VNĐ</span> */}
          </div>
        </div>

        
      </div>

      <div className="product">
        <figure className="product-media">
          {/* <span className="product-label label-top">Top</span> */}
          <Link to={"/detailproduct/" + 96}>
            {/* <img
            src="https://png.pngtree.com/png-clipart/20190117/ourlarge/pngtree-black-laptop-beautiful-laptop-hand-drawn-laptop-cartoon-laptop-png-image_417215.jpg"
            alt="Product image"
            className="product-image"
          /> */}

            <img
              src="http://103.173.155.138:5500/images/6261c3c87a784944a838e737c3752825.jpg"
              alt="Product image"
              className="product-image"
            />
          </Link>
          {/* <Link to="/detailproduct/1"></Link> */}
        </figure>

        <div className="product-body">
          {/* <div className="product-cat">
              <a href="#">Laptops</Link>
            </div> */}
          <h3 className="product-title">
            <Link title={"Test"} to={"/detailproduct/" + 96}>
              Test
            </Link>
          </h3>
          <p className="product-describe">Test</p>
          <div className="product-price">
            10000000 VNĐ
            {/* <span className="old-price">Giá cũ {props.value.price_origin} VNĐ</span> */}
          </div>
        </div>

        
      </div>

      <div className="product">
        <figure className="product-media">
          {/* <span className="product-label label-top">Top</span> */}
          <Link to={"/detailproduct/" + 96}>
            {/* <img
            src="https://png.pngtree.com/png-clipart/20190117/ourlarge/pngtree-black-laptop-beautiful-laptop-hand-drawn-laptop-cartoon-laptop-png-image_417215.jpg"
            alt="Product image"
            className="product-image"
          /> */}

            <img
              src="http://103.173.155.138:5500/images/6261c3c87a784944a838e737c3752825.jpg"
              alt="Product image"
              className="product-image"
            />
          </Link>
          {/* <Link to="/detailproduct/1"></Link> */}
        </figure>

        <div className="product-body">
          {/* <div className="product-cat">
              <a href="#">Laptops</Link>
            </div> */}
          <h3 className="product-title">
            <Link title={"Test"} to={"/detailproduct/" + 96}>
              Test
            </Link>
          </h3>
          <p className="product-describe">Test</p>
          <div className="product-price">
            10000000 VNĐ
            {/* <span className="old-price">Giá cũ {props.value.price_origin} VNĐ</span> */}
          </div>
        </div>

        
      </div>

      <div className="product">
        <figure className="product-media">
          {/* <span className="product-label label-top">Top</span> */}
          <Link to={"/detailproduct/" + 96}>
            {/* <img
            src="https://png.pngtree.com/png-clipart/20190117/ourlarge/pngtree-black-laptop-beautiful-laptop-hand-drawn-laptop-cartoon-laptop-png-image_417215.jpg"
            alt="Product image"
            className="product-image"
          /> */}

            <img
              src="http://103.173.155.138:5500/images/6261c3c87a784944a838e737c3752825.jpg"
              alt="Product image"
              className="product-image"
            />
          </Link>
          {/* <Link to="/detailproduct/1"></Link> */}
        </figure>

        <div className="product-body">
          {/* <div className="product-cat">
              <a href="#">Laptops</Link>
            </div> */}
          <h3 className="product-title">
            <Link title={"Test"} to={"/detailproduct/" + 96}>
              Test
            </Link>
          </h3>
          <p className="product-describe">Test</p>
          <div className="product-price">
            10000000 VNĐ
            {/* <span className="old-price">Giá cũ {props.value.price_origin} VNĐ</span> */}
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default SlickDetailProduct;
