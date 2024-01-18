import axios from "axios";

export const getProducts = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log("🚀 ~ axios.get ~ res:", res);
      callback(res.data);
    })
    .catch((err) => {
      console.log("🚀 ~ axios.get ~ err:", err);
    });
};

export const getDetailProduct = (id, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      console.log("🚀 ~ axios.get ~ res:", res);
      callback(res.data);
    })
    .catch((err) => {
      console.log("🚀 ~ axios.get ~ err:", err);
    });
};
