/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // cartItems:[],
    cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
    cartTotalQty:0,
    cartTotalPrice:0
  }

  const sliceOne =createSlice({
    name:"cart",
    initialState,
    reducers:{
            addToCart(state,action){
              //  state.cartItems.push(action.payload)
              const itemIndex=state.cartItems.findIndex(
                (item)=>item.id === action.payload.id
                
              )
              
              
              
              if(itemIndex>=0)
                {
                  state.cartItems[itemIndex].cartTotalQty+=1
                }
                else{
                  let tempProductItems={...action.payload,cartTotalQty:1}
                  state.cartItems.push(tempProductItems)
                }
            },
        clearCart(state,action)
        {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
        ,
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
              (item) => item.id === action.payload.id
            );
      
            if (state.cartItems[itemIndex].cartTotalQty > 1) {
              state.cartItems[itemIndex].cartTotalQty -= 1;
      
             
            } else if (state.cartItems[itemIndex].cartTotalQty === 1) {
              const nextCartItems = state.cartItems.filter(
                (item) => item.id !== action.payload.id
              );
      
              state.cartItems = nextCartItems;
      
              
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            
          },
          removeFromCart(state, action) {
         
             
            const nextCartItems = state.cartItems.filter(
              (item) => item.id !== action.payload.id
            );
  
            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
         
          
        //   return state;
       
    }
    }
  })

  export const {clearCart,addToCart,decreaseCart,removeFromCart}=sliceOne.actions
  export default sliceOne.reducer;