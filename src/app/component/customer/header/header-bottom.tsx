import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategoryAdmin } from "../../../../features/admin/categoryAdnim";
import { useAppSelector } from "../../../commom/hooks";
import { categoryAdminStore } from "../../../commom/use-selector";

function HeaderBottom() {
  const category = useAppSelector(categoryAdminStore);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategoryAdmin());
  }, []);

  // console.log(
  //   category.listcategory.filter((item: any, index: any) => {
  //     return item;
  //   })
  // );

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

              {/* <li>
                <a href="#" className="sf-with-ul">
                  Dịch vụ
                </a>

                <ul>
                  <li>
                    <Link to={"category/asus"}>Nâng cấp</Link>

                    <ul>
                      <li>
                        <Link to={"category/asus"}>Pin</Link>
                      </li>
                      <li>
                        <Link to={"category/asus"}>Bàn phím</Link>
                      </li>
                      <li>
                        <Link to={"category/asus"}>Màn hình</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={"category/asus"}>Sửa chữa</Link>
                  </li>
                  <li>
                    <Link to={"category/asus"}>Dịch vụ khác</Link>
                  </li>
                </ul>
              </li> */}
              <li>
                <a href="#" className="sf-with-ul">
                  Laptop
                </a>

                <ul>
                  {category.listcategory.map((val) => (
                    <li>
                      <Link to={`laptop/${val.id}`}>{val.categoryname}</Link>
                    </li>
                  ))}

                  {/* <li>
                    <a href="#">Grid</a>
                    <ul>
                      <li>
                        <a href="blog-grid-2cols.html">Grid 2 columns</a>
                      </li>
                      <li>
                        <a href="blog-grid-3cols.html">Grid 3 columns</a>
                      </li>
                      <li>
                        <a href="blog-grid-4cols.html">Grid 4 columns</a>
                      </li>
                      <li>
                        <a href="blog-grid-sidebar.html">Grid sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Masonry</a>
                    <ul>
                      <li>
                        <a href="blog-masonry-2cols.html">Masonry 2 columns</a>
                      </li>
                      <li>
                        <a href="blog-masonry-3cols.html">Masonry 3 columns</a>
                      </li>
                      <li>
                        <a href="blog-masonry-4cols.html">Masonry 4 columns</a>
                      </li>
                      <li>
                        <a href="blog-masonry-sidebar.html">Masonry sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Mask</a>
                    <ul>
                      <li>
                        <a href="blog-mask-grid.html">Blog mask grid</a>
                      </li>
                      <li>
                        <a href="blog-mask-masonry.html">Blog mask masonry</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Single Post</a>
                    <ul>
                      <li>
                        <a href="single.html">Default with sidebar</a>
                      </li>
                      <li>
                        <a href="single-fullwidth.html">Fullwidth no sidebar</a>
                      </li>
                      <li>
                        <a href="single-fullwidth-sidebar.html">
                          Fullwidth with sidebar
                        </a>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </li>
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
