import { Image } from "antd";
import React from "react";
import Slider from "react-slick";

function SlickCarousel(props: { value: any }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  console.log(props.value.filter((val: any) => val.type != "1"));

  return (
    <div>
      <Slider {...settings}>
        {props.value
          .filter((val: any) => val.type != "1")
          ?.map((v: any) => (
            <div>
              <Image
                width={"100%"}
                // height={100}
                src={"http://103.173.155.138:5500/images/" + v.imagename}
                style={{ padding: "10px" }}
              />
            </div>
          ))}

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
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
