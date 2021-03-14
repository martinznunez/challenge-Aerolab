import axios from "axios";

export const getHistorialCanje = () => {
  return axios.get(
    "https://private-anon-642ff5112b-aerolabchallenge.apiary-proxy.com/user/history",

    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    }
  );
};
