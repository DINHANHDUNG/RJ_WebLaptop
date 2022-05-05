import { createAsyncThunk } from "@reduxjs/toolkit";
import WareHouseAPIAdmin from "../../../app/commom/api/admin/api-ware-house-admin";
import { AddWareHouse, EditWareHouse } from "../../../app/types/ware-house";

export const postAddWareHouseProductByIdAdmin = createAsyncThunk(
  "/warehouseproductadmin/addwarehouseproduct",
  async (data: AddWareHouse, { rejectWithValue }) => {
    console.log("data truyền vào", data);
    try {
      const response = await WareHouseAPIAdmin.postAddWareHouseADmin(data);
      return response;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response);
    }
    const response = await WareHouseAPIAdmin.postAddWareHouseADmin(data);
    console.log("response Thêm", response);

    return response;
  }
);

export const postEditWareHcouseProductByIdAdmin = createAsyncThunk(
  "/warehouseproductadmin/editwarehouseproduct",
  async (data: EditWareHouse) => {
    console.log("data truyền vào", data);
    const response = await WareHouseAPIAdmin.postEditWareHouseADmin(data);
    console.log("response sửa", response);

    return response;
  }
);

export const getAllWareHouseProductAdmin = createAsyncThunk(
  "/warehouseproductadmin/getallwarehouseproduct",
  async (data: { page: number; noitem: number }) => {
    const response = await WareHouseAPIAdmin.getAllProductWareHouseAdmin(data);
    console.log("getAllwarehouse", response);

    return response;
  }
);

export const getSearchWareHouseProductAdmin = createAsyncThunk(
  "/warehouseproductadmin/getsearchwarehouseproduct",
  async (data: { productkey: string; page: number; noitem: number }) => {
    const response = await WareHouseAPIAdmin.getProductSearchWareHouseAdmin(
      data
    );
    console.log("search", response);

    return response;
  }
);
export const getWareHouseProductByIdAdmin = createAsyncThunk(
  "/warehouseproductadmin/getbyidwarehouseproduct",
  async (data: { id: number }) => {
    // console.log("data truyền vào", data);

    const response = await WareHouseAPIAdmin.getProductWareHouseByIdADmin(data);
    // console.log("getbyid", response);

    return response;
  }
);

export const postDeleteWareHouseProductAdmin = createAsyncThunk(
  "/warehouseproductadmin/deletewarehouseproduct",
  async (data: { id: [number] }) => {
    console.log("data truyền vào", data);

    const response = await WareHouseAPIAdmin.postDeleteWareHouseADmin(data);
    console.log("deletewarehouse", response);

    return response;
  }
);
