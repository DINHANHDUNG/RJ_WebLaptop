import React from "react";

function Banner() {
  return (
    <div className="intro-slider-container">
                <div className="intro-slider owl-carousel owl-simple owl-nav-inside" data-toggle="owl" data-owl-options='{
                        "nav": false,
                        "responsive": {
                            "992": {
                                "nav": true
                            }
                        }
                    }'>
                        {/* style="background-image: url(assets/images/demos/demo-13/slider/slide-1.png);" */}
                    <div className="intro-slide"  style={{backgroundImage: "url(assets/images/demos/demo-13/slider/slide-1.png)"}}>
                        <div className="container intro-content">
                            <div className="row">
                                <div className="col-auto offset-lg-3 intro-col">
                                    <h3 className="intro-subtitle">Trade-In Offer</h3>
                                    <h1 className="intro-title">MacBook Air <br/>Latest Model
                                        <span>
                                            <sup className="font-weight-light">from</sup>
                                            <span className="text-primary">$999<sup>,99</sup></span>
                                        </span>
                                    </h1>

                                    {/* <a href="category.html" className="btn btn-outline-primary-2">
                                        <span>Shop Now</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* style="background-image: url(assets/images/demos/demo-13/slider/slide-2.jpg);" */}
                    <div className="intro-slide"  style={{backgroundImage: "url(assets/images/demos/demo-13/slider/slide-2.jpg)"}}>
                        <div className="container intro-content">
                            <div className="row">
                                <div className="col-auto offset-lg-3 intro-col">
                                    <h3 className="intro-subtitle">Trevel & Outdoor</h3>
                                    <h1 className="intro-title">Original Outdoor <br />Beanbag
                                        <span>
                                            <sup className="font-weight-light line-through">$89,99</sup>
                                            <span className="text-primary">$29<sup>,99</sup></span>
                                        </span>
                                    </h1>

                                    {/* <a href="category.html" className="btn btn-outline-primary-2">
                                        <span>Shop Now</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* style="background-image: url(assets/images/demos/demo-13/slider/slide-3.jpg);" */}
                    <div className="intro-slide" style={{backgroundImage: "url(assets/images/demos/demo-13/slider/slide-3.jpg)"}}>
                        <div className="container intro-content">
                            <div className="row">
                                <div className="col-auto offset-lg-3 intro-col">
                                    <h3 className="intro-subtitle">Fashion Promotions</h3>
                                    <h1 className="intro-title">Tan Suede <br />Biker Jacket
                                        <span>
                                            <sup className="font-weight-light line-through">$240,00</sup>
                                            <span className="text-primary">$180<sup>,99</sup></span>
                                        </span>
                                    </h1>

                                    {/* <a href="category.html" className="btn btn-outline-primary-2">
                                        <span>Shop Now</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <span className="slider-loader"></span>
            </div>
  );
}

export default Banner;
