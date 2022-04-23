import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import queryString from "query-string";
import { getAllCategoryProductAdmin } from ".";
import { openNotification } from "../../../app/component/Notifi/noti";
import {
  CategoryProduct,
  CustomesCategoryProduct,
} from "../../../app/types/category-product";
import {
  getCategoryProductByIdAdmin,
  postAddCategoryProductByIdAdmin,
  postDeleteCategoryProductAdmin,
  postEditCategoryProductByIdAdmin,
} from "./patchCategoryProduct-api";
const initialStateCategory: CustomesCategoryProduct = {
  listcategoryproduct: [] as Array<CategoryProduct>,
  total: 0,
  loading: false,
  error: false,
};

const categorySliceAdmin = createSlice({
  name: "categoryproductadmin",
  initialState: initialStateCategory,
  reducers: {},
  extraReducers: (
    builder: ActionReducerMapBuilder<CustomesCategoryProduct>
  ) => {
    // getAll
    builder
      .addCase(getAllCategoryProductAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCategoryProductAdmin.fulfilled, (state, action) => {
        const { result } = action.payload;

        state.listcategoryproduct = result;

        state.loading = false;
        state.error = false;
      })
      .addCase(getAllCategoryProductAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Lấy dữ liệu thất bại",
          type: "error",
        });
      });

    // getbyid
    builder
      .addCase(getCategoryProductByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoryProductByIdAdmin.fulfilled, (state, action) => {
        // const { listuser } = action.payload;
        // state.listcategoryproduct = listuser;
        // state.loading = false;
        // console.log("Get category by id thành công");
      })
      .addCase(getCategoryProductByIdAdmin.rejected, (state) => {
        state.loading = false;
        openNotification({
          message: "Lấy dữ liệu thất bại",
          type: "error",
        });
      });

    // Add category
    builder
      .addCase(postAddCategoryProductByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postAddCategoryProductByIdAdmin.fulfilled, (state, action) => {
        openNotification({
          message: "Thêm thành công",
          type: "success",
        });
        const { result } = action.payload;
        state.listcategoryproduct = [...state.listcategoryproduct, result];
        state.loading = false;
        state.error = false;
      })
      .addCase(postAddCategoryProductByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Thêm không thành công",
          type: "error",
        });
      });

    // Sửa category
    builder
      .addCase(postEditCategoryProductByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postEditCategoryProductByIdAdmin.fulfilled, (state, action) => {
        openNotification({
          message: "Sửa thành công",
          type: "success",
        });
        state.loading = false;
        state.error = false;
      })
      .addCase(postEditCategoryProductByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Sửa không thành công",
          type: "error",
        });
      });

    // Xóa category
    builder
      .addCase(postDeleteCategoryProductAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postDeleteCategoryProductAdmin.fulfilled, (state, action) => {
        // const { result } = action.payload;
        // state.listcategoryproduct = result;
        state.loading = false;
        state.error = false;
        openNotification({
          message: "Xóa thành công",
          type: "success",
        });
        // console.log("Get all category thành công");
      })
      .addCase(postDeleteCategoryProductAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Xóa thất bại",
          type: "error",
        });
        // console.log("Get category không thành công");
      });
  },
});

const { reducer } = categorySliceAdmin;
export default reducer;
