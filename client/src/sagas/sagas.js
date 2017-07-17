import { takeEvery } from 'redux-saga';
import { put, fork } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {
  receiveProducts,
  showProductDetail,
    retrieveGithubRepos,
} from '../actions/actions';

import { GET_PRODUCT_DETAIL, REQUEST_PRODUCTS, REQUEST_SEARCH_PRODUCTS, RETRIEVE_GITHUB_REPO } from '../../../shared/constants';

export function fetchGithub(searchCriterias = []){
    if (searchCriterias !== []) {
        let queryString = '?';
        searchCriterias.forEach((item) => {
            queryString += `${item.name}=${item.value}`;
        });
        return fetch(`https://api.github.com/search/users${queryString}`)
            .then(response => response.json());
    }

    return fetch('https://api.github.com/search/users?q=tom')
        .then(response => response.json());
}

export function fetchGithubDetail(id) {
    return fetch(`https://api.github.com/users/${id}`)
        .then(response => response.json());
}

export function fetchGithubRepo(url) {
    return fetch(url)
        .then(response => response.json());
}

export function* fetchProducts() {
    const products = yield fetchGithub();
  yield put(receiveProducts(products));
}

export function* fetchSearchProducts(action) {
    const products = yield fetchGithub(action.searchCriterias);
  yield put(receiveProducts(products));
}

/*
export function* fetchRepo(action) {
    action.repo_url='flsf';
    const repos = yield fetchGithubRepo(action.repo_url);
    yield put(retrieveGithubRepos(repos))
}
*/

export function* fetchProductDetail(action) {
    const id = action.id;
    const product = yield fetchGithubDetail(id);
    const repos = yield fetchGithubRepo(product.repos_url);
    product.repos = repos;
    yield put(showProductDetail(product));


}

export function* startup() {
  //yield takeEvery(REQUEST_PRODUCTS, fetchProducts);
  yield takeEvery(REQUEST_SEARCH_PRODUCTS, fetchSearchProducts);
  yield takeEvery(GET_PRODUCT_DETAIL, fetchProductDetail);
    //yield takeEvery(RETRIEVE_GITHUB_REPO, fetchRepo);
}

export default function* rootSaga() {
  yield fork(startup);
}
