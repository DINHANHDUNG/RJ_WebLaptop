import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import queryString from "query-string";
import {
  getAllCategoryAdmin,
  getCategoryByIdAdmin,
  postAddCategoryByIdAdmin,
  postDeleteCategoryAdmin,
  postEditCategoryByIdAdmin,
} from ".";
import { openNotification } from "../../../app/component/Notifi/noti";
import { Category, CustomesCategory } from "../../../app/types/category";
import { getAllCategoryTrees } from "./patchCategory-api";
const initialStateCategory: CustomesCategory = {
  listcategory: [] as Array<Category>,
  loading: false,
  error: false,
};

const categorySliceAdmin = createSlice({
  name: "categoryadmin",
  initialState: initialStateCategory,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<CustomesCategory>) => {
    // getAll
    builder
      .addCase(getAllCategoryAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCategoryAdmin.fulfilled, (state, action) => {
        const { result } = action.payload;

        state.listcategory = result;

        state.loading = false;
        state.error = false;
      })
      .addCase(getAllCategoryAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Lấy dữ liệu thất bại",
          type: "error",
        });
      });

    // getAll trees
    builder
      .addCase(getAllCategoryTrees.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCategoryTrees.fulfilled, (state, action) => {
        const { result } = action.payload;
        console.log("result", result);
        let newArr = [] as any;

        
        result?.map((value: any) => {
          let newArrChildren = [] as any;

          value.categorytrees?.map((val: any) => {
            newArrChildren.push({
              id: val.id,
              id_parent: val.id_parent,
              categoryname: val.categoryname,
              name_parent: val.name_parent,
              show: val.show,
              children: val.categorytrees,
            });
          });

          newArr.push({
            id: value.id,
            id_parent: value.id_parent,
            categoryname: value.categoryname,
            name_parent: value.name_parent,
            show: value.show,
            children: newArrChildren,
          });
        });

        state.listcategory = newArr;

        state.loading = false;
        state.error = false;
      })
      .addCase(getAllCategoryTrees.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Lấy dữ liệu thất bại",
          type: "error",
        });
      });

    // getbyid
    builder
      .addCase(getCategoryByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoryByIdAdmin.fulfilled, (state, action) => {
        // const { listuser } = action.payload;
        // state.listcategory = listuser;
        // state.loading = false;
        // console.log("Get category by id thành công");
      })
      .addCase(getCategoryByIdAdmin.rejected, (state) => {
        state.loading = false;
        openNotification({
          message: "Lấy dữ liệu thất bại",
          type: "error",
        });
      });

    // Add category
    builder
      .addCase(postAddCategoryByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postAddCategoryByIdAdmin.fulfilled, (state, action) => {
        openNotification({
          message: "Thêm thành công",
          type: "success",
        });
        const { result } = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(postAddCategoryByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Thêm không thành công",
          type: "error",
        });
      });

    // Sửa category
    builder
      .addCase(postEditCategoryByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postEditCategoryByIdAdmin.fulfilled, (state, action) => {
        openNotification({
          message: "Sửa thành công",
          type: "success",
        });
        state.loading = false;
        state.error = false;
      })
      .addCase(postEditCategoryByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Sửa không thành công",
          type: "error",
        });
      });

    // Xóa category
    builder
      .addCase(postDeleteCategoryAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postDeleteCategoryAdmin.fulfilled, (state, action) => {
        // const { result } = action.payload;
        // state.listcategory = result;
        state.loading = false;
        state.error = false;
        openNotification({
          message: "Xóa thành công",
          type: "success",
        });
        // console.log("Get all category thành công");
      })
      .addCase(postDeleteCategoryAdmin.rejected, (state) => {
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
