import { Drawer, Layout } from "antd";
import Sider from "antd/lib/layout/Sider";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import DetailProduct from "../../../page/detail-product/detail-product";
import Error404 from "../../../page/Error404/error404";
import Home from "../../../page/home/home";
import ProductByCategoryProduct from "../../../page/product-by-category-product/product-by-category-product";
import ProductByCategory from "../../../page/product-by-category/product-by-category";
import ProductSearch from "../../../page/product-search/product-search";
import Banner from "../../customer/banner/banner";
import Footer from "../../customer/footer/footer";
import HeaderCustomer from "../../customer/header/header-component";
import Mobilemenu from "../../customer/menu/mobile-menu/mobilemenu";
import SlickCarouselProduct from "../../slickCarousel/slickCarouselProduct";
import Sidenav from "../admin/sidenav";

function LayoutCustomer() {
  return (
    <div style={{ position: "relative" }}>
      <div className="page-wrapper">
        <HeaderCustomer />
        <Routes>
          <Route index element={<Home />} />
          <Route path="detailproduct/:ID" element={<DetailProduct />}></Route>
          <Route path="danhmuc/:ID" element={<ProductByCategory />}></Route>
          <Route
            path="danhmucsp/:ID"
            element={<ProductByCategoryProduct />}
          ></Route>
          <Route
            path="search/:productKey/:minprice/:maxprice"
            element={<ProductSearch />}
          ></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
        <Footer />
      </div>
      <Mobilemenu />

      <button id="scroll-top" title="Back to Top">
        <i className="fa-solid fa-angles-up"></i>
      </button>

      <div className="box-bottom-button">
        {/* <a href="https://www.facebook.com/messages/t/775541669472633"> */}
        <a
          // href="#"
          onClick={() => {
            window.open("https://www.facebook.com/messages/t/775541669472633");
          }}
        >
          <img
            src="https://laptoptcc.com/wp-content/uploads/2021/08/mess-facebook.png"
            alt="FB"
          />
        </a>

        <a
          // href="#"
          onClick={() => {
            window.open("https://zalo.me/0355515599");
          }}
        >
          <img
            src="https://laptoptcc.com/wp-content/uploads/2021/05/zalo.png"
            alt="FB"
          />
        </a>
      </div>
    </div>
  );
}

export default LayoutCustomer;
