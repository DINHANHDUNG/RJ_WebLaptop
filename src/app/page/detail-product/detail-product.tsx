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
                          {Numberformat(products.listproduct[0].price_sale)} VN??
                        </span>
                        &nbsp;
                        <del style={{ fontSize: "13px", opacity: "0.4" }}>
                          {Numberformat(products.listproduct[0].price_origin)}{" "}
                          VN??
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
                                ???
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
              <div className="row">S???n ph???m kh??ng t???n t???i</div>
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
                  M?? t???
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
                  Th??ng s??? k??? thu???t
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
                  B???ng gi?? n??ng c???p
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
                      <span style={{ color: "green", fontWeight: 600 }}>???</span>{" "}
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
                      S?? Lap Xin G???i T???i Qu?? Kh??ch H??ng B???ng Gi?? N??ng C???p:
                    </h3>
                    <h3 style={{ fontWeight: 600 }}>Gi?? N??ng C???p Chip:</h3>
                    T??? i5 - 2520M l??n i7 - 2620M th??m 890.000?? <br /> T??? i5 -
                    3320M l??n i7 - 3520M th??m 1.200.000?? <br /> T??? i5 - 2520M
                    l??n i7 - 2720QM th??m 1.400.000?? <br /> T??? i5 - 3320M l??n i7
                    - 3720QM th??m 1.900.000??
                    <hr />
                    <h3 style={{ fontWeight: 600 }}>
                      Gi?? N??ng C???p Ram (PC3-PC3L)
                    </h3>
                    <p>T??? 4gb l??n 8gb th??m - 500.000??</p>
                    <p>T??? 8gb l??n 16gb th??m - 850.000??</p>
                    <p>T??? 16gb l??n 32gb th??m - 1.550.000??</p>
                    <hr />
                    <h3 style={{ fontWeight: 600 }}>Ram (DDR4)</h3>
                    <p>T??? 4gb l??n 8gb th??m - 600.000??</p>
                    <p>T??? 8gb l??n 16gb th??m - 900.000??</p>
                    <p>T??? 16gb l??n 32gb th??m - 1.700.000??</p>
                    <hr />
                    <h3 style={{ fontWeight: 600 }}>
                      {" "}
                      Gi?? N??ng C???p ??? C???ng (2.5 inch):
                    </h3>
                    <p>
                      T??? HDD 500gb l??n SSD 120gb (m???i) th??m - 750.000?? nay ch???
                      c??n 590.000??
                    </p>
                    <p>
                      T??? HDD 500gb l??n SSD 240gb (m???i) th??m - 1.250.000?? nay ch???
                      c??n 850.000??
                    </p>
                    <p>
                      T??? HDD 1TB l??n SSD 240gb (m???i) th??m - 1.250.000?? nay ch???
                      c??n 650.000??
                    </p>
                    <p>
                      T??? SSD 120gb (c??) l??n SSD 240gb (m???i) th??m - 900.000?? nay
                      ch??? c??n 700.000??
                    </p>
                    <p>
                      T??? SSD 120gb (c??) l??n SSD 480gb (m???i) th??m - 1.650.000??
                      nay ch??? c??n 1.400.000??
                    </p>
                    <p>
                      T??? SSD 256gb (c??) l??n SSD 480gb (m???i) th??m - 1.450.000??
                      nay ch??? c??n 1.200.000??
                    </p>
                    <hr />
                    <h3 style={{ fontWeight: 600 }}>
                      ??p d???ng v???i ??? d???ng M2 sata :
                    </h3>
                    <p>
                      T??? SSD 120gb (c??) l??n SSD 240gb (m???i) th??m - 1.200.000??
                      nay ch??? c??n 800.000??
                    </p>
                    <p>
                      T??? SSD 120gb (c??) l??n SSD 480gb (m???i) th??m - 1.650.000??
                      nay ch??? c??n 1.500.000??
                    </p>
                    <p>
                      T??? SSD 256gb (c??) l??n SSD 480gb (m???i) th??m - 1.450.000??
                      nay ch??? c??n 1.300.000??
                    </p>
                    <hr />
                    <h2 style={{ color: "red" }}>
                      {" "}
                      L??u ??: Gi?? n??ng c???p ??p d???ng trong 15 ng??y ?????u k??? t??? khi
                      qu?? kh??ch mua m??y.
                    </h2>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "S???n ph???m kh??ng t???n t???i"
      )}
    </>
  );
}

export default DetailProduct;
