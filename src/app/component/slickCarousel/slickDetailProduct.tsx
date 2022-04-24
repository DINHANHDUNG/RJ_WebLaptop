import { Image } from "antd";
import React from "react";

function SlickDetailProduct() {
  return (
    <div
      className=" owl-simple owl-nav-top carousel-equal-height carousel-with-shadow"
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
      <Image
        width={"100%"}
        // height={100}
        src={`https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04837-dell-inspiron-5410-laptoptcc-2048x1152.jpg`}
      />

      <Image
        width={"100%"}
        // height={100}
        src={`https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04837-dell-inspiron-5410-laptoptcc-2048x1152.jpg`}
      />

      <Image
        width={"100%"}
        // height={100}
        src={`https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04837-dell-inspiron-5410-laptoptcc-2048x1152.jpg`}
      />

      <Image
        width={"100%"}
        // height={100}
        src={`https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04837-dell-inspiron-5410-laptoptcc-2048x1152.jpg`}
      />
    </div>
  );
}

export default SlickDetailProduct;
