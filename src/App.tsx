import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutAdmin from "./app/component/layout/admin/layoutadmin";
import LayoutCustomer from "./app/component/layout/customer/layout-customer";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LayoutCustomer />}></Route>
          <Route path="/admin/*" element={<LayoutAdmin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
