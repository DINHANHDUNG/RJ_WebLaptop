import { Image } from "antd";
import React from "react";
import Slider from "react-slick";

function SlickCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    pauseOnHover: true,
    autoplay: true,
    speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image
            width={"100%"}
            // height={100}
            src={`https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04837-dell-inspiron-5410-laptoptcc-2048x1152.jpg`}
            style={{ padding: "10px" }}
          />
        </div>
        <div>
          <Image
            width={"100%"}
            // height={100}
            src={`https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04842-dell-inspiron-5410-laptoptcc-600x338.jpg`}
            style={{ padding: "10px" }}
          />
        </div>
        <div>
          <Image
            width={"100%"}
            // height={100}
            src={`https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04844-dell-inspiron-5410-laptoptcc-600x338.jpg`}
            style={{ padding: "10px" }}
          />
        </div>
        <div>
          <Image
            width={"100%"}
            // height={100}
            src={`https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04837-dell-inspiron-5410-laptoptcc-600x338.jpg`}
            style={{ padding: "10px" }}
          />
        </div>

        <div>
          <Image
            width={"100%"}
            // height={100}
            src={`https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04832-dell-inspiron-5410-laptoptcc-600x338.jpg`}
            style={{ padding: "10px" }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default SlickCarousel;


function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", }}
      onClick={onClick}
    />
  );
}