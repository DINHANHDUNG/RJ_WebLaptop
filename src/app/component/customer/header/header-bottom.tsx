import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategoryTrees } from "../../../../features/admin/categoryAdnim";
import { useAppSelector } from "../../../commom/hooks";
import { categoryAdminStore } from "../../../commom/use-selector";

function HeaderBottom() {
  const category = useAppSelector(categoryAdminStore);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategoryTrees());
  }, []);

  // console.log(
  //   category.listcategory.filter((item: any, index: any) => {
  //     return item;
  //   })
  // );
  console.log(category);

  return (
    <div className="header-bottom sticky-header">
      <div className="container">
        <div className="header-center">
          <nav className="main-nav">
            <ul className="menu sf-arrows">
              {/* <li className="megamenu-container active"> */}
              <li className="megamenu-container ">
                <a href="/">Trang chủ</a>
              </li>

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
                <a href="#" className="sf-with-ul">
                  Laptop
                </a>

                <ul>
                  {category.listcategory.map((val) => (
                    <li>
                      <Link to={`danhmuc/${val.id}`}>{val.categoryname}</Link>

                      {val.children?.map((v) => (
                        <ul>
                          <li>
                            <Link to={`danhmuc/${v.id}`}>{v.categoryname}</Link>
                            <ul>
                              {v.children?.map((e) => (
                                <li>
                                  <Link to={`danhmuc/${v.id}`}>
                                    {v.categoryname}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        </ul>
                      ))}
                    </li>
                  ))}

                  
                </ul>
              </li> */}
              {/* <li>
                <a href="elements-list.html" className="sf-with-ul">
                  Elements
                </a>

                <ul>
                  <li>
                    <a href="elements-products.html">Products</a>
                  </li>
                  <li>
                    <a href="elements-typography.html">Typography</a>
                  </li>
                  <li>
                    <a href="elements-titles.html">Titles</a>
                  </li>
                  <li>
                    <a href="elements-banners.html">Banners</a>
                  </li>
                  <li>
                    <a href="elements-product-category.html">
                      Product Category
                    </a>
                  </li>
                  <li>
                    <a href="elements-video-banners.html">Video Banners</a>
                  </li>
                  <li>
                    <a href="elements-buttons.html">Buttons</a>
                  </li>
                  <li>
                    <a href="elements-accordions.html">Accordions</a>
                  </li>
                  <li>
                    <a href="elements-tabs.html">Tabs</a>
                  </li>
                  <li>
                    <a href="elements-testimonials.html">Testimonials</a>
                  </li>
                  <li>
                    <a href="elements-blog-posts.html">Blog Posts</a>
                  </li>
                  <li>
                    <a href="elements-portfolio.html">Portfolio</a>
                  </li>
                  <li>
                    <a href="elements-cta.html">Call to Action</a>
                  </li>
                  <li>
                    <a href="elements-icon-boxes.html">Icon Boxes</a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
