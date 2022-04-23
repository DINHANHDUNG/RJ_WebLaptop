import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import queryString from "query-string";
import {
  postDeletePromotionAdmin,
  getPromotionByIdAdmin,
  getAllPromotionAdmin,
  postEditPromotionByIdAdmin,
  postAddPromotionByIdAdmin,
} from ".";
import { openNotification } from "../../../app/component/Notifi/noti";
import { Category, CustomesCategory } from "../../../app/types/category";
import { CustomesPromotion, Promotion } from "../../../app/types/promotion";
const initialStateCategory: CustomesPromotion = {
  listpromotion: [] as Array<Promotion>,
  total: 0,
  loading: false,
  error: false,
};

const promotionSliceAdmin = createSlice({
  name: "categoryadmin",
  initialState: initialStateCategory,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<CustomesPromotion>) => {
    // getAll
    builder
      .addCase(getAllPromotionAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPromotionAdmin.fulfilled, (state, action) => {
        const { result } = action.payload;

        state.listpromotion = result;

        state.loading = false;
        state.error = false;
      })
      .addCase(getAllPromotionAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Lấy dữ liệu thất bại",
          type: "error",
        });
      });

    // getbyid
    builder
      .addCase(getPromotionByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPromotionByIdAdmin.fulfilled, (state, action) => {
        // const { listuser } = action.payload;
        // state.listpromotion = listuser;
        // state.loading = false;
        // console.log("Get category by id thành công");
      })
      .addCase(getPromotionByIdAdmin.rejected, (state) => {
        state.loading = false;
        openNotification({
          message: "Lấy dữ liệu thất bại",
          type: "error",
        });
      });

    // Add category
    builder
      .addCase(postAddPromotionByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postAddPromotionByIdAdmin.fulfilled, (state, action) => {
        openNotification({
          message: "Thêm thành công",
          type: "success",
        });
        const { result } = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(postAddPromotionByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Thêm không thành công",
          type: "error",
        });
      });

    // Sửa category
    builder
      .addCase(postEditPromotionByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postEditPromotionByIdAdmin.fulfilled, (state, action) => {
        openNotification({
          message: "Sửa thành công",
          type: "success",
        });
        state.loading = false;
        state.error = false;
      })
      .addCase(postEditPromotionByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Sửa không thành công",
          type: "error",
        });
      });

    // Xóa category
    builder
      .addCase(postDeletePromotionAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postDeletePromotionAdmin.fulfilled, (state, action) => {
        // const { result } = action.payload;
        // state.listpromotion = result;
        state.loading = false;
        state.error = false;
        openNotification({
          message: "Xóa thành công",
          type: "success",
        });
        // console.log("Get all category thành công");
      })
      .addCase(postDeletePromotionAdmin.rejected, (state) => {
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

const { reducer } = promotionSliceAdmin;
export default reducer;
