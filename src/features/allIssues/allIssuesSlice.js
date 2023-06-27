import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import { getAllIssuesThunk } from './allIssuesThunk';


const initialState = {
    isLoading: false,
    issues: [],
}

export const getAllIssues = createAsyncThunk(
    'allIssues/getIssues', async(_, thunkAPI)=>{
        return getAllIssuesThunk('/issue/all', thunkAPI);
})

const allIssuesSlice = createSlice({
    name: 'allIssues',
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
        builder.addCase(getAllIssues.pending, (state) =>{
            state.isLoading = true;
        }).addCase(getAllIssues.fulfilled, (state,{payload}) =>{
            state.isLoading = false;
            state.issues = payload.issues;
        }).addCase(getAllIssues.rejected, (state,{payload}) =>{
            state.isLoading = false;
            toast.error(payload);
        });
    }
});

export const {showLoading, hideLoading, handleChange, clearFilters} = allIssuesSlice.actions;
export default allIssuesSlice.reducer;