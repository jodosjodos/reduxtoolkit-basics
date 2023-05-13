import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./uiSlice";
import  Axios  from "axios";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    quantity: 0,
    showCart: false,
    totalQuantity: 0,
    changed:false
  },
  reducers: {
    replaceData:(state,action)=>{
        state.totalQuantity=action.payload.totalPrice,
        state.itemsList=action.payload.itemList
    },
    addCart: (state, action) => {
        state.changed=true
      const newItem = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart: (state, action) => {
      
      const  id  = action.payload;
      state.changed=true
     
      const existingItem = state.itemsList.find((item) => {
       return item.id === id;
      });
      console.log(existingItem);
      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
      }else{
        existingItem.quantity--;
        existingItem.totalPrice-=existingItem.price
      }
    },
    setShowCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});
//second option likeor of sending data using thunks
export const sendCartData=(cart)=>{
    return async(dispatch)=>{
        dispatch(
            uiActions.showNotification({
                open:true,
                message:"sending request",
                type:"alert"
            })
        );
  try{
    const data=await Axios.put("http://localhost:300/api/result",{cart})
    if(data){
      dispatch(uiActions.showNotification({
        open:true,
        message:'succeffyl request',
        type:"success"
      }))
    }
 return data
  }catch(err){
    dispatch(uiActions.showNotification({
        open:true,
        message:'error while sending data to backen',
        type:"error"
      }))
  }


    }
}
export const cartActions = cartSlice.actions;
