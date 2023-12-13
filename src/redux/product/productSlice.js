import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: [],
  productFromWishlist: [],
  categoryParent: [],
  compareProduct: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    doGetWishListAction: (state, action) => {
      state.wishList = action.payload;
    },
    doGetInfoProductFromWishList: (state, action) => {
      state.productFromWishlist = action.payload;
    },
    doGetCategoryParent: (state, action) => {
      state.categoryParent = action.payload;
    },
    doLogoutWishlist: (state) => {
      state.wishList = [];
    },
    doAddToCompare: (state, action) => {
      state.compareProduct.push({
        token: action.payload.token,
        id: action.payload.id,
      });
      localStorage.setItem(
        "compareProduct",
        JSON.stringify(state.compareProduct)
      );
    },
    doDeleteCompare: (state, action) => {
      state.compareProduct = state.compareProduct.filter(
        (item) =>
          item.id !== action.payload.id || item.token !== action.payload.token
      );
      localStorage.setItem(
        "compareProduct",
        JSON.stringify(state.compareProduct)
      );
    },
    doGetCompareProduct: (state) => {
      state.compareProduct =
        JSON.parse(localStorage.getItem("compareProduct")) || [];
    },
  },
});

export const {
  doGetWishListAction,
  doGetInfoProductFromWishList,
  doGetCategoryParent,
  doLogoutWishlist,
  doAddToCompare,
  doGetCompareProduct,
  doDeleteCompare,
} = productSlice.actions;

export default productSlice.reducer;
