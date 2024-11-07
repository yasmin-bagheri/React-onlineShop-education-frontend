import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        token:localStorage.getItem("token")||"",
        firstName:localStorage.getItem("firstName")||"",
        lastName:localStorage.getItem("lastName")||"",
    },
    reducers:{
        token:(state,action)=>state.token=action.payload.token,
        logout:(state)=>{
            state.token=""
            state.firstName=""
            state.lastName=""
            localStorage.removeItem("token")
            localStorage.removeItem("firstName")
            
        }
    },
    extraReducers(builder){
        builder.addCase(userLogin.fulfilled,(state,action)=>{
            const {
                token,
                firstName,
                lastName
            }=action.payload
            state.token=token
            state.firstName=firstName
            state.lastName=lastName
            localStorage.setItem("firstName",action.payload.username)
            localStorage.setItem("token",action.payload.token)
            
        })
        builder.addCase(userSignUP.fulfilled,(state,action)=>{
            const {
                token,
                firstName,
                lastName
            }=action.payload
            state.token=token
            state.firstName=firstName
            state.lastName=lastName
            
        })
    }
})

export const userLogin= createAsyncThunk(
    "/users/login",
    async (data)=>{
        const response =await axios.post("http://localhost:5000/api/users/login",data);
        return response.data
    }
)
export const userSignUP= createAsyncThunk(
    "users/register",
    async (data)=>{
        const response =await axios.post("http://localhost:5000/api/users/register",data);
        return response.data
    }
)
export default authSlice.reducer
export const {logout,token}=authSlice.actions