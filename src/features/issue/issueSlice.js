import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import { createIssueThunk, deleteIssueThunk, editIssueThunk } from './issueThunk';

const initialState = {
    isLoading: false,
    user: {},
    book: {},
    borrowDate: '',
    dueDate: '',
    isEditing: false,
    editIssueId: '',
}

export const createIssue = createAsyncThunk(
    'Issue/createIssue',
    async (issue, thunkAPI) => {
        return createIssueThunk('/issue/insert', issue, thunkAPI);
    }
); 

export const editIssue = createAsyncThunk(
    'issue/editIssue',
    async ({issueId, issue},thunkAPI) => {
        console.log(issueId);
        console.log(issue);
        return editIssueThunk('/issue/edit/' + issueId, issue,thunkAPI);
    }
);

export const deleteIssue = createAsyncThunk(
    'issue/deleteIssue',
    async (issueId, thunkAPI) => {
        return deleteIssueThunk('/issue/delete/' + issueId, thunkAPI);
    }
);

const issueSlice = createSlice({
    name: 'issue',
    initialState,
    reducers:{
        handleChange: (state, {payload:{name, value}})=>{
            state[name] = value;
        },
        clearValues: ()=>{
            return {
                ...initialState
            };
        },
        setEditIssue: (state, {payload})=>{
            return {...state, isEditing: true, ...payload};
        },
    },
    extraReducers: (builder) =>{
        builder.addCase(createIssue.pending, (state) =>{
            state.isLoading = true;
        }).addCase(createIssue.fulfilled, (state) =>{
            state.isLoading = false;
            toast.success('Issue Created');
        }).addCase(createIssue.rejected, (state,{payload}) =>{
            state.isLoading = false;
            toast.error(payload);
        }).addCase(editIssue.pending, (state) =>{
            state.isLoading = true;
        }).addCase(editIssue.fulfilled, (state) =>{
            state.isLoading = false;
            toast.success('Issue Modified...');
        }).addCase(editIssue.rejected, (state,{payload}) =>{
            state.isLoading = false;
            toast.error(payload);
        }).addCase(deleteIssue.fulfilled, (state, {payload}) =>{
            toast.success(payload);
        }).addCase(deleteIssue.rejected, (state,{payload}) =>{
            toast.error(payload);
        });
    }
});

export const {handleChange, clearValues, setEditIssue} = issueSlice.actions;
export default issueSlice.reducer;