import { createSlice,createAction, createEntityAdapter, createReducer } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = {
    carts:localStorage.getItem("carts")?JSON.parse(localStorage.getItem("carts")):[],
    status:false
}

const addToCart = createAction("cartslice/addToCart")
const deleteById=createAction("cartslice/deletebyid")
const deleteAll = createAction("cartslice/deleteall")
const increaseCount = createAction("cartslice/increaseCount")
const decreaseCount = createAction("cartslice/decreaseCount")

const CartSlice = createReducer(initialState,builder=>{
    builder
    .addCase(addToCart,(state,action)=>{
        state.status=true;
      state.carts.map((product)=>{
        if(product.product_id==action.payload.product_id){
             product.product_count+=1
             state.status=false
        }
      })
      state.status&&state.carts.push(action.payload);
      localStorage.setItem("carts",JSON.stringify(state.carts))
    })  
    .addCase(deleteById,(state,action)=>{
       state.carts=state.carts.filter((product)=>{
            return product.product_id!==action.payload
        });
       localStorage.setItem("carts",JSON.stringify(state.carts))
    })
    .addCase(deleteAll,(state,action)=>{
        state.carts=[]
    })
    .addCase(increaseCount,(state,action)=>{
     state.carts.map((product)=>{
            if(product.product_id==action.payload){
               return product.product_count+=1
            }
        })
        localStorage.setItem("carts",JSON.stringify(state.carts))
    }) 
    .addCase(decreaseCount,(state,action)=>{
      state.carts.map((product)=>{
            if(product.product_id==action.payload){
              if(product.product_count>1){
                return product.product_count-=1
              }else if(product.product_count==1) {
                deleteProduct(product.product_id)
              }
            }
        })
       function deleteProduct (id) {
        state.carts=state.carts.filter(product=>{
            return product.product_id !== id
        })
       }
       localStorage.setItem("carts",JSON.stringify(state.carts))
    })
})

export default CartSlice