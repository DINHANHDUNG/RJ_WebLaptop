import { Button, Form, Input, Modal, Select } from "antd";
import React, { useEffect } from "react";
import {
  getAllCategoryTrees,
  postAddCategoryByIdAdmin,
  postEditCategoryByIdAdmin,
} from "../../../../features/admin/categoryAdnim";
import { useAppDispatch, useAppSelector } from "../../../commom/hooks";
import { categoryAdminStore } from "../../../commom/use-selector";

interface propsModalCategory {
  visible: boolean;
  toggle: () => void;
  value: {
    id: number;
    id_parent: number;
    categoryname: string;
    name_parent?: any;
  };
}
function ModalCategory(props: propsModalCategory) {
  const dispatch = useAppDispatch();
  const { Option } = Select;
  const [form] = Form.useForm();
  useEffect(() => {
    form
      .resetFields
      //   {
      //   categorycode: props.value.categorycode,
      //   categoryname: props.value.categoryname,
      // }
      ();
  }, [props.value.id]);

  function onFinish(value: any) {
    if (props.value.id > 0) {
      // Sửa
      dispatch(
        postEditCategoryByIdAdmin({
          id: props.value.id,
          id_parent: value.idcategory ? value.idcategory : null,
          categoryname: value.categoryname,
        })
      ).then(() => dispatch(getAllCategoryTrees()));
    } else {
      // Thêm
      dispatch(
        postAddCategoryByIdAdmin({
          id_parent: value.idcategory ? value.idcategory : null,
          categoryname: value.categoryname,
        })
      ).then(() => dispatch(getAllCategoryTrees()));
    }
  }

  //Select
  const categorys = useAppSelector(categoryAdminStore);
  const valueSelect = categorys.listcategory.filter(
    (item) => item.id != props.value.id
  );
  console.log(valueSelect);

  return (
    <Modal
      title={props.value?.id > 0 ? "Sửa danh mục" : "Thêm danh mục"}
      centered
      visible={props.visible}
      onOk={() => props.toggle()}
      onCancel={() => props.toggle()}
      okText={"Thêm"}
      cancelText={"Hủy"}
      width={800}
      footer={null}
    >
      <Form
        name="basic"
        labelCol={{ span: 3 }}
        form={form}
        // wrapperCol={{ span: 16 }}
        initialValues={{
          categoryname: props.value.categoryname,
          idcategory:
            props.value.id_parent === 0 ? null : props.value.id_parent,
          dmcha: props.value.name_parent,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        {props.value.id ? (
          <Form.Item label="Danh mục cha " name="dmcha">
            <Input disabled />
          </Form.Item>
        ) : (
          <Form.Item
            label="Danh mục cha"
            name="idcategory"
            // rules={[{ required: true, message: "Chọn danh mục!" }]}
          >
            <Select
              showSearch
              size="large"
              placeholder="Chọn danh mục cha"
              optionFilterProp="children"
              // onChange={onChange}
              // onSearch={onSearch}
              style={{ minWidth: "60px", marginRight: "props.pageSizepx" }}
              filterOption={(input, option: any) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA: any, optionB: any) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              {valueSelect.map((item: any) => (
                <Option value={item.id} key={item.id}>
                  {item.categoryname}
                </Option>
              ))}
            </Select>
          </Form.Item>
        )}

        <Form.Item
          label="Tên "
          name="categoryname"
          rules={[{ required: true, message: "Nhập tên danh mục!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{ offset: props.value?.id > 0 ? 21 : 20, span: 24 }}
        >
          <Button type="primary" htmlType="submit">
            {props.value?.id > 0 ? "Sửa" : "Thêm"}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalCategory;
