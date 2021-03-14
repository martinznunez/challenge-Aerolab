import axios from "axios";

export const postPoints = (puntos) => {
  return axios.post(
    "https://private-anon-83a04a60f6-aerolabchallenge.apiary-proxy.com/user/points",
    {
      amount: Number(puntos),
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
