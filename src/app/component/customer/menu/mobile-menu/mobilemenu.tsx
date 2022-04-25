import { Menu } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategoryTrees } from "../../../../../features/admin/categoryAdnim";
import { useAppSelector } from "../../../../commom/hooks";
import { categoryAdminStore } from "../../../../commom/use-selector";

function Mobilemenu() {
  const category = useAppSelector(categoryAdminStore);
  const dispatch = useDispatch();
  const { SubMenu } = Menu;
  useEffect(() => {
    // dispatch(getAllCategoryTrees());
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
            {/* <li className="nav-item">
              <a
                className="nav-link"
                id="mobile-cats-link"
                data-toggle="tab"
                href="#mobile-cats-tab"
                role="tab"
                aria-controls="mobile-cats-tab"
                aria-selected="false"
              >
                Categories
              </a>
            </li> */}
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

                  {/* <Menu
                    style={{ width: 256 }}
                    // defaultOpenKeys={["sub1"]}
                    mode="inline"
                  >
                    {category.listcategory?.map((val) =>
                      val.children.length > 0 ? (
                        <SubMenu key="v.id" title={val.categoryname}>
                          <Menu.ItemGroup>
                            {val.children?.map((v) => (
                              <Menu.Item key={v.id} className="ChildItems">
                                <Link to={`danhmuc/${v.id}`}>
                                  {v.categoryname}
                                </Link>
                              </Menu.Item>
                            ))}
                          </Menu.ItemGroup>
                        </SubMenu>
                      ) : (
                        <Menu.Item key={val.id}>
                          <Link
                            to={`danhmuc/${val.id}`}
                            style={{ float: "left" }}
                          >
                            {val.categoryname}
                          </Link>
                        </Menu.Item>
                      )
                    )}
                  </Menu> */}

                  {category.listcategory?.map((val) => (
                    <li>
                      <Link
                        className={val.children?.length > 0 ? "sf-with-ul" : ""}
                        to={`danhmuc/${val.id}`}
                      >
                        {val.categoryname}
                      </Link>

                      {val.children?.map((v) => (
                        <ul>
                          <li>
                            <Link to={`danhmuc/${v.id}`}>{v.categoryname}</Link>

                            {v.children?.map((e) => (
                              <ul>
                                <li>
                                  <Link to={`danhmuc/${e.id}`}>
                                    {e.categoryname}
                                  </Link>
                                </li>
                              </ul>
                            ))}
                          </li>
                        </ul>
                      ))}
                    </li>
                  ))}

                  {/* <li>
                    <a href="#">Laptop</a>
                    <ul>
                      {category.listcategory.map((val) => (
                        <li >
                          <Link to={`danhmuc/${val.id}`}>
                            {val.categoryname}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li> */}
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
