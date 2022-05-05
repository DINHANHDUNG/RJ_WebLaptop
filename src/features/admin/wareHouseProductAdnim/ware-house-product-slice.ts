import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { openNotification } from "../../../app/component/Notifi/noti";
import { CustomesWareHouse, WareHouse } from "../../../app/types/ware-house";
import {
  getAllWareHouseProductAdmin,
  getSearchWareHouseProductAdmin,
  getWareHouseProductByIdAdmin,
  postAddWareHouseProductByIdAdmin,
  postDeleteWareHouseProductAdmin,
  postEditWareHcouseProductByIdAdmin,
} from "./patchWareHouseProduct-api";
const initialStateCategory: CustomesWareHouse = {
  listWareHouse: [] as Array<WareHouse>,
  total: 0,
  loading: false,
  error: false,
};

const wareHouseSliceAdmin = createSlice({
  name: "warehouseproductadmin",
  initialState: initialStateCategory,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<CustomesWareHouse>) => {
    // getAll
    builder
      .addCase(getAllWareHouseProductAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllWareHouseProductAdmin.fulfilled, (state, action) => {
        const { result } = action.payload;

        state.listWareHouse = result;

        state.loading = false;
        state.error = false;
      })
      .addCase(getAllWareHouseProductAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Lấy dữ liệu thất bại",
          type: "error",
        });
      });

    // search
    builder
      .addCase(getSearchWareHouseProductAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSearchWareHouseProductAdmin.fulfilled, (state, action) => {
        const { result } = action.payload;

        state.listWareHouse = result ? result : [];

        state.loading = false;
        state.error = false;
      })
      .addCase(getSearchWareHouseProductAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Lấy dữ liệu thất bại",
          type: "error",
        });
      });

    // getbyid
    builder
      .addCase(getWareHouseProductByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWareHouseProductByIdAdmin.fulfilled, (state, action) => {
        // const { listuser } = action.payload;
        // state.listcategoryproduct = listuser;
        // state.loading = false;
        // console.log("Get category by id thành công");
      })
      .addCase(getWareHouseProductByIdAdmin.rejected, (state) => {
        state.loading = false;
        openNotification({
          message: "Lấy dữ liệu thất bại",
          type: "error",
        });
      });

    // Add category
    builder
      .addCase(postAddWareHouseProductByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postAddWareHouseProductByIdAdmin.fulfilled, (state, action) => {
        const { result } = action.payload;
        state.listWareHouse = [...state.listWareHouse, result];
        state.loading = false;
        state.error = false;
        openNotification({
          message: "Thêm thành công",
          type: "success",
        });
      })
      .addCase(
        postAddWareHouseProductByIdAdmin.rejected,
        (state, action: any) => {
          state.loading = false;
          state.error = true; //Show lỗi

          console.log(action.payload.status);

          if (action.payload.status === 302) {
            openNotification({
              message: "Mã máy hoặc tên máy đã tồn tại",
              type: "error",
            });
          } else {
            openNotification({
              message: "Thêm không thành công",
              type: "error",
            });
          }
        }
      );

    // Sửa category
    builder
      .addCase(postEditWareHcouseProductByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        postEditWareHcouseProductByIdAdmin.fulfilled,
        (state, action) => {
          openNotification({
            message: "Sửa thành công",
            type: "success",
          });
          state.loading = false;
          state.error = false;
        }
      )
      .addCase(postEditWareHcouseProductByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Sửa không thành công",
          type: "error",
        });
      });

    // Xóa category
    builder
      .addCase(postDeleteWareHouseProductAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postDeleteWareHouseProductAdmin.fulfilled, (state, action) => {
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
      .addCase(postDeleteWareHouseProductAdmin.rejected, (state) => {
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

const { reducer } = wareHouseSliceAdmin;
export default reducer;
