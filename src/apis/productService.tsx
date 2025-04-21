import axiosClient from "./axiosClient";

const getProducts = async () => {
  const res = await axiosClient.get("/all");

  console.log("gia tri tra ve : ", res);
};

export { getProducts };
