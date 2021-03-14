import axios from "axios";

export const fetchUser = () => {
  return axios.get(
    "https://private-anon-35d65ef466-aerolabchallenge.apiary-mock.com/user/me",
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: process.env.REACT_APP_TOKEN,
      },
    }
  );
};
