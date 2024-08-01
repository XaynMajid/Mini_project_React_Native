// import { createSlice } from "@reduxjs/toolkit";

// const productSlice = createSlice({
//   name: "product",
//   initialState:{items: []},
//   reducers: {
//     addProducts(state, action) {
//       state.items.push(action.payload)
//     },
//   },
// });

// export const {addProducts} =productSlice.actions
// export default productSlice.reducer


// slices/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [], // Initial state should be an object with an items array
  reducers: {
    
    addProducts(state, action) {
      state.push(action.payload); // Add product to items array
    },
  },
});
export const { addProducts } = productSlice.actions;
export default productSlice.reducer;

