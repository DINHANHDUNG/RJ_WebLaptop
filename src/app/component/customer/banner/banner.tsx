import React, { useEffect } from "react";

function Banner() {
  return (
    <div className="intro-slider-container">
      <div
        className="intro-slider owl-carousel owl-simple owl-nav-inside"
        data-toggle="owl"
        data-owl-options='{
                        "nav": false,
                        "lazyLoad": false,
                        "responsive": {
                            "992": {
                                "nav": true
                            }
                        }
                    }'
      >
        <div
          className="intro-slide"
          style={{
            backgroundImage:
              "url(https://tinhocmiennam.com/wp-content/uploads/2018/06/laptop-banner.jpg)",
          }}
        ></div>
        <div
          className="intro-slide"
          style={{
            backgroundImage:
              "url(https://theme.hstatic.net/200000251697/1000655457/14/smallbanner_img1.jpg?v=277)",
          }}
        ></div>
        <div
          className="intro-slide"
          style={{
            backgroundImage:
              "url(https://www.laptopdealer.vn/image/banner-1-ee.jpg)",
          }}
        ></div>
      </div>

      <span className="slider-loader"></span>
    </div>
  );
}

export default Banner;
