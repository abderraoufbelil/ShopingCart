import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


export const CartSlice=createSlice({
name:'Cart',
initialState:[],
reducers:{
    AddToCart:(state,action)=>{
    const id=action.payload.id
    if(!state.find((item) => item.id === id)){
    const newitem={...action.payload,qte:1}
    state.push(newitem)}

    

    },
    DeleteFromCart: (state, action) => {
        const id = action.payload;
        return state.filter((item) => item.id !== id);
      },
    incrementyqte: (state, action) => {
        const { amount, id } = action.payload;
        const modifiedItem = state.find((item) => item.id === id);
        if (modifiedItem) {

            modifiedItem.qte += amount;
         
        }
      },
    Decrementqte: (state, action)=>{
        const { amount, id } = action.payload;
        const modifiedItem = state.find((item) => item.id === id);
        if (modifiedItem) {

            if(modifiedItem.qte - amount<1){


            }
            else{
                modifiedItem.qte -= amount   
            } ;
         
        }
      },
      ClearCart: () => {
        return [];
      },
}

})


export const {DeleteFromCart,Decrementqte,incrementyqte,ClearCart,AddToCart}=CartSlice.actions

export default CartSlice.reducer