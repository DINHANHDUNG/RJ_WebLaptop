import { createAsyncThunk } from "@reduxjs/toolkit";
import categoryAPIAdmin from "../../../app/commom/api/admin/api-category-admin";
import { AddCategory, EditCategory } from "../../../app/types/category";

export const postAddCategoryByIdAdmin = createAsyncThunk(
  "/category/addcategory",
  async (data: AddCategory) => {
    console.log("data truyền vào", data);

    const response = await categoryAPIAdmin.postAddCategoryADmin(data);
    console.log("response Thêm", response);

    return response;
  }
);

export const postEditCategoryByIdAdmin = createAsyncThunk(
  "/categoryadmin/addcategory",
  async (data: EditCategory) => {
    console.log("data truyền vào", data);
    const response = await categoryAPIAdmin.postEditCategoryADmin(data);
    console.log("response sửa", response);

    return response;
  }
);

export const getAllCategoryAdmin = createAsyncThunk(
  "/categoryadmin/getall",
  async () => {
    const response = await categoryAPIAdmin.getAllCategoryAdmin();
    console.log("getAllCategory", response);

    return response;
  }
);

export const getAllCategoryTrees = createAsyncThunk(
  "/categoryadmin/getallcategorytrees",
  async () => {
    const response = await categoryAPIAdmin.getAllCategoryTree();
    console.log("getallcategorytrees", response);

    return response;
  }
);

export const getCategoryByIdAdmin = createAsyncThunk(
  "/categoryadmin/getbyid",
  async (data: { id: number }) => {
    // console.log("data truyền vào", data);

    const response = await categoryAPIAdmin.getCategoryByIdADmin(data);
    // console.log("getbyid", response);

    return response;
  }
);

export const postDeleteCategoryAdmin = createAsyncThunk(
  "/categoryadmin/deletecategory",
  async (data: { id: [number] }) => {
    console.log("data truyền vào", data);

    const response = await categoryAPIAdmin.postDeleteCategoryADmin(data);
    console.log("deletecategory", response);

    return response;
  }
);
