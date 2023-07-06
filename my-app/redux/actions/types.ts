export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

interface AddProductAction {
  type: typeof ADD_PRODUCT;
  payload: Product;
}

interface RemoveProductAction {
  type: typeof REMOVE_PRODUCT;
  payload: string;
}

interface SetProductListAction {
  type: typeof SET_PRODUCT_LIST;
  payload: Product[];
}

export type ProductListActionTypes = AddProductAction | RemoveProductAction | SetProductListAction;

export interface RootState {
  productList: Product[];
}
