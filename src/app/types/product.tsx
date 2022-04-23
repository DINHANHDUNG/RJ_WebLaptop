import { Category } from "./category";
import { Promotion, promotiondetails } from "./promotion";

export interface Product {
  id: number;
  id_category: number;
  id_promotion: number;
  productcode: string;
  productname: string;
  price_origin: number;
  price_sale: number;
  configuration: string;
  describe: string;
  created_date: string;
  updated_date: string;
  category: Category;
  promotion: Promotion;
  promotiondetails: promotiondetails;
  promotionimages: [string];
  productimages: [string];
  productdetails: any;
}

export interface AddProduct {
  id_category: number;
  id_promotion: number;
  productcode: string;
  productname: string;
  price_origin: number;
  price_sale: number;
  configuration: string;
  describe: string;
}

export type EditProduct = AddProduct & { id: number };

export interface DeleteProduct {
  id: Array<Number>;
}
export interface CustomesProduct {
  listproduct: Array<Product>;
  total: number;
  loading: boolean;
  error: boolean;
}

export interface GetAllProductByCategory {
  id_category: number;
  page: number;
  noitem: number;
}
