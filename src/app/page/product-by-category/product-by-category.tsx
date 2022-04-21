import React from "react";
import { Link } from "react-router-dom";
import ItemProduct from "../../component/customer/product/item-product/item-product";

function ProductByCategory() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9 col-xl-4-5col">
          <div className="toolbox" style={{ marginTop: "10px" }}>
            <div className="toolbox-left">
              <div
                className="toolbox-info"
                style={{ fontSize: "18px", color: "#000", fontWeight: 600 }}
              >
                Laptop Asus (Mới)
              </div>
            </div>

            <div className="toolbox-right">
              <div className="toolbox-sort">
                {/* <label htmlFor="sortby">Sort by:</label> */}
              </div>
            </div>
          </div>

          <div className="products mb-3">
            <div className="row">
              <div className="col-6 col-md-4 col-xl-3">
                <ItemProduct />
              </div>

              <div className="col-6 col-md-4 col-xl-3">
                <ItemProduct />
              </div>

              <div className="col-6 col-md-4 col-xl-3">
                <ItemProduct />
              </div>

              <div className="col-6 col-md-4 col-xl-3">
                <ItemProduct />
              </div>

              <div className="col-6 col-md-4 col-xl-3">
                <ItemProduct />
              </div>

              <div className="col-6 col-md-4 col-xl-3">
                <ItemProduct />
              </div>
            </div>
          </div>

          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <a
                  className="page-link page-link-prev"
                  href="#"
                  aria-label="Previous"
                  // tabindex="-1"
                  aria-disabled="true"
                >
                  <span aria-hidden="true">
                    <i className="icon-long-arrow-left"></i>
                  </span>
                  Prev
                </a>
              </li>
              <li className="page-item active" aria-current="page">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item-total">of 2</li>
              <li className="page-item">
                <a
                  className="page-link page-link-next"
                  href="#"
                  aria-label="Next"
                >
                  Next{" "}
                  <span aria-hidden="true">
                    <i className="icon-long-arrow-right"></i>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <aside className="col-lg-3 col-xl-5col order-lg-first">
          <div className="sidebar sidebar-category">
            <div className="widget widget-categories">
              <div className="toolbox">
                <div className="toolbox-left">
                  <div
                    className="toolbox-info"
                    style={{ fontSize: "18px", color: "#000", fontWeight: 600 }}
                  >
                    Danh mục
                  </div>
                </div>

                
              </div>
              <nav className="side-nav">
                <div style={{width: "100%", borderBottom: "1px groove", opacity: '0.3'}}></div>
                <ul className="menu-vertical sf-arrows">
                  <li>
                    <Link to={"category/asus"} >Laptop dành cho sinh viên</Link>
                  </li>
                  <li>
                    <Link to={"category/asus"} >Laptop dành cho lập trình viên</Link>
                  </li>
                  <li>
                    <Link to={"category/asus"} >Laptop chuyên đồ họa</Link>
                  </li>
                  <li>
                    <Link to={"category/asus"} >Laptop doanh nhân</Link>
                  </li>
                  <li>
                    <Link to={"category/asus"} >Laptop Gaming</Link>
                  </li>
                  
                </ul>
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ProductByCategory;
