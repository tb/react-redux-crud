import { keyBy } from 'lodash';
import axios from 'axios';
import querystring from 'querystring';
import * as actionTypes from './actionTypes';

export function getCategory(id) {
  return function (dispatch) {
    return axios.get(`http://localhost:8081/categories/${id}`)
      .then((res) => {
        dispatch({type: actionTypes.CATEGORIES_FETCH_ONE_SUCCESS, payload: res.data});
      })
  };
}

export function getCategories(params) {
  return function (dispatch) {
    return axios.get(`http://localhost:8081/categories?${querystring.stringify(params)}`)
      .then((res) => {
        const byId = keyBy(res.data, (category) => category.id);
        dispatch({type: actionTypes.CATEGORIES_FETCH_SUCCESS, payload: {byId, params}});
      })
  };
}

export function createCategory(category) {
  return function (dispatch) {
    return axios.post(`http://localhost:8081/categories`, category)
      .then((res) => {
        dispatch({type: actionTypes.CATEGORIES_CREATE_SUCCESS, payload: res.data});
      })
  };
}

export function updateCategory(category) {
  return function (dispatch) {
    return axios.put(`http://localhost:8081/categories/${category.id}`, category)
      .then((res) => {
        dispatch({type: actionTypes.CATEGORIES_UPDATE_SUCCESS, payload: res.data});
      })
  };
}

export function deleteCategory(id) {
  return function (dispatch) {
    return axios.delete(`http://localhost:8081/categories/${id}`)
      .then((res) => {
        dispatch({type: actionTypes.CATEGORIES_DELETE_SUCCESS, payload: id});
      })
  };
}
