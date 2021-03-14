import axios from "axios";

export const postRedeem = (producto) => {
  return axios.post(
    "https://private-anon-642ff5112b-aerolabchallenge.apiary-proxy.com/redeem",
    {
      productId: producto._id,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    }
  );
};
