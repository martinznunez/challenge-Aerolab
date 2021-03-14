import axios from "axios";

export const fetchProductos = () => {
  return axios.get(
    "https://private-anon-83a04a60f6-aerolabchallenge.apiary-proxy.com/products",
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: process.env.REACT_APP_TOKEN,
      },
    }
  );
};
