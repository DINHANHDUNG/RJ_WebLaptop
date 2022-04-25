import { Image } from "antd";
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
                      <h1 className="product-title">
                        {products.listproduct[0].productname}
                      </h1>
                      <div
                        className="product-price"
                        style={{ justifyContent: "left" }}
                      >
                        <span>{Numberformat(products.listproduct[0].price_sale)} VNĐ</span>
                        &nbsp;
                        <del style={{ fontSize: "13px", opacity: "0.4" }}>
                          {Numberformat(products.listproduct[0].price_origin)} VNĐ
                        </del>{" "}
                        
                        
                      </div>
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
                  <p>{products.listproduct[0]?.describe}</p>
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
                  <h3>Bảng giá nâng cấp</h3>
                  <p>
                    Sò Lap Xin Gửi Tới Quý Khách Hàng Bảng Giá Nâng Cấp: <br />{" "}
                    Giá Nâng Cấp Chip: Từ i5 - 2520M lên i7 - 2620M thêm
                    890.000đ <br /> Từ i5 - 3320M lên i7 - 3520M thêm 1.200.000đ{" "}
                    <br /> Từ i5 - 2520M lên i7 - 2720QM thêm 1.400.000đ <br />{" "}
                    Từ i5 - 3320M lên i7 - 3720QM thêm 1.900.000đ
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
