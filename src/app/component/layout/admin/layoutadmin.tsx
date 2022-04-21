import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../commom/hooks";
import Category from "../../../page/admin/category/category";
import Dashboard from "../../../page/admin/dashboard/dashboard";
import Login from "../../../page/Login/login";
import LayoutDashboard from "./layoutdashboard";

function LayoutAdmin() {
  const dispatch = useAppDispatch();
  const history = useNavigate();
  useEffect(() => {
    // dispatch(checkTokenAdmin()).catch(err =>{
    //   history("/loginadmin")
    // });
  }, []);

  //   const acc = useAppSelector(accountAdminStore);
  const acc = {
    token: "abc",
  };
  function PrivateRoute({ children }: any) {
    const auth = acc.token ? true : false;
    return auth ? children : <Navigate to="loginadmin" />;
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <LayoutDashboard />
          </PrivateRoute>
        }
      >
        <Route path="/" element={<Dashboard />} />
        <Route path="/category" element={<Category />} />
        {/* <Route path="/category" element={<Category />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Listproduct />} />
        <Route path="/detailorderadmin/:id" element={<OrderDetail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/customer" element={<Customer />} /> */}
      </Route>

      <Route path="loginadmin" element={<Login />} />
    </Routes>
  );
}

export default LayoutAdmin;
