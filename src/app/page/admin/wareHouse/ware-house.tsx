import {
  Button,
  Card,
  Col,
  Pagination,
  Popconfirm,
  Row,
  Table,
  Typography,
  Input,
  Space,
} from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  getAllWareHouseProductAdmin,
  getSearchWareHouseProductAdmin,
  postDeleteWareHouseProductAdmin,
} from "../../../../features/admin/wareHouseProductAdnim";
import {
  getParsedDate,
  useAppDispatch,
  useAppSelector,
} from "../../../commom/hooks";
import {
  categoryProductAdminStore,
  wareHouseStore,
} from "../../../commom/use-selector";
import ModalCategoryProduct from "../../../component/modal/CategoryProduct/modal-category-product";
import ModalWareHouseProduct from "../../../component/modal/WareHouse/modal-ware-house";

function WareHouse() {
  const { Title, Text } = Typography;

  const dispatch = useAppDispatch();
  const listWareHouse = useAppSelector(wareHouseStore);
  console.log(listWareHouse);
  const { Search } = Input;
  const [selected, setSelected] = useState([] as any);
  const [selectedID, setSelectedID] = useState([] as any);
  const [visible, setVisible] = useState(false);
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const [value, setValue] = useState({
    id: 0,
    productcode: "",
    productname: "",
    numberinput: 0,
    numberoutput: 0,
  });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    dispatch(
      getAllWareHouseProductAdmin({
        page: page,
        noitem: pageSize,
      })
    );
  }, []);

  // table code start
  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      width: "10%",
      render: (text: any, row: any, index: any) => index + 1,
    },

    {
      title: "Mã máy",
      dataIndex: "productcode",
      key: "productcode",
      sorter: (a: any, b: any) => a.productcode.localeCompare(b.productcode),
    },

    {
      title: "Tên máy",
      dataIndex: "productname",
      key: "productname",
      sorter: (a: any, b: any) => a.productname.localeCompare(b.productname),
    },

    {
      title: "Số lượng nhập",
      dataIndex: "numberinput",
      key: "numberinput",
      sorter: (a: any, b: any) => a.numberinput.localeCompare(b.numberinput),
    },

    {
      title: "Số lượng xuất",
      dataIndex: "numberoutput",
      key: "numberoutput",
      sorter: (a: any, b: any) => a.numberoutput.localeCompare(b.numberoutput),
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

  const onSearch = (e: any) => setValueSearch(e.target.value);
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      dispatch(
        getSearchWareHouseProductAdmin({
          productkey: valueSearch,
          page: 1,
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
            title="Quản lý kho sản phẩm"
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
                <Button
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    setValue({
                      id: 0,
                      productcode: "",
                      productname: "",
                      numberinput: 0,
                      numberoutput: 0,
                    });
                    setVisible(true);
                  }}
                >
                  Thêm
                </Button>

                <Popconfirm
                  title="Xóa danh mục sẽ xóa hết sản phẩm trong danh mục đó, bạn có chắc muốn xóa không？"
                  okText="Có"
                  cancelText="Không"
                  onConfirm={() =>
                    dispatch(
                      postDeleteWareHouseProductAdmin({ id: selectedID })
                    ).then(() => {
                      if (visibleSearch) {
                        dispatch(
                          getSearchWareHouseProductAdmin({
                            productkey: valueSearch,
                            page: page,
                            noitem: pageSize,
                          })
                        );
                      } else {
                        dispatch(
                          getAllWareHouseProductAdmin({
                            page: page,
                            noitem: pageSize,
                          })
                        );
                      }
                    })
                  }
                >
                  <Button>Xóa</Button>
                </Popconfirm>
              </>
            }
          >
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
                          getSearchWareHouseProductAdmin({
                            productkey: valueSearch,
                            page: 1,
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
                dataSource={listWareHouse.listWareHouse.filter(
                  (item: any) => item.id != 0
                )}
                pagination={false}
                className="ant-border-space"
                rowSelection={{
                  ...rowSelection,
                }}
                rowKey="id"
                onRow={(record: any, rowIndex) => {
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
          </Card>
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
            onChange={(page: any, pageSizeNew: any) => {
              console.log(page, pageSizeNew);
              setPage(page);

              if (visibleSearch) {
                dispatch(
                  getSearchWareHouseProductAdmin({
                    productkey: valueSearch,
                    page: page,
                    noitem: pageSizeNew ? pageSizeNew : pageSize,
                  })
                );
              } else {
                dispatch(
                  getAllWareHouseProductAdmin({
                    page: page,
                    noitem: pageSizeNew ? pageSizeNew : pageSize,
                  })
                );
              }

              if (pageSizeNew) {
                setPageSize(pageSizeNew);
              }
            }}
            pageSize={pageSize}
            current={page}
            total={listWareHouse.total}
          />
        </Col>
      </Row>
      {visible && (
        <ModalWareHouseProduct
          visible={visible}
          toggle={() => {
            setVisible(false);
          }}
          value={value}
          pageSize={pageSize}
          page={page}
          productkey={valueSearch}
          visibleSearch={visibleSearch}
        />
      )}
    </div>
  );
}

export default WareHouse;
