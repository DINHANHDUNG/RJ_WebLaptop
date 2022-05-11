import {
  Button,
  Card,
  Col,
  Pagination,
  Popconfirm,
  Row,
  Table,
  Typography,
} from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  getAllCategoryProductAdmin,
  postDeleteCategoryProductAdmin,
} from "../../../../features/admin/categoryProductAdnim";
import {
  getParsedDate,
  useAppDispatch,
  useAppSelector,
} from "../../../commom/hooks";
import { categoryProductAdminStore } from "../../../commom/use-selector";
import ModalCategoryProduct from "../../../component/modal/CategoryProduct/modal-category-product";

function CategoryProduct() {
  const { Title, Text } = Typography;

  const dispatch = useAppDispatch();
  const category = useAppSelector(categoryProductAdminStore);
  console.log(category);

  const [selected, setSelected] = useState([] as any);
  const [selectedID, setSelectedID] = useState([] as any);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState({
    id: 0,
    dmsp_name: "",
  });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  useEffect(() => {
    dispatch(
      getAllCategoryProductAdmin({
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
      title: "Tên danh mục",
      dataIndex: "dmsp_name",
      key: "dmsp_name",
      sorter: (a: any, b: any) => a.dmsp_name.localeCompare(b.dmsp_name),
    },

    {
      title: "Ngày tạo",
      dataIndex: "created_date",
      key: "created_date",
      render: (created_date: any) => (
        <div style={{ whiteSpace: "nowrap" }}>
          {getParsedDate(created_date)}
        </div>
      ),
      sorter: (a: any, b: any) => {
        if (moment(a.Created).isBefore(moment(b.Created))) {
          return -1;
        }
        return 1;
      },
    },

    {
      title: "Ngày tạo",
      dataIndex: "updated_date",
      key: "updated_date",
      render: (updated_date: any) => (
        <div style={{ whiteSpace: "nowrap" }}>
          {getParsedDate(updated_date)}
        </div>
      ),
      sorter: (a: any, b: any) => {
        if (moment(a.Created).isBefore(moment(b.Created))) {
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

  return (
    <div className="tabled" style={{ marginBottom: "20px" }}>
      <Row gutter={[24, 0]}>
        <Col xs={24} xl={24}>
          <Card
            bordered={false}
            className="criclebox tablespace mb-24"
            title="Quản lý danh mục sản phẩm"
            extra={
              <>
                <Button
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    setValue({
                      id: 0,
                      dmsp_name: "",
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
                      postDeleteCategoryProductAdmin({ id: selectedID })
                    ).then(() =>
                      dispatch(
                        getAllCategoryProductAdmin({
                          page: page,
                          noitem: 0,
                        })
                      )
                    )
                  }
                >
                  <Button>Xóa</Button>
                </Popconfirm>
              </>
            }
          >
            <div className="table-responsive">
              <Table
                columns={columns}
                dataSource={category.listcategoryproduct.filter(
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
              dispatch(
                getAllCategoryProductAdmin({
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
            total={category.total}
          />
        </Col>
      </Row>
      {visible && (
        <ModalCategoryProduct
          visible={visible}
          toggle={() => {
            setVisible(false);
          }}
          value={value}
          pageSize={pageSize}
          page={page}
        />
      )}
    </div>
  );
}

export default CategoryProduct;
