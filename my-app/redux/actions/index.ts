import { ADD_PRODUCT, REMOVE_PRODUCT, SET_PRODUCT_LIST, Product, ProductListActionTypes } from './types';

export const addProduct = (product: Product): ProductListActionTypes => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const removeProduct = (productId: string): ProductListActionTypes => ({
  type: REMOVE_PRODUCT,
  payload: productId,
});

export const setProductList = (productList: Product[]): ProductListActionTypes => ({
  type: SET_PRODUCT_LIST,
  payload: productList,
});
