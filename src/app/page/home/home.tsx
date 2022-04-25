import React, { useEffect } from "react";
import { getProductHomePage } from "../../../features/homepage";
import { useAppDispatch, useAppSelector } from "../../commom/hooks";
import { productHomePageStore } from "../../commom/use-selector";
import Banner from "../../component/customer/banner/banner";
import SlickCarouselProduct from "../../component/slickCarousel/slickCarouselProduct";
import SlickDetailProduct from "../../component/slickCarousel/slickDetailProduct";
import SlickCarouselHomePage from "../../component/slickCarousel/slickProductHomepage";

function Home() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(productHomePageStore);
  useEffect(() => {
    dispatch(getProductHomePage());
  }, []);

  console.log(products);

  return (
    <div className="container">
      <Banner />
      <br />
      <br />

      {products.listproducthomepage.map((val) =>
        val.products.length > 0 ? <SlickCarouselHomePage value={val} /> : null
      )}
      {/* <SlickCarouselProduct />

      <SlickCarouselProduct />

      <SlickCarouselProduct /> */}
    </div>
  );
}

export default Home;
