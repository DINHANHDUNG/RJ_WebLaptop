import { createAsyncThunk } from "@reduxjs/toolkit";
import productAPIAdmin from "../../../app/commom/api/admin/api-product-admin";
import {
  AddProduct,
  EditProduct,
  GetAllProductByCategory,
  GetAllProductByDMSP,
  GetSearchProduct,
} from "../../../app/types/product";

export const postAddProductByIdAdmin = createAsyncThunk(
  "/productadmin/addproduct",
  async (data: AddProduct) => {
    console.log("data truyền vào", data);

    const response = await productAPIAdmin.postAddProductADmin(data);
    console.log("response Thêm", response);

    return response;
  }
);

export const postEditProductByIdAdmin = createAsyncThunk(
  "/productadmin/editproduct",
  async (data: EditProduct) => {
    console.log("data truyền vào", data);
    const response = await productAPIAdmin.postEditProductADmin(data);
    console.log("response sửa", response);

    return response;
  }
);

export const getAllProductAdmin = createAsyncThunk(
  "/productadmin/getall",
  async (data: GetAllProductByCategory) => {
    console.log("data truyền vào", data);
    const response = await productAPIAdmin.getAllProductAdmin(data);
    console.log("getAllProduct", response);

    return response;
  }
);

export const getAllProductByDMSPAdmin = createAsyncThunk(
  "/productadmin/getallbydmsp",
  async (data: GetAllProductByDMSP) => {
    console.log("data truyền vào getallbydmsp", data);
    const response = await productAPIAdmin.getAllProductbyDMSPAdmin(data);
    console.log("getallbydmsp", response);

    return response;
  }
);
export const getProductSearchAdmin = createAsyncThunk(
  "/productadmin/getproductsearch",
  async (data: GetSearchProduct) => {
    console.log("data truyền vào getproductsearch", data);
    const response = await productAPIAdmin.getProductSearchAdmin(data);
    console.log("getproductsearch", response);

    return response;
  }
);

export const getProductByIdAdmin = createAsyncThunk(
  "/productadmin/getbyid",
  async (data: { id: number }) => {
    console.log("data truyền vào", data);

    const response = await productAPIAdmin.getProductByIdADmin(data);
    console.log("getbyid", response);

    return response;
  }
);

export const postDeleteProductAdmin = createAsyncThunk(
  "/productadmin/deleteproduct",
  async (data: { id: [number] }) => {
    console.log("data truyền vào", data);

    const response = await productAPIAdmin.postDeleteProductADmin(data);
    console.log("deleteproduct", response);

    return response;
  }
);
