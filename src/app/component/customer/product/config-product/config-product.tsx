import React from "react";
import { Product } from "../../../../types/product";

function ConfigProduct(props: { value: Product }) {
  console.log(props.value);

  return (
    <div className="row ">
      <div className="col-sm-6">
        <div className="icon-box icon-box-card text-center">
          <div className="icon-box-content">
            {/* <h3 className="icon-box-title">(New) Core i3-1115G4, Ram 4GB, SSD 256GB, FHD </h3> */}
            <p>{props.value.configuration}</p>

            <p className="box-price">{props.value.price_sale} VNĐ</p>
          </div>
        </div>
      </div>

      {/* <div className="col-sm-6">
        <div className="icon-box icon-box-card text-center">
          <div className="icon-box-content">
            <p>(New) Core i3-1115G4, Ram 4GB, SSD 256GB, FHD</p>

            <p className="box-price">18.600.000đ</p>
          </div>
        </div>
      </div>

      <div className="col-sm-6">
        <div className="icon-box icon-box-card text-center">
          <div className="icon-box-content">
            <p>(New) Core i3-1115G4, Ram 4GB, SSD 256GB, FHD</p>

            <p className="box-price">18.600.000đ</p>
          </div>
        </div>
      </div>
       */}
    </div>
  );
}

export default ConfigProduct;
