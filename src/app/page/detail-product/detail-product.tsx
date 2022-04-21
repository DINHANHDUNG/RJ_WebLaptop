import React from "react";
import BoxPromotion from "../../component/customer/product/box-promotion/box-promotion";
import ConfigProduct from "../../component/customer/product/config-product/config-product";

function DetailProduct() {
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div className="product-details-top mb-2">
        <div className="row">
          <div className="col-md-6">
            <div className="product-gallery">
              <figure className="product-main-image">
                <img
                  id="product-zoom"
                  src="https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04837-dell-inspiron-5410-laptoptcc-2048x1152.jpg"
                  data-zoom-image="https://laptoptcc.com/wp-content/uploads/2020/08/AZZ04837-dell-inspiron-5410-laptoptcc-2048x1152.jpg"
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

              <div id="product-zoom-gallery" className="product-image-gallery">
                <a
                  className="product-gallery-item"
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
                  className="product-gallery-item active"
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
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="product-details">
              <h1 className="product-title">
                [New 100%] Dell Inspiron 14 5410 2 in1 Gen 11th
              </h1>

              <div className="product-price">18.600.000đ</div>

              <div className="product-content">
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

            <ConfigProduct />

            <BoxPromotion />
          </div>
        </div>
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
              <p>
                Core i 7 1165G7 8Gb SSD 512 GB NVMe PCIe MX350 15.6″Full HD ,60
                HzInspiron 15 3511 là sản phẩm Laptop phổ thông mới nhất của
                Dell, với trang bị bộ vi xử lý Intel thế hệ thứ 11 mạnh mẽ,
                thiết kế vẫn mang đậm chất kinh điển vốn có. Dell Inspiron 15
                3511 hướng tới đối tượng là các bạn học sinh sinh viên, những
                người đang cần tìm một thiết bị đáp ứng đầy đủ các nhu cầu học
                tập, làm việc và giải trí hằng ngày.{" "}
              </p>
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
                Laptop TCC Xin Gửi Tới Quý Khách Hàng Bảng Giá Nâng Cấp: <br />{" "}
                Giá Nâng Cấp Chip: Từ i5 - 2520M lên i7 - 2620M thêm 890.000đ{" "}
                <br /> Từ i5 - 3320M lên i7 - 3520M thêm 1.200.000đ <br /> Từ i5
                - 2520M lên i7 - 2720QM thêm 1.400.000đ <br /> Từ i5 - 3320M lên
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
