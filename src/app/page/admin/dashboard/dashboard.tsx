import {
  Button,
  Card,
  Col,
  Input,
  Pagination,
  Popconfirm,
  Row,
  Select,
  Table,
} from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { getAllCategoryAdmin } from "../../../../features/admin/categoryAdnim";
import {
  getAllProductAdmin,
  getProductSearchAdmin,
  postDeleteProductAdmin,
} from "../../../../features/admin/productAdnim";
import {
  currency,
  getParsedDate,
  useAppDispatch,
  useAppSelector,
} from "../../../commom/hooks";
import {
  accountAdminStore,
  categoryAdminStore,
  productAdminStore,
} from "../../../commom/use-selector";
import ModalProduct from "../../../component/modal/Product/modal-product";
import { openNotification } from "../../../component/Notifi/noti";
import { Product } from "../../../types/product";

function Dashboard() {
  const { Option } = Select;
  const dispatch = useAppDispatch();
  const products = useAppSelector(productAdminStore);
  const categorys = useAppSelector(categoryAdminStore);
  const acc = useAppSelector(accountAdminStore);
  const [selected, setSelected] = useState([] as any);
  const [selectedID, setSelectedID] = useState([] as any);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState({} as Product);
  const [valueInputSelect, setValueInputSelect] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const [arrImgDelete, setArrImgDelete] = useState([] as any);
  console.log(products);
  useEffect(() => {
    dispatch(getAllCategoryAdmin()).then((res: any) => {
      console.log(res);

      // if (res.payload.result[0].id) {

      // }
    });
    setValueInputSelect(0);

    dispatch(
      getAllProductAdmin({
        id_category: 0,
        // id_category: 0,
        page: page,
        sort: 0,
        noitem: pageSize,
      })
    );
  }, []);

  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      width: "10%",
      render: (text: any, row: any, index: any) => index + 1,
    },
    {
      title: "Danh mục",
      dataIndex: "category",
      key: "category",
      render: (text: any, row: any, index: any) => row.category.categoryname,
      sorter: (a: any, b: any) =>
        a.category.categoryname.localeCompare(b.category.categoryname),
    },
    {
      title: "Mã sản phẩm",
      dataIndex: "productcode",
      key: "productcode",
      sorter: (a: any, b: any) => a.productcode.localeCompare(b.productcode),
    },

    {
      title: "Tên sản phẩm",
      dataIndex: "productname",
      key: "productname",
      sorter: (a: any, b: any) => a.productname.localeCompare(b.productname),
    },

    // {
    //   title: "Danh mục sản phẩm",
    //   dataIndex: "category",
    //   key: "category",
    //   render: (text: any, row: any, index: any) => {
    //     console.log(row);

    //     return row.product_dmsps.map((value: any, idx: any) => (
    //       <p key={idx}>{value.dmsp.dmsp_name}</p>
    //     ));
    //   },
    // },

    {
      title: "Giá gốc",
      dataIndex: "price_origin",
      key: "price_origin",
      render: (price_origin: any) => <>{currency(price_origin)}</>,
      sorter: (a: any, b: any) =>
        Number(a.price_origin) - Number(b.price_origin),
    },

    {
      title: "Giá bán",
      dataIndex: "price_sale",
      key: "price_sale",
      render: (price_sale: any) => <>{currency(price_sale)}</>,
      sorter: (a: any, b: any) => Number(a.price_sale) - Number(b.price_sale),
    },

    {
      title: "Ngày tạo",
      dataIndex: "created_date",
      key: "created_date",
      render: (created_date: any) => <>{getParsedDate(created_date)}</>,
      sorter: (a: any, b: any) => {
        if (moment(a.created_date).isBefore(moment(b.created_date))) {
          return -1;
        }
        return 1;
      },
    },
    {
      title: "Ngày cập nhật",
      dataIndex: "updated_date",
      key: "updated_date",
      render: (updated_date: any) => <>{getParsedDate(updated_date)}</>,
      sorter: (a: any, b: any) => {
        if (moment(a.updated_date).isBefore(moment(b.updated_date))) {
          return -1;
        }
        return 1;
      },
    },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    selected,
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setSelectedID(selectedRowKeys);
      setSelected(selectedRows);
    },
  };

  function onChange(value: any) {
    console.log(`selected ${value}`);
    setValueInputSelect(value);
    setPage(1);
    dispatch(
      getAllProductAdmin({
        id_category: value,
        page: 1,
        sort: 0,
        noitem: pageSize,
      })
    );
  }

  function onSearch(val: any) {
    console.log("search:", val.target.value);
    setValueSearch(val.target.value);
  }

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      dispatch(
        getProductSearchAdmin({
          productKey: valueSearch ? valueSearch : "",
          minprice: null,
          maxprice: null,
          page: page,
          noitem: pageSize,
        })
      );
    }
  };

  return (
    <div className="tabled" style={{ marginBottom: "20px" }}>
      <Row gutter={[24, 0]}>
        <Col xs={24} xl={24}>
          <Card
            bordered={false}
            className="criclebox tablespace mb-24"
            title="Quản lý sản phẩm theo danh mục"
            extra={
              <>
                <Button
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    setVisibleSearch(!visibleSearch);
                  }}
                >
                  Tìm kiếm
                </Button>
                <Select
                  showSearch
                  placeholder="Chọn danh mục"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  style={{ minWidth: "120px", marginRight: "10px" }}
                  value={valueInputSelect}
                  filterOption={(input, option: any) =>
                    option?.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value={0} key={0}>
                    Tất cả danh mục
                  </Option>
                  {categorys?.listcategory?.map((item) => (
                    <Option value={item.id} key={item.id}>
                      {item.categoryname}
                    </Option>
                  ))}
                </Select>
                <Button
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    setVisible(true);
                    setValue({} as Product);
                  }}
                >
                  Thêm
                </Button>

                <Popconfirm
                  title="Bạn có chắc muốn xóa sản phẩm?"
                  okText="Có"
                  cancelText="Không"
                  onConfirm={() => {
                    if (selectedID.length < 1) {
                      openNotification({
                        message: "Chưa chọn sản phẩm",
                        type: "error",
                      });
                    } else {
                      dispatch(postDeleteProductAdmin({ id: selectedID })).then(
                        () => {
                          dispatch(
                            getAllProductAdmin({
                              id_category: valueInputSelect,
                              page: page,
                              sort: 0,
                              noitem: pageSize,
                            })
                          );
                        }
                      );
                    }
                  }}
                >
                  <Button onClick={() => {}}>Xóa</Button>
                </Popconfirm>
              </>
            }
          >
            <Row gutter={[24, 0]}>
              <Col xl={24}>
                {visibleSearch && (
                  <Row gutter={[24, 24]}>
                    <Col md={10} xs={20} style={{ margin: "20px" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <Input
                          placeholder="Tìm kiếm"
                          onChange={onSearch}
                          style={{ width: "100%", marginRight: "10px" }}
                          size="small"
                          onKeyDown={handleKeyDown}
                        />
                        <Button
                          size="large"
                          onClick={() => {
                            dispatch(
                              getProductSearchAdmin({
                                productKey: valueSearch ? valueSearch : "",
                                minprice: null,
                                maxprice: null,
                                page: page,
                                noitem: pageSize,
                              })
                            );
                          }}
                        >
                          Tìm
                        </Button>
                      </div>
                    </Col>
                  </Row>
                )}
                <div className="table-responsive">
                  <Table
                    columns={columns}
                    dataSource={products.listproduct}
                    pagination={false}
                    className="ant-border-space"
                    rowSelection={{
                      ...rowSelection,
                    }}
                    rowKey="id"
                    onRow={(record, rowIndex) => {
                      return {
                        onClick: (event) => {}, // click row
                        onDoubleClick: (event) => {
                          setVisible(true);
                        }, // double click row
                        onContextMenu: (event) => {}, // right button click row
                        onMouseEnter: (event) => {
                          // console.log(record);
                          setValue(record);
                        }, // mouse enter row
                        onMouseLeave: (event) => {}, // mouse leave row
                      };
                    }}
                  />
                </div>
              </Col>
            </Row>

            <Row gutter={[24, 24]}>
              <Col xl={24}>
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
                        id_category: valueInputSelect,
                        page: page,
                        sort: 0,
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
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {visible && (
        <ModalProduct
          visible={visible}
          toggle={() => {
            setVisible(false);
          }}
          value={value}
          valueInputSelect={valueInputSelect}
          page={page}
          pageSize={pageSize}
          productkey={valueSearch}
          visibleSearch={visibleSearch}
        />
      )}
    </div>
  );
}

export default Dashboard;
