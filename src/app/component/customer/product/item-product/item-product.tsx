import React from "react";
import { Link } from "react-router-dom";
import { Numberformat } from "../../../../commom/hooks";
import { Product } from "../../../../types/product";

interface propsProduct {
  value: Product;
}
function ItemProduct(props: propsProduct) {
  console.log( props.value);
  
  return (
    <div className="product">
      <figure className="product-media">
        {/* <span className="product-label label-top">Top</span> */}
        <Link to={"/detailproduct/" + props.value.id}>
          {/* <img
            src="https://png.pngtree.com/png-clipart/20190117/ourlarge/pngtree-black-laptop-beautiful-laptop-hand-drawn-laptop-cartoon-laptop-png-image_417215.jpg"
            alt="Product image"
            className="product-image"
          /> */}

          <img
            src={
              "http://103.173.155.138:5500/images/" +
              props.value.productimages[0]?.imagename
            }
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
          <Link to="/detailproduct/1">{props.value.productname}</Link>
        </h3>
        <p>{props.value.describe}</p>
        <div className="product-price">
          {Numberformat(props.value.price_sale)} VNĐ
          {/* <span className="old-price">Giá cũ {props.value.price_origin} VNĐ</span> */}
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;
