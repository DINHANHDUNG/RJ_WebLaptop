import { Image, Input } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductByIdAdmin } from "../../../features/admin/productAdnim";
import { currency, Numberformat, useAppSelector } from "../../commom/hooks";
import { productAdminStore } from "../../commom/use-selector";
import BoxPromotion from "../../component/customer/product/box-promotion/box-promotion";
import ConfigProduct from "../../component/customer/product/config-product/config-product";
import SlickCarousel from "../../component/slickCarousel/slickCarouselFirm";
import SlickDetailProduct from "../../component/slickCarousel/slickDetailProduct";

function DetailProduct() {
  const { ID } = useParams();
  const dispatch = useDispatch();
  const { TextArea } = Input;
  const products = useAppSelector(productAdminStore);
  useEffect(() => {
    dispatch(getProductByIdAdmin({ id: Number(ID) }));
  }, []);

  console.log(products);

  return (
    <>
      {products.loading == false ? (
        <div className="container" style={{ marginTop: "20px" }}>
          <div className="product-details-top mb-2">
            {products.listproduct[0]?.id > 0 ? (
              <>
                <div className="row">
                  <div className="col-md-6">
                    <div className="product-gallery">
                      <figure className="product-main-image">
                        <Image
                          width={"100%"}
                          id="product-zoom"
                          data-zoom-image={
                            "http://103.173.155.138:5500/images/" +
                            products.listproduct[0]?.productimages[0]?.imagename
                          }
                          // height={100}
                          src={
                            "http://103.173.155.138:5500/images/" +
                            products.listproduct[0]?.productimages[0]?.imagename
                          }
                        />
                      </figure>
                      {/* <SlickDetailProduct /> */}
                      <SlickCarousel
                        value={products.listproduct[0].productimages}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="product-details">
                      <h1 className="product-title animate-charcter">
                        {products.listproduct[0].productname}
                      </h1>

                      <div
                        className="product-price"
                        style={{ justifyContent: "left" }}
                      >
                        <span>
                          {Numberformat(products.listproduct[0].price_sale)} VNĐ
                        </span>
                        &nbsp;
                        <del style={{ fontSize: "13px", opacity: "0.4" }}>
                          {Numberformat(products.listproduct[0].price_origin)}{" "}
                          VNĐ
                        </del>{" "}
                      </div>

                      {products.listproduct[0].product_dmsps?.map(
                        (val: any) => (
                          <p>{val.dmsp.dmsp_name}</p>
                        )
                      )}
                      <div className="product-content">
                        {products.listproduct[0].productdetails?.map(
                          (val: any) => (
                            <p>
                              <span style={{ color: "green", fontWeight: 600 }}>
                                ✔
                              </span>{" "}
                              <span style={{ color: "black", fontWeight: 600 }}>
                                {val.title}{" "}
                              </span>
                              {val.specifications}
                            </p>
                          )
                        )}
                      </div>
                    </div>

                    <ConfigProduct value={products.listproduct[0]} />

                    <BoxPromotion value={products.listproduct[0]} />
                  </div>
                </div>

                {/* <div className="row">
                  <figure className="product-main-image">
                    <img
                      id="product-zoom"
                      src={
                        "http://103.173.155.138:5500/images/" +
                        products.listproduct[0]?.productimages[0]?.imagename
                      }
                      data-zoom-image={
                        "http://103.173.155.138:5500/images/" +
                        products.listproduct[0]?.productimages[0]?.imagename
                      }
                      alt="product image"
                    />

                    <a
                      href="#"
                      id="btn-product-gallery"
                      className="btn-product-gallery"
                    >
                      <i className="icon-arrows"></i>
                    </a>
                  </figure>

                  <div
                    id="product-zoom-gallery"
                    className="product-image-gallery"
                  >
                    {products.listproduct[0].productimages
                      .filter((val: any) => val.type != "1")
                      ?.map((v: any) => (
                        <a
                          className="product-gallery-item active"
                          href="#"
                          data-image={
                            "http://103.173.155.138:5500/images/" + v.imagename
                          }
                          data-zoom-image={
                            "http://103.173.155.138:5500/images/" + v.imagename
                          }
                        >
                          <img
                            src={
                              "http://103.173.155.138:5500/images/" +
                              v.imagename
                            }
                            alt="product side"
                          />
                        </a>
                      ))}
                  </div>
                </div> */}
                
              </>
            ) : (
              <div className="row">Sản phẩm không tồn tại</div>
            )}
          </div>

          <div className="product-details-tab">
            <ul className="nav nav-pills justify-content-center" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="product-desc-link"
                  data-toggle="tab"
                  href="#product-desc-tab"
                  role="tab"
                  aria-controls="product-desc-tab"
                  aria-selected="true"
                >
                  Mô tả
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="product-info-link"
                  data-toggle="tab"
                  href="#product-info-tab"
                  role="tab"
                  aria-controls="product-info-tab"
                  aria-selected="false"
                >
                  Thông số kỹ thuật
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  id="product-price-link"
                  data-toggle="tab"
                  href="#product-price-tab"
                  role="tab"
                  aria-controls="product-info-tab"
                  aria-selected="false"
                >
                  Bảng giá nâng cấp
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="product-desc-tab"
                role="tabpanel"
                aria-labelledby="product-desc-link"
              >
                <div className="product-desc-content">
                  {/* <p>{products.listproduct[0]?.describe}</p> */}
                  <TextArea
                    rows={20}
                    value={products.listproduct[0]?.describe}
                    readOnly
                  />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="product-info-tab"
                role="tabpanel"
                aria-labelledby="product-info-link"
              >
                <div className="product-desc-content">
                  {products.listproduct[0]?.productdetails?.map((val: any) => (
                    <p>
                      <span style={{ color: "green", fontWeight: 600 }}>✔</span>{" "}
                      <span style={{ color: "black", fontWeight: 600 }}>
                        {val.title}{" "}
                      </span>
                      {val.specifications}
                    </p>
                  ))}
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="product-price-tab"
                role="tabpanel"
                aria-labelledby="product-price-link"
              >
                <div className="product-desc-content">
                  <p>
                    <h3 style={{ fontWeight: 600 }}>
                      Sò Lap Xin Gửi Tới Quý Khách Hàng Bảng Giá Nâng Cấp:
                    </h3>
                    <h3 style={{ fontWeight: 600 }}>Giá Nâng Cấp Chip:</h3>
                    Từ i5 - 2520M lên i7 - 2620M thêm 890.000đ <br /> Từ i5 -
                    3320M lên i7 - 3520M thêm 1.200.000đ <br /> Từ i5 - 2520M
                    lên i7 - 2720QM thêm 1.400.000đ <br /> Từ i5 - 3320M lên i7
                    - 3720QM thêm 1.900.000đ
                    <hr />
                    <h3 style={{ fontWeight: 600 }}>
                      Giá Nâng Cấp Ram (PC3-PC3L)
                    </h3>
                    <p>Từ 4gb lên 8gb thêm - 500.000đ</p>
                    <p>Từ 8gb lên 16gb thêm - 850.000đ</p>
                    <p>Từ 16gb lên 32gb thêm - 1.550.000đ</p>
                    <hr />
                    <h3 style={{ fontWeight: 600 }}>Ram (DDR4)</h3>
                    <p>Từ 4gb lên 8gb thêm - 600.000đ</p>
                    <p>Từ 8gb lên 16gb thêm - 900.000đ</p>
                    <p>Từ 16gb lên 32gb thêm - 1.700.000đ</p>
                    <hr />
                    <h3 style={{ fontWeight: 600 }}>
                      {" "}
                      Giá Nâng Cấp Ổ Cứng (2.5 inch):
                    </h3>
                    <p>
                      Từ HDD 500gb lên SSD 120gb (mới) thêm - 750.000đ nay chỉ
                      còn 590.000đ
                    </p>
                    <p>
                      Từ HDD 500gb lên SSD 240gb (mới) thêm - 1.250.000đ nay chỉ
                      còn 850.000đ
                    </p>
                    <p>
                      Từ HDD 1TB lên SSD 240gb (mới) thêm - 1.250.000đ nay chỉ
                      còn 650.000đ
                    </p>
                    <p>
                      Từ SSD 120gb (cũ) lên SSD 240gb (mới) thêm - 900.000đ nay
                      chỉ còn 700.000đ
                    </p>
                    <p>
                      Từ SSD 120gb (cũ) lên SSD 480gb (mới) thêm - 1.650.000đ
                      nay chỉ còn 1.400.000đ
                    </p>
                    <p>
                      Từ SSD 256gb (cũ) lên SSD 480gb (mới) thêm - 1.450.000đ
                      nay chỉ còn 1.200.000đ
                    </p>
                    <hr />
                    <h3 style={{ fontWeight: 600 }}>
                      Áp dụng với ổ dạng M2 sata :
                    </h3>
                    <p>
                      Từ SSD 120gb (cũ) lên SSD 240gb (mới) thêm - 1.200.000đ
                      nay chỉ còn 800.000đ
                    </p>
                    <p>
                      Từ SSD 120gb (cũ) lên SSD 480gb (mới) thêm - 1.650.000đ
                      nay chỉ còn 1.500.000đ
                    </p>
                    <p>
                      Từ SSD 256gb (cũ) lên SSD 480gb (mới) thêm - 1.450.000đ
                      nay chỉ còn 1.300.000đ
                    </p>
                    <hr />
                    <h2 style={{ color: "red" }}>
                      {" "}
                      Lưu ý: Giá nâng cấp áp dụng trong 15 ngày đầu kể từ khi
                      quý khách mua máy.
                    </h2>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Sản phẩm không tồn tại"
      )}
    </>
  );
}

export default DetailProduct;
