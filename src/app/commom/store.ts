import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../../features/counter/counterSlice";
import accountAdminReducer from "../../features/admin/accountAdmin/accountAdmin-slice";
import categoryProductAdminReducer from "../../features/admin/categoryProductAdnim/category-product-slice";
import categoryAdminReducer from "../../features/admin/categoryAdnim/category-slice";
import promotionAdminReducer from "../../features/admin/promotion/promotion-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,

    /*--------------------------------Admin------------------------------ */
    accountAdmin: accountAdminReducer,
    categoryProductAdmin: categoryProductAdminReducer,
    categoryAdmin: categoryAdminReducer,
    promotionAdmin: promotionAdminReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
