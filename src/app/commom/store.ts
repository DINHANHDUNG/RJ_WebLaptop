import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../../features/counter/counterSlice";
import accountAdminReducer from "../../features/admin/accountAdmin/accountAdmin-slice";
import categoryProductAdminReducer from "../../features/admin/categoryProductAdnim/category-product-slice";
import categoryAdminReducer from "../../features/admin/categoryAdnim/category-slice";
import promotionAdminReducer from "../../features/admin/promotion/promotion-slice";
import productAdminReducer from "../../features/admin/productAdnim/product-slice";
import ProductHomePageReducer from "../../features/homepage/product-home-page-slice";
import warehouseReducer from "../../features/admin/wareHouseProductAdnim/ware-house-product-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,

    /*--------------------------------Admin------------------------------ */
    accountAdmin: accountAdminReducer,
    categoryProductAdmin: categoryProductAdminReducer,
    categoryAdmin: categoryAdminReducer,
    promotionAdmin: promotionAdminReducer,
    productAdmin: productAdminReducer,
    warehouse: warehouseReducer,

    /*Customer */
    ProductHomePage: ProductHomePageReducer,
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
