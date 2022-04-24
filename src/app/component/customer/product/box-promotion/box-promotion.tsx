import React from "react";
import { Product } from "../../../../types/product";

function BoxPromotion(props: { value: Product }) {
  return (
    <div className="row ">
      <div className="col-sm-12">
        <div className="icon-box icon-box-card ">
          <div className="icon-box-content">
            <span className="title-boxpromotion">Quà tặng / Khuyến mại</span>
            <br />
            {props.value.promotion.promotiondetails?.map((val: any) => (
              <p>✔ {val.promotiondetail_name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxPromotion;
