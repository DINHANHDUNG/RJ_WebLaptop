import { Col, Pagination, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAllCategoryAdmin } from "../../../features/admin/categoryAdnim";
import { getAllCategoryProductAdmin } from "../../../features/admin/categoryProductAdnim";
import { getAllProductAdmin } from "../../../features/admin/productAdnim";
import { useAppSelector } from "../../commom/hooks";
import {
  categoryAdminStore,
  categoryProductAdminStore,
  productAdminStore,
} from "../../commom/use-selector";
import ItemProduct from "../../component/customer/product/item-product/item-product";

function ProductByCategory() {
  const history = useNavigate();
  const { ID } = useParams();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  console.log(ID);
  const category = useAppSelector(categoryAdminStore);

  const products = useAppSelector(productAdminStore);
  const categoryproduct = useAppSelector(categoryProductAdminStore);

  console.log(products, categoryproduct);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategoryAdmin());
    dispatch(
      getAllCategoryProductAdmin({
        page: 0,
        noitem: 0,
      })
    );
    if (ID) {
      dispatch(
        getAllProductAdmin({
          id_category: Number(ID),
          // id_category: 0,
          page: page,
          noitem: pageSize,
        })
      );
    }
  }, [ID]);

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
                {
                  category.listcategory.filter((e) => e.id === Number(ID))[0]
                    ?.categoryname
                }
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
              {products.listproduct.map((value) => (
                <div className="col-6 col-md-4 col-xl-3">
                  <ItemProduct value={value} />
                </div>
              ))}
            </div>
          </div>

          <Row gutter={[24, 24]}>
            <Col xl={24}>
              {products.total > 0 ? (
                <Pagination
                  style={{
                    marginTop: "10px",
                    float: "right",
                    marginBottom: "10px",
                  }}
                  onChange={(page, pageSizeNew) => {
                    console.log(page, pageSizeNew);
                    setPage(page);
                    dispatch(
                      getAllProductAdmin({
                        id_category: Number(ID),
                        page: page,
                        noitem: pageSizeNew ? pageSizeNew : pageSize,
                      })
                    );
                    if (pageSizeNew) {
                      setPageSize(pageSizeNew);
                    }
                  }}
                  pageSize={pageSize}
                  current={page}
                  total={products.total}
                />
              ) : null}
            </Col>
          </Row>
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
                <div
                  style={{
                    width: "100%",
                    borderBottom: "1px groove",
                    opacity: "0.3",
                  }}
                ></div>
                <ul className="menu-vertical sf-arrows">
                  {categoryproduct.listcategoryproduct?.map((e) => (
                    <li>
                      {/* <Link to={''} onClick={()=>{
                        history("/detail/" + item.product.id);
                      }}>{e.dmsp_name}</Link> */}
                      <Link to={`/laptop/${e.id}`}>{e.dmsp_name}</Link>
                    </li>
                  ))}
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
