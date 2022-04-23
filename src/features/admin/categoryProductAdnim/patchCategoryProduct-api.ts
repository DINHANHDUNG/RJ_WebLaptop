import { createAsyncThunk } from "@reduxjs/toolkit";
import categoryProductAPIAdmin from "../../../app/commom/api/admin/api-category-product-admin";
import {
  AddCategoryProduct,
  EditCategoryProduct,
} from "../../../app/types/category-product";

export const postAddCategoryProductByIdAdmin = createAsyncThunk(
  "/categoryproduct/addcategoryproduct",
  async (data: AddCategoryProduct) => {
    console.log("data truyền vào", data);

    const response = await categoryProductAPIAdmin.postAddCategoryProductADmin(
      data
    );
    console.log("response Thêm", response);

    return response;
  }
);

export const postEditCategoryProductByIdAdmin = createAsyncThunk(
  "/categoryproductadmin/addcategoryproduct",
  async (data: EditCategoryProduct) => {
    console.log("data truyền vào", data);
    const response = await categoryProductAPIAdmin.postEditCategoryProductADmin(
      data
    );
    console.log("response sửa", response);

    return response;
  }
);

export const getAllCategoryProductAdmin = createAsyncThunk(
  "/categoryproductadmin/getallcategoryproduct",
  async (data: { page: number; noitem: number }) => {
    const response = await categoryProductAPIAdmin.getAllCategoryProductAdmin(data);
    console.log("getAllCategory", response);

    return response;
  }
);

export const getCategoryProductByIdAdmin = createAsyncThunk(
  "/categoryproductadmin/getbyidcategoryproduct",
  async (data: { id: number }) => {
    // console.log("data truyền vào", data);

    const response = await categoryProductAPIAdmin.getCategoryProductByIdADmin(
      data
    );
    // console.log("getbyid", response);

    return response;
  }
);

export const postDeleteCategoryProductAdmin = createAsyncThunk(
  "/categoryproductadmin/deletecategoryproduct",
  async (data: { id: [number] }) => {
    console.log("data truyền vào", data);

    const response =
      await categoryProductAPIAdmin.postDeleteCategoryProductADmin(data);
    console.log("deletecategory", response);

    return response;
  }
);
