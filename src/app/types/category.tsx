export interface Category {
  id: number;
  id_parent: number;
  categoryname: string;
  show: boolean;
}

export interface AddCategory {
  id_parent: number;
  categoryname: string;
}

export type EditCategory = AddCategory & { id: number };

export interface DeleteCategory {
  id: Array<Number>;
}

export interface CustomesCategory {
  listcategory: Array<Category>;
  loading: boolean;
  error: boolean;
}
