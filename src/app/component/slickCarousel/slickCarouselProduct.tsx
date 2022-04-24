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
        {/* <ItemProduct />

        <ItemProduct />

        <ItemProduct />

        <ItemProduct />

        <ItemProduct /> */}
      </div>
    </div>
  );
}

export default SlickCarouselProduct;
