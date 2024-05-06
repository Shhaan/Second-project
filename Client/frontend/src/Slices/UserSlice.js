import { createSlice } from "@reduxjs/toolkit";


const initialState = {   
    isAuthenticated:false,
    isFarmer:false,
    user:null,
    loading:false,
    error:null,
    }


const UserSlice = createSlice({
    name:'UserSlice',
    initialState,
    reducers: {
        UserLogLoading: (state) => {
            state.loading = true;
        },
        UserisFarmer: (state) => {
            state.isFarmer = true;
        },
        UserRegistered: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
        },
        UserRegistrationerr: (state, action) => {
            state.error = action.payload;
        }
    }
})




export const {UserLogLoading,UserRegistered,UserRegistrationerr,UserisFarmer} = UserSlice.actions
export default UserSlice.reducer