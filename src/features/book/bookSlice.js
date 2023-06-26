import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';

const initialState = {
    isLoading: false,
    book: null
}

const bookSlice = createSlice({
    name: 'book',
    initialState,
});

export default bookSlice.reducer;