import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../../../types/product";

interface propsProduct {
  value: Product;
}
function ItemProduct(props: propsProduct) {
  return (
    <div className="product">
      <figure className="product-media">
        {/* <span className="product-label label-top">Top</span> */}
        <Link to={"/detailproduct/" + props.value.id}>
          <img
            src="https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04820-dell-inspiron-5410-laptoptcc-1-1.jpg"
            alt="Product image"
            className="product-image"
          />
          {/* 
<img
            src={"http://103.173.155.138:5500/images/" + props.value.}
            alt="Product image"
            className="product-image"
          /> */}
        </Link>
        {/* <Link to="/detailproduct/1"></Link> */}
      </figure>

      <div className="product-body">
        {/* <div className="product-cat">
              <a href="#">Laptops</Link>
            </div> */}
        <h3 className="product-title">
          <Link to="/detailproduct/1">{props.value.productname}</Link>
        </h3>
        <p>{props.value.describe}</p>
        <div className="product-price">
          {props.value.price_sale} VNĐ
          {/* <span className="old-price">Giá cũ {props.value.price_origin} VNĐ</span> */}
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;
