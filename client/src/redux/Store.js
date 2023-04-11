import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductSlice/ProductSlice";
import CardReducer from "./ProductSlice/AddCardSlice";
//store........
const store = configureStore({
  reducer: {
    ProductSlice: ProductReducer,
    AddCardSlice: CardReducer,
  },
});

export default store;
