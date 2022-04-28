import React from "react";
import { Link } from "react-router-dom";
import { CustomesCategoryProduct } from "../../../types/category-product";

function CategoryProduct(props: { value: CustomesCategoryProduct }) {
  return (
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
            <div
              style={{
                width: "100%",
                borderBottom: "1px groove",
                opacity: "0.3",
              }}
            ></div>
            <ul className="menu-vertical sf-arrows">
              {props.value.listcategoryproduct?.map((e) => (
                <li>
                  <Link to={`/danhmucsp/${e.id}`}>{e.dmsp_name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
}

export default CategoryProduct;
