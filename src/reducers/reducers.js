import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
  REQUEST_PRODUCTS,
  RECEIVED_PRODUCTS,
  SHOW_PRODUCT_DETAIL,
  REQUEST_SEARCH_PRODUCTS,
} from '../shared/constants';

export function products(state = {
  isFetching: false,
  items: [],
  selectedItem: {},
  repos: [],
}, action) {
  switch (action.type) {
  case REQUEST_PRODUCTS:
    return Object.assign({}, state, {isFetching: true});

  case RECEIVED_PRODUCTS:
      return Object.assign({}, state, {isFetching: false}, {items: action.products.items});

  case SHOW_PRODUCT_DETAIL:
    return Object.assign({}, state, {selectedItem: action.product});


  case REQUEST_SEARCH_PRODUCTS:
    return Object.assign({}, state, {isFetching: true});

  default:
    return state;
  }
}

const rootReducer = combineReducers({
  products,
  routing: routerReducer,
});

export default rootReducer;
