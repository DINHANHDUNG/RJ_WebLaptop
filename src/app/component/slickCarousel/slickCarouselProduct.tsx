import React from "react";
import { Link } from "react-router-dom";
import { ProductHomePage } from "../../types/product-home-page";
import ItemProduct from "../customer/product/item-product/item-product";

interface propsSlide {
  value: ProductHomePage;
}
function SlickCarouselProduct(props: propsSlide) {
  console.log("props", props);

  return (
    <div>
      {props.value.products.length > 0 ? (
        <>
          <h2 className="title title-border">{props.value.categoryname}</h2>

          <div
            className="owl-carousel owl-simple owl-nav-top carousel-equal-height carousel-with-shadow"
            data-toggle="owl"
            data-owl-options='{
                                    "nav": true, 
                                    "dots": false,
                                    "margin": 20,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":2
                                        },
                                        "480": {
                                            "items":2
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
            {props.value.products.map((e) => (
              <ItemProduct value={e} />
            ))}

          </div>
        </>
      ) : null}
    </div>
  );
}

export default SlickCarouselProduct;
