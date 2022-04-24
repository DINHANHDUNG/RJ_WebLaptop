import { Button, Card, Col, Popconfirm, Row, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import {
  getAllCategoryAdmin,
  postDeleteCategoryAdmin,
} from "../../../../features/admin/categoryAdnim";
import { useAppDispatch, useAppSelector } from "../../../commom/hooks";
import { categoryAdminStore } from "../../../commom/use-selector";
import ModalCategory from "../../../component/modal/Category/modal-category";

function Category() {
  const { Title, Text } = Typography;

  const dispatch = useAppDispatch();
  const category = useAppSelector(categoryAdminStore);

  const [listCategory, setListCategory] = useState(() => category.listcategory);
  const [selected, setSelected] = useState([] as any);
  const [selectedID, setSelectedID] = useState([] as any);

  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState({
    id: 0,
    id_parent: 0,
    categoryname: "",
  });

  useEffect(() => {
    dispatch(getAllCategoryAdmin());
  }, []);

  // table code start
  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      width: "10%",
      render: (text: any, row: any, index: any) => index + 1,
      // render: (id: any ) => (
      //   <>
      //     {id}
      //   </>
      // )
    },

    

    {
      title: "Tên danh mục",
      dataIndex: "categoryname",
      key: "categoryname",
    },

    {
      title: "Danh mục cha",
      key: "id_parent",
      dataIndex: "id_parent",
      render: (id_parent: any) => <>{id_parent}</>,
      sorter: (a: any, b: any) =>
        a.id_parent.localeCompare(b.id_parent),
      // sortDirections: ['descend']
    },

    {
      title: "Show",
      dataIndex: "show",
      key: "show",
      render: (show: any) => <>{show ? "Hiện" : "Ẩn"}</>,
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
            title="Quản lý danh mục"
            extra={
              <>
                <Button
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    setValue({
                      id: 0,
                      id_parent: 0,
                      categoryname: "",
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
                    dispatch(postDeleteCategoryAdmin({ id: selectedID })).then(
                      () => dispatch(getAllCategoryAdmin())
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
                dataSource={category.listcategory.filter(
                  (item: any) => item.id != 0
                )}
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
                      console.log(record);
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
      {visible && (
        <ModalCategory
          visible={visible}
          toggle={() => {
            setVisible(false);
          }}
          value={value}
        />
      )}
    </div>
  );
}

export default Category;
