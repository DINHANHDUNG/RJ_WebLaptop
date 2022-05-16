import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProductHomePage } from "../../../features/homepage";
import { useAppDispatch, useAppSelector } from "../../commom/hooks";
import { productHomePageStore } from "../../commom/use-selector";
import Banner from "../../component/customer/banner/banner";
import Banner2 from "../../component/customer/banner/banner2";
import BoxPrice from "../../component/customer/product/box-price/box-price";
import SlickCarousel from "../../component/slickCarousel/slickCarouselFirm";
import SlickCarouselProduct from "../../component/slickCarousel/slickCarouselProduct";
import SlickDetailProduct from "../../component/slickCarousel/slickDetailProduct";
import SlickCarouselHomePage from "../../component/slickCarousel/slickProductHomepage";

function Home() {
  const dispatch = useAppDispatch();
  const history = useNavigate();
  const products = useAppSelector(productHomePageStore);
  useEffect(() => {
    dispatch(getProductHomePage());
  }, []);

  const arrPrice = [
    { min_price: 2000000, max_price: 4000000 },
    { min_price: 4000000, max_price: 6000000 },
    { min_price: 6000000, max_price: 8000000 },
    { min_price: 8000000, max_price: 10000000 },
    { min_price: 10000000, max_price: 15000000 },
    { min_price: 15000000, max_price: null },
  ] as Array<{ min_price: number; max_price: number | null }>;

  console.log(products);

  function toggleBoxPrice(value: {
    min_price: number;
    max_price: number | null;
  }) {
    console.log(value);
    history(
      "/search/" + `${null}` + "/" + value.min_price + "/" + value.max_price
    );
  }

  return (
    <div className="container">
      {/* <Banner /> */}
      <Banner2 />
      <br />
      <br />

      <h2 className="title title-border">LAPTOP THEO KHOẢNG GIÁ</h2>
      <Row gutter={[16, 8]}>
        {arrPrice.map((val) => (
          <Col xs={12} md={4}>
            <BoxPrice value={val} toggle={(value) => toggleBoxPrice(value)} />
          </Col>
        ))}
      </Row>
      {products.listproducthomepage.slice(0, 5).map((val) =>
        val.products.length > 0 ? <SlickCarouselHomePage value={val} /> : null
      )}

      <br />

      {/* {products.listproducthomepage.map((val) =>
        val.products.length > 0 ? <SlickCarouselProduct value={val} /> : null
      )} */}

      <br />
      {/* <SlickCarouselProduct />

      <SlickCarouselProduct />

      <SlickCarouselProduct /> */}

      {/* <SlickDetailProduct />

      <div className="owl-carousel owl-theme">
        <div className="item">
          <h4>1</h4>
        </div>
        <div className="item">
          <h4>2</h4>
        </div>
        <div className="item">
          <h4>3</h4>
        </div>
        <div className="item">
          <h4>4</h4>
        </div>
        <div className="item">
          <h4>5</h4>
        </div>
        <div className="item">
          <h4>6</h4>
        </div>
        <div className="item">
          <h4>7</h4>
        </div>
        <div className="item">
          <h4>8</h4>
        </div>
        <div className="item">
          <h4>9</h4>
        </div>
        <div className="item">
          <h4>10</h4>
        </div>
        <div className="item">
          <h4>11</h4>
        </div>
        <div className="item">
          <h4>12</h4>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
