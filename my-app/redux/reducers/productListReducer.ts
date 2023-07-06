import { ADD_PRODUCT, REMOVE_PRODUCT, SET_PRODUCT_LIST, ProductListActionTypes, Product } from '../actions/types';

const initialState: Product[] = [];

const productListReducer = (state = initialState, action: ProductListActionTypes): Product[] => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    case REMOVE_PRODUCT:
      return state.filter((product) => product.id !== action.payload);
    case SET_PRODUCT_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default productListReducer;
