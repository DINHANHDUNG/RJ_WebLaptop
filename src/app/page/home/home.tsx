import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProductHomePage } from "../../../features/homepage";
import { useAppDispatch, useAppSelector } from "../../commom/hooks";
import { productHomePageStore } from "../../commom/use-selector";
import Banner from "../../component/customer/banner/banner";
import BoxPrice from "../../component/customer/product/box-price/box-price";
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
    { min_price: 8000000, max_price: 1000000 },
    { min_price: 10000000, max_price: 15000000 },
    { min_price: 15000000, max_price: null },
  ] as Array<{ min_price: number; max_price: number | null }>;

  console.log(products);

  function toggleBoxPrice(value: {
    min_price: number;
    max_price: number | null;
  }) {
    console.log(value);
    history("/search/" + `${null}` + "/" + value.min_price + "/" + value.max_price);
  }

  return (
    <div className="container">
      <Banner />
      <br />
      <br />

      <h2 className="title title-border">LAPTOP THEO KHOẢNG GIÁ</h2>
      <Row gutter={[16, 8]}>
        {arrPrice.map((val) => (
          <Col span={4}>
            <BoxPrice value={val} toggle={(value) => toggleBoxPrice(value)} />
          </Col>
        ))}
      </Row>
      {products.listproducthomepage.map((val) =>
        val.products.length > 0 ? <SlickCarouselHomePage value={val} /> : null
      )}

      <br />
      {/* <SlickCarouselProduct />

      <SlickCarouselProduct />

      <SlickCarouselProduct /> */}
    </div>
  );
}

export default Home;
