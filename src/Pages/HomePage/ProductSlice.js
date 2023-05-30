import {createAsyncThunk,createReducer,createEntityAdapter,createAction} from '@reduxjs/toolkit'
import axios from 'axios'

export const RequestToGetData = createAsyncThunk("productslice/requesttogetdata",async()=>{
  return await axios.get('http://localhost:3001/products')
    .then(result=>result.data)
})

const ProductAdaptor = createEntityAdapter();

const initialState=ProductAdaptor.getInitialState();

export const {
    selectById:selectProductsById,
    selectAll:selectAllProducts,
    selectEntities:selectProductsEntities
}=ProductAdaptor.getSelectors(state=>state.productSlice);

const ProductSlice=createReducer(initialState,builder=>{
    builder
    .addCase(RequestToGetData.fulfilled,(state,action)=>{
        ProductAdaptor.upsertMany(state,action.payload);
    })
})


export default ProductSlice