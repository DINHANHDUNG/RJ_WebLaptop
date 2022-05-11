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

import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { FormInstance } from "rc-field-form";
import React, { useEffect, useRef, useState } from "react";
import {
  getAllProductAdmin,
  getProductSearchAdmin,
  postAddProductByIdAdmin,
  postEditProductByIdAdmin,
} from "../../../../features/admin/productAdnim";
import { getAllPromotionAdmin } from "../../../../features/admin/promotion";
import "../../../assets/css/cssGlobal/style.css";
import { useAppDispatch, useAppSelector } from "../../../commom/hooks";
import {
  categoryAdminStore,
  categoryProductAdminStore,
  promotionAdminStore,
} from "../../../commom/use-selector";
import { Product } from "../../../types/product";
import CkeditorCpn from "../../CkEditor/ckeditorCpn";
import { openNotification } from "../../Notifi/noti";
import { getAllCategoryProductAdmin } from "../../../../features/admin/categoryProductAdnim";
import uploadIMGAdminAPI from "../../../commom/api/UploadIMG/upload";

interface propsModalProduct {
  visible: boolean;
  toggle: () => void;
  value: Product;
  valueInputSelect: number;
  page: number;
  pageSize: number;
  visibleSearch: boolean;
  productkey: string;
}
function ModalProduct(props: propsModalProduct) {
  console.log(props.value, props.value);
  const formRef: any = React.createRef<FormInstance>();
  const { Option } = Select;
  const { TextArea } = Input;
  const categorys = useAppSelector(categoryAdminStore);
  const promotion = useAppSelector(promotionAdminStore);
  const categoryproduct = useAppSelector(categoryProductAdminStore);
  const [id_dmsps, setId_dmsps] = useState([]);
  console.log(id_dmsps);

  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  useEffect(() => {
    let arrid_dmsps = [] as any;
    if (props.value.id) {
      props.value.product_dmsps.map((val: any) => {
        console.log(val);
        arrid_dmsps.push(val.id_dmsp);
      });
    }
    setFileIMG(props.value.productimages ? props.value.productimages : []);

    // form.setFieldsValue({
    //   id_dmsps: arrid_dmsps,
    // })
    setId_dmsps(arrid_dmsps);
    form.resetFields();
  }, [props.value.id]);

  useEffect(() => {
    form.resetFields();
  }, [id_dmsps]);

  useEffect(() => {
    dispatch(
      getAllPromotionAdmin({
        page: 0,
        noitem: 0,
      })
    );

    dispatch(
      getAllCategoryProductAdmin({
        page: 0,
        noitem: 0,
      })
    );
  }, []);

  function onFinish(value: any) {
    console.log(value);

    let arrIMG = [] as any;

    fileIMG.map((val: any, idx: any) => {
      console.log(idx);
      if (idx === 0) {
        arrIMG.push({
          imagename: val.imagename,
          type: "1",
        });
      } else {
        arrIMG.push({
          imagename: val.imagename,
          type: "2",
        });
      }
    });

    console.log(arrIMG);
    if (arrIMG.length >= 5) {
      if (props.value.id > 0) {
        // Sửa
        console.log("Sửa", value);
        dispatch(
          postEditProductByIdAdmin({
            ...value,
            id: props.value.id,
            price_sale: Number(value.price_sale),
            price_origin: Number(value.price_origin),
            productimages: arrIMG,
          })
        ).then((res) => {
          if (props.visibleSearch) {
            dispatch(
              getProductSearchAdmin({
                productKey: props.productkey ? props.productkey : "",
                minprice: null,
                maxprice: null,
                page: props.page,
                noitem: props.pageSize,
              })
            );
          } else {
            dispatch(
              getAllProductAdmin({
                id_category: props.valueInputSelect,
                sort: 0,
                page: props.page,
                noitem: props.pageSize,
              })
            );
          }
          arrImgDelete?.map((value: any) => {
            deleteImgArr(value);
          });
          props.toggle();
        });
      } else {
        // Thêm
        dispatch(
          postAddProductByIdAdmin({
            ...value,
            price_sale: Number(value.price_sale),
            price_origin: Number(value.price_origin),
            productimages: arrIMG,
          })
        ).then(() => {
          if (props.visibleSearch) {
            dispatch(
              getProductSearchAdmin({
                productKey: props.productkey ? props.productkey : "",
                minprice: null,
                maxprice: null,
                page: props.page,
                noitem: props.pageSize,
              })
            );
          } else {
            dispatch(
              getAllProductAdmin({
                id_category: props.valueInputSelect,
                page: props.page,
                sort: 0,
                noitem: props.pageSize,
              })
            );
          }
          arrImgDelete?.map((value: any) => {
            deleteImgArr(value);
          });
          props.toggle();
        });
      }
    } else {
      if (props.value.id > 0) {
        // Sửa
        console.log("Sửa", value);
        dispatch(
          postEditProductByIdAdmin({
            ...value,
            id: props.value.id,
            price_sale: Number(value.price_sale),
            price_origin: Number(value.price_origin),
            productimages: arrIMG,
          })
        ).then((res) => {
          dispatch(
            getAllProductAdmin({
              id_category: props.valueInputSelect,
              page: props.page,
              sort: 0,
              noitem: props.pageSize,
            })
          );
          arrImgDelete?.map((value: any) => {
            deleteImgArr(value);
          });
          props.toggle();
        });
      } else {
        // Thêm
        dispatch(
          postAddProductByIdAdmin({
            ...value,
            price_sale: Number(value.price_sale),
            price_origin: Number(value.price_origin),
            productimages: arrIMG,
          })
        ).then(() => {
          dispatch(
            getAllProductAdmin({
              id_category: props.valueInputSelect,
              page: props.page,
              sort: 0,
              noitem: props.pageSize,
            })
          );
          arrImgDelete?.map((value: any) => {
            deleteImgArr(value);
          });
          props.toggle();
        });
      }
      // openNotification({
      //   message: "Chọn ít nhất 5 ảnh",
      //   type: "error",
      // });
      openNotification({
        message: "Bạn đang chọn ít hơn 5 ảnh sẽ gây lỗi giao diện",
        type: "warning",
      });
    }
  }

  function deleteImgArr(value: any) {
    if (value.imagename.split(".").length > 1) {
      uploadIMGAdminAPI
        .postDeleteIMG({
          imageName: value.imagename,
        })
        .then((res) => {
          console.log("Thành công");
        });
    }
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
  const [fileIMG, setFileIMG] = useState([] as any);
  const [uploading, setUploading] = useState(false);
  const [arrImgDelete, setArrImgDelete] = useState([] as any);
  console.log(fileIMG);
  console.log(arrImgDelete);

  function deleteIMG(value: any) {
    console.log("Đang xóa", value);

    setArrImgDelete((pre: any) => {
      console.log(pre);

      return [...pre, value];
    });

    setFileIMG((pre: any) => {
      console.log(pre);

      return pre.filter((values: any) => values.imagename != value.imagename);
    });
  }

  function onchangeIMG(e: any) {
    console.log(e.target.files);

    console.log(e.target.files[0]);

    for (let index = 0; index < e.target.files.length; index++) {
      uploadImage(e.target.files[index]);
    }
  }

  function uploadImage(e: any) {
    const data = new FormData();
    data.append("image", e);
    setUploading(true);
    uploadIMGAdminAPI
      .postUploadIMG(data)
      .then((res) => {
        // setFileIMG(res.data.data.imageName);
        console.log(res.data.data.imageName);
        console.log(res.data.data.imageUrl);
        setFileIMG((pre: any) => [
          ...pre,
          { imagename: res.data.data.imageName },
        ]);
        setUploading(false);
      })
      .catch((err) => {
        console.log("Lỗi upload");
        setUploading(false);
      });
  }

  return (
    <Modal
      title={props.value?.id > 0 ? "Sửa sản phẩm" : "Thêm sản phẩm"}
      centered
      visible={props.visible}
      onOk={() => props.toggle()}
      onCancel={() => props.toggle()}
      width={"80%"}
      footer={null}
    >
      <Form
        ref={formRef}
        name="basic"
        // labelCol={{ span: 3 }}
        form={form}
        layout="vertical"
        // wrapperCol={{ span: 16 }}
        initialValues={{
          id_category: props.value.id_category,
          id_promotion: props.value.id_promotion,
          id_dmsps: id_dmsps,
          productcode: props.value.productcode,
          productname: props.value.productname,
          configuration: props.value.configuration,
          describe: props.value.describe,
          price_sale: props.value.price_sale,
          price_origin: props.value.price_origin,
          productdetails: props.value.productdetails,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Row gutter={[8, 0]}>
          <Col md={8} xs={24}>
            <Form.Item
              label="Danh mục"
              name="id_category"
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
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
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
          </Col>

          <Col md={8} xs={24}>
            <Form.Item
              label="Khuyến mại"
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
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
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
          </Col>

          <Col md={8} xs={24}>
            <Form.Item
              label="Danh mục sản phẩm"
              name="id_dmsps"
              rules={[{ required: true, message: "Chọn danh mục sản phẩm!" }]}
            >
              <Select
                showSearch
                size="large"
                placeholder="Chọn danh mục sản phẩm"
                optionFilterProp="children"
                mode="multiple"
                onChange={onChange}
                onSearch={onSearch}
                style={{ minWidth: "60px", marginRight: "props.pageSizepx" }}
                filterOption={(input, option: any) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                filterSort={(optionA: any, optionB: any) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
              >
                {categoryproduct.listcategoryproduct.map((item) => (
                  <Option value={item.id} key={item.id}>
                    {item.dmsp_name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[8, 0]}>
          <Col md={12} xs={24}>
            <Form.Item
              label="Mã "
              name="productcode"
              rules={[{ required: true, message: "Nhập mã sản phẩm!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={12} xs={24}>
            <Form.Item
              label="Tên "
              name="productname"
              rules={[{ required: true, message: "Nhập tên sản phẩm!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[8, 0]}>
          <Col md={12} xs={24}>
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
          </Col>
          <Col md={12} xs={24}>
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
          </Col>
        </Row>

        <Form.Item
          label="Mô tả"
          name="describe"
          rules={[{ required: true, message: "Nhập tên sản phẩm!" }]}
        >
          <TextArea rows={6} />
        </Form.Item>

        <Form.Item
          label="Cấu hình"
          name="configuration"
          rules={[{ required: true, message: "Nhập tên sản phẩm!" }]}
        >
          <Input />
        </Form.Item>
        <h5 style={{ textAlign: "center" }}>Chi tiết sản phẩm</h5>

        <Form.List name="productdetails">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map((field, index) => (
                  <div key={field.key}>
                    <Row gutter={[8, 0]}>
                      <Col md={12} xs={24}>
                        <Form.Item
                          name={[index, "title"]}
                          label="Tiêu đề"
                          rules={[{ required: true, message: "Nhập tiêu đề!" }]}
                        >
                          <Input placeholder="Tiêu đề" />
                        </Form.Item>
                      </Col>
                      <Col md={11} xs={23}>
                        <Form.Item
                          name={[index, "specifications"]}
                          label={`TSKD `}
                          rules={[
                            {
                              required: true,
                              message: "Nhập thông số kỹ thuật!",
                            },
                          ]}
                        >
                          <Input placeholder="Thông số kỹ thuật" />
                        </Form.Item>
                      </Col>
                      <Col
                        md={1}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            style={{ fontSize: "20px" }}
                            className="dynamic-delete-button"
                            onClick={() => remove(field.name)}
                          />
                        ) : null}
                      </Col>
                    </Row>
                    <hr />
                  </div>
                ))}
                <Form.Item>
                  <PlusCircleOutlined
                    onClick={() => add()}
                    style={{
                      fontSize: "20px",
                      float: "right",
                      marginRight: "25px",
                    }}
                  />
                </Form.Item>
              </div>
            );
          }}
        </Form.List>
        {/* <CkeditorCpn /> */}

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

        <Row gutter={[0, 0]}>
          {fileIMG?.map((value: any, idx: any) => {
            console.log(value);

            return (
              <Col span={6}>
                <div className="info_image">
                  <Image
                    key={idx}
                    width={150}
                    height={150}
                    src={
                      // value.split(".").length > 1
                      //   ? "http://103.173.155.138:5500/images/" + value
                      //   : "https://cf.shopee.vn/file/" + value
                      "http://103.173.155.138:5500/images/" + value.imagename
                    }
                  />
                  <span
                    className="icon_delete"
                    onClick={() => deleteIMG(value)}
                  >
                    x
                  </span>
                </div>
              </Col>
            );
          })}
        </Row>

        <input
          type="file"
          accept="image/*"
          multiple
          // style={{ display: "none" }}
          onChange={onchangeIMG}
          // ref={inputRef}
        />

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
