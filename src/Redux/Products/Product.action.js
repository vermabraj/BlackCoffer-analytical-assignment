import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS
} from "./Product.types";
import { getProductsApi } from "./ProductApi";

import axios from "axios";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    let data = await getProductsApi();

    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};
