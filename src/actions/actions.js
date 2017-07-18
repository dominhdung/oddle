import {
  REQUEST_PRODUCTS,
  RECEIVED_PRODUCTS,
  GET_PRODUCT_DETAIL,
  SHOW_PRODUCT_DETAIL,
} from '../shared/constants';

export const requestProducts = () => ({ type: REQUEST_PRODUCTS });

export const receiveProducts = products => ({ type: RECEIVED_PRODUCTS, products });

export const getProductDetail = id => ({ type: GET_PRODUCT_DETAIL, id });

export const showProductDetail = product => ({ type: SHOW_PRODUCT_DETAIL, product });



