import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../Pages/HomePage/ProductSlice";
import { Reducers } from "../Reducers/Reducers";


const Store = configureStore({
    reducer:Reducers
})

export default Store