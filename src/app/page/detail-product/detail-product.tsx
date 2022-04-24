import { Image } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductByIdAdmin } from "../../../features/admin/productAdnim";
import { useAppSelector } from "../../commom/hooks";
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
                      src={`https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04837-dell-inspiron-5410-laptoptcc-2048x1152.jpg`}
                    />
                    {/* <img
                      id="product-zoom"
                      src="https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04837-dell-inspiron-5410-laptoptcc-2048x1152.jpg"
                      data-zoom-image="https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04837-dell-inspiron-5410-laptoptcc-2048x1152.jpg"
                      alt="product image"
                    /> */}

                    
                  </figure>
                  {/* <SlickDetailProduct /> */}
                  <SlickCarousel />
                  {/* <div
                    id="product-zoom-gallery"
                    className="product-image-gallery"
                  >
                    <a
                      className="product-gallery-item active"
                      href="#"
                      data-image="https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04837-dell-inspiron-5410-laptoptcc-2048x1152.jpg"
                      data-zoom-image="https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04837-dell-inspiron-5410-laptoptcc-2048x1152.jpg"
                    >
                      <img
                        src="https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04837-dell-inspiron-5410-laptoptcc-2048x1152.jpg"
                        alt="product side"
                      />
                    </a>

                    <a
                      className="product-gallery-item"
                      href="#"
                      data-image="https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04832-dell-inspiron-5410-laptoptcc-2048x1152.jpg"
                      data-zoom-image="https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04832-dell-inspiron-5410-laptoptcc-2048x1152.jpg"
                    >
                      <img
                        src="https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04837-dell-inspiron-5410-laptoptcc-2048x1152.jpg"
                        alt="product cross"
                      />
                    </a>

                    <a
                      className="product-gallery-item"
                      href="#"
                      data-image="https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04837-dell-inspiron-5410-laptoptcc-2048x1152.jpg"
                      data-zoom-image="https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04837-dell-inspiron-5410-laptoptcc-2048x1152.jpg"
                    >
                      <img
                        src="https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04837-dell-inspiron-5410-laptoptcc-2048x1152.jpg"
                        alt="product with model"
                      />
                    </a>

                    <a
                      className="product-gallery-item"
                      href="#"
                      data-image="https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04837-dell-inspiron-5410-laptoptcc-2048x1152.jpg"
                      data-zoom-image="https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04837-dell-inspiron-5410-laptoptcc-2048x1152.jpg"
                    >
                      <img
                        src="https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04837-dell-inspiron-5410-laptoptcc-2048x1152.jpg"
                        alt="product back"
                      />
                    </a>
                  </div> */}
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
                    <del style={{ fontSize: "13px", opacity: "0.4" }}>
                      {products.listproduct[0].price_sale} VNĐ
                    </del>{" "}
                    &nbsp;
                    <span>{products.listproduct[0].price_sale} VNĐ</span>
                  </div>
                  <div className="product-content">
                    <p>
                      <span style={{ color: "green", fontWeight: 600 }}>✔</span>{" "}
                      <span style={{ color: "black", fontWeight: 600 }}>
                        CPU{" "}
                      </span>
                      Intel® Core™ i3-1115G4
                    </p>
                    <p>
                      <span style={{ color: "green", fontWeight: 600 }}>✔</span>{" "}
                      <span style={{ color: "black", fontWeight: 600 }}>
                        Ram{" "}
                      </span>
                      4GB, DDR4
                    </p>
                    <p>
                      <span style={{ color: "green", fontWeight: 600 }}>✔</span>{" "}
                      <span style={{ color: "black", fontWeight: 600 }}>
                        Ổ{" "}
                      </span>
                      cứng 256GB M.2 PCIe NVMe
                    </p>
                    <p>
                      <span style={{ color: "green", fontWeight: 600 }}>✔</span>{" "}
                      <span style={{ color: "black", fontWeight: 600 }}>
                        Màn{" "}
                      </span>
                      hình 15.6-inch FHD (1920 x 1080) Anti-glare LED Backlight
                      Non-Touch Narrow Border WVA Display
                    </p>
                    <p>
                      <span style={{ color: "green", fontWeight: 600 }}>✔</span>{" "}
                      <span style={{ color: "black", fontWeight: 600 }}>
                        VGA{" "}
                      </span>
                      Intel® Iris® Xe Graphics with shared graphics memory
                    </p>
                  </div>
                </div>

                <ConfigProduct />

                <BoxPromotion />
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
              <p>
                <span style={{ color: "green", fontWeight: 600 }}>✔</span>{" "}
                <span style={{ color: "black", fontWeight: 600 }}>CPU </span>
                Intel® Core™ i3-1115G4
              </p>
              <p>
                <span style={{ color: "green", fontWeight: 600 }}>✔</span>{" "}
                <span style={{ color: "black", fontWeight: 600 }}>Ram </span>
                4GB, DDR4
              </p>
              <p>
                <span style={{ color: "green", fontWeight: 600 }}>✔</span>{" "}
                <span style={{ color: "black", fontWeight: 600 }}>Ổ </span>
                cứng 256GB M.2 PCIe NVMe
              </p>
              <p>
                <span style={{ color: "green", fontWeight: 600 }}>✔</span>{" "}
                <span style={{ color: "black", fontWeight: 600 }}>Màn </span>
                hình 15.6-inch FHD (1920 x 1080) Anti-glare LED Backlight
                Non-Touch Narrow Border WVA Display
              </p>
              <p>
                <span style={{ color: "green", fontWeight: 600 }}>✔</span>{" "}
                <span style={{ color: "black", fontWeight: 600 }}>VGA </span>
                Intel® Iris® Xe Graphics with shared graphics memory
              </p>
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
                Sò Lap Xin Gửi Tới Quý Khách Hàng Bảng Giá Nâng Cấp: <br /> Giá
                Nâng Cấp Chip: Từ i5 - 2520M lên i7 - 2620M thêm 890.000đ <br />{" "}
                Từ i5 - 3320M lên i7 - 3520M thêm 1.200.000đ <br /> Từ i5 -
                2520M lên i7 - 2720QM thêm 1.400.000đ <br /> Từ i5 - 3320M lên
                i7 - 3720QM thêm 1.900.000đ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
