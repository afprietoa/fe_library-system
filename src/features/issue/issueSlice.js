import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';

const initialState = {
    isLoading: false,
    issue: null
}

const issueSlice = createSlice({
    name: 'issue',
    initialState,
});

export default issueSlice.reducer;