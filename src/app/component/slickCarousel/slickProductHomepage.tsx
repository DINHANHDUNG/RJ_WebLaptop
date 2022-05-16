import { Image } from "antd";
import React from "react";
import Slider from "react-slick";
import { ProductHomePage } from "../../types/product-home-page";
import ItemProduct from "../customer/product/item-product/item-product";
import "./slick.css";
interface propsSlide {
  value: ProductHomePage;
}
function SlickCarouselHomePage(props: propsSlide) {
  console.log("props", props);

  const settings = {
    // dots: true,
    arrows: true,
    // infinite: true,
    slidesToShow:
      props.value.products.length < 3
        ? props.value.products.length < 2
          ? props.value.products.length < 1
            ? 0
            : 1
          : 2
        : 3,
    slidesToScroll: 3,
    pauseOnHover: true,
    autoplay: true,
    speed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <h2 className="title title-border" style={{ marginTop: "30px" }}>
        {props.value.categoryname}
      </h2>
      <Slider {...settings}>
        {props.value.products.map((e) => (
          <div className="slide-home-page" style={{ margin: "10px" }}>
            <ItemProduct value={e} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlickCarouselHomePage;

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
