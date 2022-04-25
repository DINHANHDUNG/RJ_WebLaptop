import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategoryAdmin } from "../../../../../features/admin/categoryAdnim";
import { useAppSelector } from "../../../../commom/hooks";
import { categoryAdminStore } from "../../../../commom/use-selector";

function Mobilemenu() {
  const category = useAppSelector(categoryAdminStore);

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getAllCategoryAdmin());
  }, []);
  return (
    <div>
      <div className="mobile-menu-overlay"></div>

      <div className="mobile-menu-container mobile-menu-light">
        <div className="mobile-menu-wrapper">
          <span className="mobile-menu-close">
            <i className="fa-solid fa-align-justify"></i>
          </span>

          <form action="#" method="get" className="mobile-search">
            <label htmlFor="mobile-search" className="sr-only">
              Search
            </label>
            <input
              type="search"
              className="form-control"
              name="mobile-search"
              id="mobile-search"
              placeholder="Search in..."
              required
            />
            <button className="btn btn-primary" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

          <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="mobile-menu-link"
                data-toggle="tab"
                href="#mobile-menu-tab"
                role="tab"
                aria-controls="mobile-menu-tab"
                aria-selected="true"
              >
                Menu
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="mobile-menu-tab"
              role="tabpanel"
              aria-labelledby="mobile-menu-link"
            >
              <nav className="mobile-nav">
                <ul className="mobile-menu">
                  <li className="active">
                    <a href="/">Trang chủ</a>
                  </li>
                  {/* 
                  {category.listcategory.map((val) => (
                    <li className="mobile-menu-close">
                      <Link to={`laptop/${val.id}`}>{val.categoryname}</Link>
                      <ul>
                        <li>
                          <Link to={`laptop/${val.id}`}>
                            {val.categoryname}
                          </Link>
                        </li>
                      </ul>
                    </li>
                  ))} */}

                  {/* <li>
                    <a href="#">Laptop</a>
                    <ul>
                      {category.listcategory.map((val) => (
                        <li className="mobile-menu-close">
                          <Link to={`laptop/${val.id}`}>
                            {val.categoryname}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li> */}

                  {category.listcategory?.map((val) => (
                    <li key={val.id}>
                      <Link to={`laptop/${val.id}`}>{val.categoryname}</Link>
                      <ul>
                        {val.children?.map((v) => (
                          <li>
                            <Link to={`danhmuc/${v.id}`}>{v.categoryname}</Link>
                            {v.children?.length > 0 ? (
                              <ul>
                                {v.children?.map((e) => (
                                  <li>
                                    <Link to={`danhmuc/${e.id}`}>
                                      {e.categoryname}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}

                  <li>
                    <Link to="category.html">Shop</Link>
                    <ul>
                      <li>
                        <a href="category-list.html">Shop List</a>
                      </li>
                      <li>
                        <a href="category-2cols.html">Shop Grid 2 Columns</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              className="tab-pane fade"
              id="mobile-cats-tab"
              role="tabpanel"
              aria-labelledby="mobile-cats-link"
            >
              <nav className="mobile-cats-nav">
                <ul className="mobile-cats-menu">
                  <li>
                    <a className="mobile-cats-lead" href="#">
                      Daily offers
                    </a>
                  </li>
                  <li>
                    <a className="mobile-cats-lead" href="#">
                      Gift Ideas
                    </a>
                  </li>
                  <li>
                    <a href="#">Beds</a>
                  </li>
                  <li>
                    <a href="#">Lighting</a>
                  </li>
                  <li>
                    <a href="#">Sofas & Sleeper sofas</a>
                  </li>
                  <li>
                    <a href="#">Storage</a>
                  </li>
                  <li>
                    <a href="#">Armchairs & Chaises</a>
                  </li>
                  <li>
                    <a href="#">Decoration </a>
                  </li>
                  <li>
                    <a href="#">Kitchen Cabinets</a>
                  </li>
                  <li>
                    <a href="#">Coffee & Tables</a>
                  </li>
                  <li>
                    <a href="#">Outdoor Furniture </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="social-icons">
            <a
              href="#"
              className="social-icon"
              target="_blank"
              title="Facebook"
            >
              <i className="icon-facebook-f"></i>
            </a>
            <a href="#" className="social-icon" target="_blank" title="Twitter">
              <i className="icon-twitter"></i>
            </a>
            <a
              href="#"
              className="social-icon"
              target="_blank"
              title="Instagram"
            >
              <i className="icon-instagram"></i>
            </a>
            <a href="#" className="social-icon" target="_blank" title="Youtube">
              <i className="icon-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobilemenu;
