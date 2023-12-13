import instance from "../utils/axios-customize";

export const callGetCart = () => {
  return instance.get(`/cart`);
};
export const callUpdateCart = (data) => {
  return instance.patch(`/cart/update`, data);
};
export const callAddToCart = (data) => {
  return instance.post(`/cart/add/`, data);
};
export const callDeleteFromCart = (data) => {
  return instance.patch(`/cart/delete`, {
    ...data,
  });
};
export const callCheckout = (data) => {
  return instance.post("/checkout", data);
};
export const callCheckOutSuccess = (data) => {
  return instance.post("/checkout/success", data);
};
