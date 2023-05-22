import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_RESET,
  GET_PRODUCTS_SUCCESS,
  

} from "./Product.types";

let initState = {
  loading: false,
  error: false,
  data: [],
  categories: {},
  isAuth: false,
};

export const postReducer = (state = initState, { payload, type }) => {
  switch (type) {
    case GET_PRODUCTS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_PRODUCTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
   
    case GET_PRODUCTS_SUCCESS: {
       return {
         ...state,
         loading: false,
         data: payload,
       };
    }
    case GET_PRODUCTS_RESET: {
      return { ...initState };
    }

  
  
    case "FILTER_BY_CATEGORY": {
      let filteredData = state.data.filter(
        (product) => product.title == payload
      );

      return { ...state, data: filteredData };
    }
    

    default: {
      return state;
    }
  }
};
function convertToNum(str) {
  str = str.split("");
  str = str.filter((elem) => !isNaN(elem));
  str = str.join("");
  const num = +str;
  return num;
}
