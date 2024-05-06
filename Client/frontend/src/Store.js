import { configureStore } from "@reduxjs/toolkit";
import UserSlice from './Slices/UserSlice'

const store = configureStore({
    reducer:{
        UserSlice,
        
    }
})

export default store