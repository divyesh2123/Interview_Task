import {createAsyncThunk} from "@reduxjs/toolkit";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios"

const POST_URL = "https://662944b754afcabd0738cab6.mockapi.io/leave";

export const api = createAsyncThunk("api", async (data) => {
    try{
        const response = await axios.get(POST_URL, data)
        return response.data
    }catch(error){
        return isRejectedWithValue("error", error)
    }
})

export const apisave = createAsyncThunk("apisave", async (data) => {
    try{
        const response = await axios.post(POST_URL, data)
        return response.data
    }catch(error){
        return isRejectedWithValue("error", error)
    }
})