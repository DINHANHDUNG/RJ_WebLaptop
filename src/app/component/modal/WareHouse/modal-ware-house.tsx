import { Button, Form, Input, InputNumber, Modal } from "antd";
import React, { useEffect } from "react";
import {
  getAllWareHouseProductAdmin,
  getSearchWareHouseProductAdmin,
  postAddWareHouseProductByIdAdmin,
  postEditWareHcouseProductByIdAdmin,
} from "../../../../features/admin/wareHouseProductAdnim";
import { useAppDispatch } from "../../../commom/hooks";

interface propsModalWareHouse {
  visible: boolean;
  toggle: () => void;
  value: {
    id: number;
    productcode: string;
    productname: string;
    numberinput: number;
    numberoutput: number;
  };
  pageSize: number;
  page: number;
  visibleSearch: boolean;
  productkey: string;
}
function ModalWareHouseProduct(props: propsModalWareHouse) {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  useEffect(() => {
    form.resetFields();
  }, [props.value.id]);

  function onFinish(value: any) {
    if (props.value.id > 0) {
      // Sửa
      dispatch(
        postEditWareHcouseProductByIdAdmin({
          id: props.value.id,
          productcode: value.productcode,
          productname: value.productname,
          numberinput: value.numberinput,
          numberoutput: value.numberoutput,
        })
      ).then(() => {
        if (props.visibleSearch) {
          dispatch(
            getSearchWareHouseProductAdmin({
              productkey: props.productkey,
              page: props.page,
              noitem: props.pageSize,
            })
          );
        } else {
          dispatch(
            getAllWareHouseProductAdmin({
              page: props.page,
              noitem: props.pageSize,
            })
          );
        }
      });
    } else {
      // Thêm
      dispatch(
        postAddWareHouseProductByIdAdmin({
          productcode: value.productcode,
          productname: value.productname,
          numberinput: value.numberinput,
          numberoutput: value.numberoutput,
        })
      ).then(() => {
        if (props.visibleSearch) {
          dispatch(
            getSearchWareHouseProductAdmin({
              productkey: props.productkey,
              page: props.page,
              noitem: props.pageSize,
            })
          );
        } else {
          dispatch(
            getAllWareHouseProductAdmin({
              page: props.page,
              noitem: props.pageSize,
            })
          );
        }
      });
    }
    // getSearchWareHouseProductAdmin
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
      width={1000}
      footer={null}
    >
      <Form
        name="basic"
        labelCol={{ span: 3 }}
        form={form}
        // wrapperCol={{ span: 16 }}f
        initialValues={{
          productcode: props.value.productcode,
          productname: props.value.productname,
          numberoutput: props.value.numberoutput,
          numberinput: props.value.numberinput,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Mã máy "
          name="productcode"
          rules={[{ required: true, message: "Nhập mã máy!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Tên máy "
          name="productname"
          rules={[{ required: true, message: "Nhập tên máy!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Số lượng nhập"
          name="numberinput"
          rules={[{ required: true, message: "Nhập số lượng nhập!" }]}
        >
          <InputNumber size="large" style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Số lượng xuất"
          name="numberoutput"
          rules={[{ required: true, message: "Nhập số lượng xuất!" }]}
        >
          <InputNumber size="large" style={{ width: "100%" }} />
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

export default ModalWareHouseProduct;
