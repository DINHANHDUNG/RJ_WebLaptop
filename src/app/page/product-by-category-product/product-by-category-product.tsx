import { Col, Pagination, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { getAllCategoryAdmin } from "../../../features/admin/categoryAdnim";
import { getAllCategoryProductAdmin } from "../../../features/admin/categoryProductAdnim";
import { getAllProductByDMSPAdmin } from "../../../features/admin/productAdnim";
import { useAppSelector } from "../../commom/hooks";
import {
  categoryAdminStore,
  categoryProductAdminStore,
  productAdminStore,
} from "../../commom/use-selector";
import CategoryProduct from "../../component/customer/category-product/category-product";
import ItemProduct from "../../component/customer/product/item-product/item-product";

function ProductByCategoryProduct() {
  const history = useNavigate();
  const { Option } = Select;
  const { ID } = useParams();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  console.log(ID);
  const category = useAppSelector(categoryAdminStore);

  const products = useAppSelector(productAdminStore);
  const categoryproduct = useAppSelector(categoryProductAdminStore);
  const [sort, setSort] = useState(0);
  console.log(products, categoryproduct, category);

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getAllCategoryAdmin());
    dispatch(
      getAllCategoryProductAdmin({
        page: 0,
        noitem: 0,
      })
    );
    if (ID) {
      dispatch(
        getAllProductByDMSPAdmin({
          id_dmsp: Number(ID),
          // id_dmsp: 0,
          sort: sort,
          page: page,
          noitem: pageSize,
        })
      );
    }
  }, [ID]);

  function onChange(value: any) {
    console.log(`selected ${value}`);
    setSort(value);
    setPage(1);
    dispatch(
      getAllProductByDMSPAdmin({
        id_dmsp: Number(ID),
        sort: value,
        page: 1,
        noitem: pageSize,
      })
    );
  }

  function onSearch(val: any) {
    console.log("search:", val.target.value);
    // setValueSearch(val.target.value);
  }
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
                  categoryproduct.listcategoryproduct.filter(
                    (e) => e.id === Number(ID)
                  )[0]?.dmsp_name
                }
                {/* Danh sách sản phẩm */}
              </div>
            </div>

            <div className="toolbox-right">
              <div className="toolbox-sort">
                <Select
                  showSearch
                  placeholder="Chọn danh mục"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  style={{ minWidth: "120px", marginRight: "10px" }}
                  value={sort}
                  filterOption={(input, option: any) =>
                    option?.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value={0} key={0}>
                    Mới nhất
                  </Option>
                  <Option value={1} key={1}>
                    Giá tăng dần
                  </Option>
                  <Option value={2} key={2}>
                    Giá giảm dần
                  </Option>
                </Select>
                {/* <label htmlFor="sortby">Sort by:</label> */}
              </div>
            </div>
          </div>

          <div className="products mb-3">
            <div className="row">
              {products.listproduct.map((value) => (
                <div className="col-12 col-md-4 col-xl-3 ">
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
                      getAllProductByDMSPAdmin({
                        id_dmsp: Number(ID),
                        page: page,
                        sort: sort,
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

        <CategoryProduct value={categoryproduct} />
      </div>
    </div>
  );
}

export default ProductByCategoryProduct;
