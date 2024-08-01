import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      // Find the index of the item in the cart
      const myIndex = state.findIndex(item => item.id === action.payload.id);
      // console.log(myIndex);

      if (myIndex === -1) {
        // Item not found, add new item to cart
        state.push({
          brand: action.payload.brand,
          id: action.payload.id,
          image: action.payload.image,
          name: action.payload.name,
          price: action.payload.price,
          qty: 1 // Start quantity at 1 since it's the first time adding this item
        });
        // console.log(action.payload);
      } else {
        // Item found, increment quantity
        state[myIndex].qty += 1;
      }
    },
    removeFromCart(state, action) {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state[index].qty=state[index].qty-1
        if(state[index].qty==0){
          state.splice(index, 1);
        }
      } else {
        console.log('Item not in the cart');
      }
  },
  deleteFromCart(){
    state=[]
  }
}

 } )


export const { addToCart,removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
