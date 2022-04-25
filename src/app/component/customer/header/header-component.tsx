import React from "react";
import HeaderBottom from "./header-bottom";
import HeaderMiddle from "./header-middle";
import HeaderTop from "./header-top";

function HeaderCustomer() {
  return (
    <header className="header header-10 header-intro-clearance">
      <HeaderTop />

      <HeaderMiddle />

      <HeaderBottom />
    </header>
  );
}

export default HeaderCustomer;
