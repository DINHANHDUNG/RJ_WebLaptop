import { Drawer, Layout } from "antd";
import Sider from "antd/lib/layout/Sider";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import DetailProduct from "../../../page/detail-product/detail-product";
import Error404 from "../../../page/Error404/error404";
import Home from "../../../page/home/home";
import ProductByCategoryProduct from "../../../page/product-by-category-product/product-by-category-product";
import ProductByCategory from "../../../page/product-by-category/product-by-category";
import Banner from "../../customer/banner/banner";
import Footer from "../../customer/footer/footer";
import HeaderCustomer from "../../customer/header/header-component";
import Mobilemenu from "../../customer/menu/mobile-menu/mobilemenu";
import SlickCarouselProduct from "../../slickCarousel/slickCarouselProduct";
import Sidenav from "../admin/sidenav";

function LayoutCustomer() {
  return (
    <div>
      <div className="page-wrapper">
        <HeaderCustomer  />
        <Routes>
          <Route index element={<Home />} />
          <Route path="detailproduct/:ID" element={<DetailProduct />}></Route>
          <Route path="danhmuc/:ID" element={<ProductByCategory />}></Route>
          <Route
            path="danhmucsp/:ID"
            element={<ProductByCategoryProduct />}
          ></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
        <Footer />
      </div>
      <Mobilemenu />
      
      <button id="scroll-top" title="Back to Top">
        <i className="fa-solid fa-angles-up"></i>
      </button>
    </div>
  );
}

export default LayoutCustomer;
