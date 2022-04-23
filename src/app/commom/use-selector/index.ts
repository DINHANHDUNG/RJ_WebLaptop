import { RootState } from "../store";

/* ---------------------------------------ADMIN-------------------------------------------------- */
export const accountAdminStore = (state: RootState) => state.accountAdmin; //acc
export const promotionAdminStore = (state: RootState) => state.promotionAdmin; //Khuyến mại
export const categoryProductAdminStore = (state: RootState) =>
  state.categoryProductAdmin; //Danh mục sản phẩm
export const categoryAdminStore = (state: RootState) => state.categoryAdmin; //Danh mục
