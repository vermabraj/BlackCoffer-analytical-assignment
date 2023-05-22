import axios from "axios";

export const getProductsApi = async () => {
  let res = await axios.get(
    `https://adventurous-ruby-dress.cyclic.app/products`
  );
  return res.data;
};
