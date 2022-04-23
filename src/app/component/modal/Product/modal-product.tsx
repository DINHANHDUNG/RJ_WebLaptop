import {
  Button,
  Col,
  Form,
  Image,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
} from "antd";
import { FormInstance } from "rc-field-form";
import React, { useEffect, useRef, useState } from "react";
import { postEditProductByIdAdmin } from "../../../../features/admin/productAdnim";
import { getAllPromotionAdmin } from "../../../../features/admin/promotion";
import "../../../assets/css/cssGlobal/style.css";
import { useAppDispatch, useAppSelector } from "../../../commom/hooks";
import {
  categoryAdminStore,
  promotionAdminStore,
} from "../../../commom/use-selector";
import { Product } from "../../../types/product";
import { openNotification } from "../../Notifi/noti";

interface propsModalProduct {
  visible: boolean;
  toggle: () => void;
  value: Product;
  valueInputSelect: number;
  page: number;
  pageSize: number;
}
function ModalProduct(props: propsModalProduct) {
  console.log(props.value, props.value);
  const formRef: any = React.createRef<FormInstance>();
  const { Option } = Select;
  const categorys = useAppSelector(categoryAdminStore);
  const promotion = useAppSelector(promotionAdminStore);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  useEffect(() => {
    form.resetFields();
    // setFileIMG(props.value.image);
  }, [props.value.id]);

  useEffect(() => {
    dispatch(
      getAllPromotionAdmin({
        page: 0,
        noitem: 0,
      })
    );
  }, []);

  function onFinish(value: any) {
    console.log(value);
    // if (fileIMG && fileIMG.length > 0) {
    //   if (props.value.id > 0) {
    //     // Sửa
    //     console.log("Sửa", value);
    //     dispatch(
    //       postEditProductByIdAdmin({
    //         id: props.value.id,
    //         image: fileIMG,
    //         productcode: value.productcode ? value.productcode : "",
    //         linkshop: value.linkshop ? value.linkshop : "",
    //         linkaffiliate: value.linkaffiliate ? value.linkaffiliate : "",
    //         price: Number(value.price),
    //         refund: Number(value.refund),
    //         quantily: Number(value.quantily),
    //       })
    //     ).then((res) => {
    //       dispatch(
    //         getAllProductByCategoryAdmin({
    //           idcategory: 0,
    //           page: props.page,
    //           noitem: props.pageSize,
    //         })
    //       );
    //       props.toggle();
    //     });
    //   } else {
    //     // Thêm
    //     dispatch(
    //       postAddProductByIdAdmin({
    //         ...value,
    //         image: fileIMG,
    //         linkshop: value.linkshop ? value.linkshop : "",
    //         linkaffiliate: value.linkaffiliate ? value.linkaffiliate : "",
    //         idshop:
    //           acc.listuser.permission === "1"
    //             ? value.idshop
    //             : acc.listuser.shops[0].id,
    //         price: Number(value.price),
    //         refund: Number(value.refund),
    //         quantily: Number(value.quantily),
    //       })
    //     ).then(() => {
    //       dispatch(
    //         getAllProductByCategoryAdmin({
    //           // idcategory: 0,
    //           page: props.page,
    //           noitem: props.pageSize,
    //         })
    //       );

    //       props.toggle();
    //     });
    //   }
    // } else {
    //   openNotification({
    //     message: "Chọn ảnh",
    //     type: "error",
    //   });
    // }
  }

  function onChange(value: any) {
    console.log(`selected ${value}`);
  }

  function onSearch(val: any) {
    console.log("search:", val);
  }

  //Select
  const valueSelect = categorys.listcategory.filter((item) => item.id != 0);
  console.log(valueSelect);

  //Xử lý ảnh
  const inputRef = useRef(null as any);
  const [fileIMG, setFileIMG] = useState(String);
  const [uploading, setUploading] = useState(false);

  function deleteIMG() {
    console.log("Đang xóa");

    // if (fileIMG.split(".").length > 1) {
    //   uploadIMGAdminAPI
    //     .postDeleteIMG({
    //       imageName: fileIMG,
    //     })
    //     .then((res) => {
    //       console.log("Thành công");
    //     });
    // }
    setFileIMG("");
  }

  function onchangeIMG(e: any) {
    console.log(e.target.files[0]);
    const data = new FormData();
    data.append("image", e.target.files[0]);
    setUploading(true);
    // uploadIMGAdminAPI
    //   .postUploadIMG(data)
    //   .then((res) => {
    //     setFileIMG(res.data.data.imageName);
    //     console.log(res.data.data.imageName);
    //     console.log(res.data.data.imageUrl);
    //     setUploading(false);
    //   })
    //   .catch((err) => {
    //     console.log("Lỗi upload");
    //     setUploading(false);
    //     setFileIMG("");
    //   });
  }

  const handleOentFileInput = () => {
    inputRef?.current.click();
  };

  return (
    <Modal
      title={props.value?.id > 0 ? "Sửa sản phẩm" : "Thêm sản phẩm"}
      centered
      visible={props.visible}
      onOk={() => props.toggle()}
      onCancel={() => props.toggle()}
      width={800}
      footer={null}
    >
      <Form
        ref={formRef}
        name="basic"
        labelCol={{ span: 3 }}
        form={form}
        // wrapperCol={{ span: 16 }}
        initialValues={
          {
            // idcategory: props.value.idcategory,
            // idshop: props.value.idshop,
            // productcode: props.value.productcode,
            // productname: props.value.productname,
            // quantily: props.value.quantily,
            // linkaffiliate: props.value.linkaffiliate,
            // linkshop: props.value.linkshop,
            // price: props.value.price,
            // refund: props.value.refund,
          }
        }
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Danh mục "
          name="idcategory"
          rules={[{ required: true, message: "Chọn danh mục!" }]}
        >
          <Select
            showSearch
            size="large"
            placeholder="Chọn danh mục"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
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
            {valueSelect.map((item) => (
              <Option value={item.id} key={item.id}>
                {item.categoryname}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Khuyến mại "
          name="id_promotion"
          rules={[{ required: true, message: "Chọn khuyến mại!" }]}
        >
          <Select
            showSearch
            size="large"
            placeholder="Chọn khuyến mại"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
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
            {promotion.listpromotion.map((item) => (
              <Option value={item.id} key={item.id}>
                {item.Promotion_name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Mã "
          name="productcode"
          // rules={[{ required: true, message: "Nhập mã sản phẩm!" }]}
        >
          <Input />
        </Form.Item>
        {/* ) : null} */}

        <Form.Item
          label="Tên "
          name="productname"
          rules={[{ required: true, message: "Nhập tên sản phẩm!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Giá gốc "
          name="price_origin"
          rules={[{ required: true, message: "Nhập giá!" }]}
        >
          <InputNumber
            maxLength={25}
            style={{ width: "100%" }}
            formatter={(value: any) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            size="large"
            parser={(value: any) => value.replace(/\$\s?|(,*)/g, "")}
          />
        </Form.Item>

        <Form.Item
          label="Giá bán "
          name="price_sale"
          rules={[{ required: true, message: "Nhập giá!" }]}
        >
          <InputNumber
            maxLength={25}
            style={{ width: "100%" }}
            formatter={(value: any) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            size="large"
            parser={(value: any) => value.replace(/\$\s?|(,*)/g, "")}
          />
        </Form.Item>


        {/* <Form.Item
          wrapperCol={{ offset: props.value?.id > 0 ? 3 : 3, span: 24 }}
        >
          {fileIMG ? (
            // <Image width={100} height={100} src={`http://103.173.155.138:5500/images/${fileIMG}`}/>
            <div className="info_image">
              <Image
                width={150}
                height={150}
                src={
                  fileIMG.split(".").length > 1
                    ? "http://103.173.155.138:5500/images/" + fileIMG
                    : "https://cf.shopee.vn/file/" + fileIMG
                }
              />
              <span className="icon_delete" onClick={deleteIMG}>
                x
              </span>
            </div>
          ) : (
            <div>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={onchangeIMG}
                ref={inputRef}
              />
              <Button type="primary" onClick={handleOentFileInput}>
                Thêm ảnh
              </Button>
            </div>
          )}
        </Form.Item> */}

        <Form.Item
          wrapperCol={{ offset: props.value?.id > 0 ? 22 : 21, span: 24 }}
        >
          <Button type="primary" htmlType="submit">
            {props.value?.id > 0 ? "Sửa" : "Thêm"}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalProduct;
