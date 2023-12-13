import instance from "../utils/axios-customize";
export const callCategoryDetail = (id) => {
  return instance.get(`/admin/productCategory/detail/${id}`);
};
