import React from "react";
import { Link } from "react-router-dom";

function ItemProduct() {
  return (
    <div className="product">
      <figure className="product-media">
        {/* <span className="product-label label-top">Top</span> */}
        <Link to="/detailproduct/1">
          <img
            src="https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04820-dell-inspiron-5410-laptoptcc-1-1.jpg"
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
          <Link to="/detailproduct/1">MacBook Pro 13" Display, i5</Link>
        </h3>
        <p>
          Chinh phục mọi ánh nhìn với vẻ ngoài ấn tượng Laptop Dell này được chế
          tác từ chất liệu nhựa…
        </p>
        <div className="product-price">
          $1,199.00
          <span className="old-price">Giá cũ $410.00</span>
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;
