import React from "react";

function HeaderTop() {
  return (
    <div className="header-top" style={{ paddingTop: "10px" }}>
      <div className="container">
        <div className="header-left">
          <a href="tel:#">Cảm ơn quý khách đã chọn chúng tôi</a>
        </div>

        <div className="header-right">
          <ul className="top-menu">
            <li>
              <a href="#">Thêm</a>
              <ul>
                <li>
                  <a href="#">Liên hệ</a>
                  {/* <div className="header-dropdown">
                    <a href="#">Liên hệ</a>
                    <div className="header-menu">
                      <ul>
                        <li>
                          <a href="#">Eur</a>
                        </li>
                        <li>
                          <a href="#">Usd</a>
                        </li>
                      </ul>
                    </div> 
                  </div>*/}
                </li>
                <li>
                  <a href="#">Giới thiệu</a>
                </li>
                <li>
                  <a href="#">Chính sách</a>
                </li>
                {/* <li>
                  <div className="header-dropdown">
                    <a href="#">Engligh</a>
                    <div className="header-menu">
                      <ul>
                        <li>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <a href="#">French</a>
                        </li>
                        <li>
                          <a href="#">Spanish</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li> */}
                {/* <li className="login">
                  <a href="#signin-modal" data-toggle="modal">
                    Sign in / Sign up
                  </a>
                </li> */}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
