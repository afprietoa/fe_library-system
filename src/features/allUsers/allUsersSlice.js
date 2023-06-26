import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import { getAllUsersThunk } from './allUsersThunk';



const initialState = {
    isLoading: false,
    users: [],
    stats: {},
}

export const getAllUsers = createAsyncThunk(
    'allUsers/getUsers', async(_, thunkAPI)=>{
        return getAllUsersThunk('/user/all', thunkAPI);
})

const allUsersSlice = createSlice({
    name: 'allUsers',
    initialState,
    reducers:{
        showLoading: (state) =>{
            state.isLoading = true;
        },
        hideLoading: (state) =>{
            state.isLoading = false;
        },
        handleChange: (state, {payload:{name,value}}) =>{
            state[name] = value;
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(getAllUsers.pending, (state) =>{
            console.log('Here in Pending');

            state.isLoading = true;
        }).addCase(getAllUsers.fulfilled, (state,{payload}) =>{
            console.log('Here in Fulfilled');

            state.isLoading = false;
            state.users = payload.users
            
        }).addCase(getAllUsers.rejected, (state,{payload}) =>{
            console.log('Here in Rejected');

            state.isLoading = false;
            toast.error(payload);
        });
    }
});

export const {showLoading, hideLoading, handleChange} = allUsersSlice.actions;
export default allUsersSlice.reducer;