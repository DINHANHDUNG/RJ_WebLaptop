import { Button, Form, Input, Modal } from "antd";
import React, { useEffect } from "react";
import {
  getAllCategoryProductAdmin,
  postAddCategoryProductByIdAdmin,
  postEditCategoryProductByIdAdmin,
} from "../../../../features/admin/categoryProductAdnim";
import { useAppDispatch } from "../../../commom/hooks";

interface propsModalCategory {
  visible: boolean;
  toggle: () => void;
  value: {
    id: number;
    dmsp_name: string;
  };
  pageSize: number;
  page: number;
}
function ModalCategoryProduct(props: propsModalCategory) {
  const dispatch = useAppDispatch();
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
        postEditCategoryProductByIdAdmin({
          id: props.value.id,
          dmsp_name: value.dmsp_name,
        })
      ).then(() =>
        dispatch(
          getAllCategoryProductAdmin({
            page: props.page,
            noitem: props.pageSize,
          })
        )
      );
    } else {
      // Thêm
      dispatch(
        postAddCategoryProductByIdAdmin({
          dmsp_name: value.dmsp_name,
        })
      ).then(() =>
        dispatch(
          getAllCategoryProductAdmin({
            page: props.page,
            noitem: props.pageSize,
          })
        )
      );
    }
  }

  return (
    <Modal
      title={props.value?.id > 0 ? "Sửa danh mục sp" : "Thêm danh mục sp"}
      centered
      visible={props.visible}
      onOk={() => props.toggle()}
      onCancel={() => props.toggle()}
      okText={"Thêm"}
      cancelText={"Hủy"}
      width={500}
      footer={null}
    >
      <Form
        name="basic"
        labelCol={{ span: 3 }}
        form={form}
        // wrapperCol={{ span: 16 }}
        initialValues={{
          dmsp_name: props.value.dmsp_name,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Tên "
          name="dmsp_name"
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

export default ModalCategoryProduct;
