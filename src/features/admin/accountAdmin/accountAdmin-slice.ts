import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import {
  ChangePassAdmin,
  checkTokenAdmin,
  postLoginAdmin,
  postLogoutAdmin,
} from ".";
import { openNotification } from "../../../app/component/Notifi/noti";
import { Account, CustomesAccount } from "../../../app/types/account";
const initialStateAccount: CustomesAccount = {
  listuser: {} as Account,
  loading: false,
  token: localStorage.getItem("tokenadmin") ?? "",
  error: false,
};

const accountAdminSlice = createSlice({
  name: "accountadmin",
  initialState: initialStateAccount,
  reducers: {
    //action login Storage
  },
  extraReducers: (builder: ActionReducerMapBuilder<CustomesAccount>) => {
    // login admin
    builder
      .addCase(postLoginAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postLoginAdmin.fulfilled, (state, action) => {
        const { listuser, token } = action.payload;
        console.log("listuser", listuser);

        state.listuser = listuser;
        state.token = token;
        state.loading = false;
        state.error = false;
        localStorage.setItem("tokenadmin", token);
      })
      .addCase(postLoginAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Tài khoản hoặc mật khẩu không chính xác",
          type: "error",
        });
      });
    //  log out the user
    builder.addCase(postLogoutAdmin.fulfilled, (state) => {
      state.listuser = {} as any;
      state.token = "";
      localStorage.removeItem("tokenadmin");
      // localStorage.removeItem("user");

      openNotification({
        message: "Đã đăng xuất",
        type: "success",
      });
    });

    //Check token admin
    builder
      .addCase(checkTokenAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkTokenAdmin.fulfilled, (state, action) => {
        const { user, customer } = action.payload;

        console.log("user", user);

        state.listuser = user;
        state.token = localStorage.getItem("tokenadmin") ?? "";
        state.loading = false;
        state.error = false;
      })
      .addCase(checkTokenAdmin.rejected, (state) => {
        state.loading = false;
        localStorage.removeItem("tokenadmin");
        state.token = "";
      });

    //ChangePass

    builder
      .addCase(ChangePassAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(ChangePassAdmin.fulfilled, (state, action) => {
        console.log("action payload", action.payload);

        // state.listuser = action.payload;
        state.loading = false;
        state.error = false;
        openNotification({
          message: "Đổi mật khẩu thành công",
          type: "success",
        });
        console.log("Đổi mật khẩu thành công");
      })
      .addCase(ChangePassAdmin.rejected, (state) => {
        state.loading = false;
        console.log("Đổi mật khẩu thất bại");
        openNotification({
          message: "Mật khẩu cũ không chính xác",
          type: "error",
        });
      });
  },
});

const { reducer } = accountAdminSlice;
export default reducer;
