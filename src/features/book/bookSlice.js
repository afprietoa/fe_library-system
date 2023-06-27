import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import { createBookThunk, deleteBookThunk, editBookThunk } from './bookThunk';

const initialState = {
    isLoading: false,
    isbn13: '',
    isbn10: '',
    title: '',
    subTitle: '',
    authors: [],
    categories: [],
    thumbnail: '',
    description:'',
    publishedYear:'',
    averageRating:'',
    copies:'',
    ItemStatus:'',
    isEditing: false,
    editBookId: '',
}

export const createBook = createAsyncThunk(
    'book/createBook',
    async (book, thunkAPI) => {
        return createBookThunk('/book/insert', book, thunkAPI);
    }
); 

export const editBook = createAsyncThunk(
    'book/editBook',
    async ({bookId, book},thunkAPI) => {
        console.log(bookId);
        console.log(book);
        return editBookThunk('/book/edit/' + bookId, book,thunkAPI);
    }
);

export const deleteBook = createAsyncThunk(
    'book/deleteBook',
    async (bookId, thunkAPI) => {
        return deleteBookThunk('/book/delete/' + bookId, thunkAPI);
    }
);

const bookSlice = createSlice({
    name: 'book',
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
        setEditBook: (state, {payload})=>{
            return {...state, isEditing: true, ...payload};
        },
    },
    extraReducers: (builder) =>{
        builder.addCase(createBook.pending, (state) =>{
            state.isLoading = true;
        }).addCase(createBook.fulfilled, (state) =>{
            state.isLoading = false;
            toast.success('Book Created');
        }).addCase(createBook.rejected, (state,{payload}) =>{
            state.isLoading = false;
            toast.error(payload);
        }).addCase(editBook.pending, (state) =>{
            state.isLoading = true;
        }).addCase(editBook.fulfilled, (state) =>{
            state.isLoading = false;
            toast.success('Book Modified...');
        }).addCase(editBook.rejected, (state,{payload}) =>{
            state.isLoading = false;
            toast.error(payload);
        }).addCase(deleteBook.fulfilled, (state, {payload}) =>{
            toast.success(payload);
        }).addCase(deleteBook.rejected, (state,{payload}) =>{
            toast.error(payload);
        });
    }
});

export const {handleChange, clearValues, setEditBook} = bookSlice.actions;
export default bookSlice.reducer;