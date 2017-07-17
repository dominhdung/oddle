import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
  REQUEST_PRODUCTS,
  RECEIVED_PRODUCTS,
  SHOW_PRODUCT_DETAIL,
    RETRIEVE_GITHUB_REPO,
  REQUEST_SEARCH_PRODUCTS,
} from '../../../shared/constants';

export function products(state = {
  isFetching: false,
  items: [],
  selectedItem: {},
  repos: [],
}, action) {
  switch (action.type) {
  case REQUEST_PRODUCTS:
    return { ...state, isFetching: true };
  case RECEIVED_PRODUCTS:
    return { ...state,
      isFetching: false,
      items: action.products.items,
    };
  case SHOW_PRODUCT_DETAIL:
    return {
      ...state,
      selectedItem: action.product,
    };

    case RETRIEVE_GITHUB_REPO:
        return {
            ...state,
            repos: action.repos,
        };
  case REQUEST_SEARCH_PRODUCTS:
    return { ...state, isFetching: true };
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  products,
  routing: routerReducer,
});

export default rootReducer;
