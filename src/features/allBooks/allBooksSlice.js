import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import { getAllBooksThunk, getBookThunk, getBooksByAuthorThunk, getBooksByGenderThunk, getBooksByTitleThunk } from './allBooksThunk';
import { getBookFromLocalStorage } from '../../utils/localStorage';


const initialState = {
    isLoading: false,
    books: [],
    stats: {},
    book: getBookFromLocalStorage(),
}

export const getAllBooks = createAsyncThunk(
    'allBooks/getBooks', async(_, thunkAPI)=>{
        return getAllBooksThunk('/book/all', thunkAPI);
})

export const getBooksByTitle = createAsyncThunk(
    'booksByTitle/getBooksByTitle', async(title, thunkAPI)=>{
        return getBooksByTitleThunk('/book/search/title/' + title, thunkAPI);
})

export const getBooksByAuthor = createAsyncThunk(
    'booksByAuthor/getBooksByAuthor', async(author, thunkAPI)=>{
        return getBooksByAuthorThunk('/book/search/author/' + author, thunkAPI);
})

export const getBooksByGender = createAsyncThunk(
    'booksByGender/getBooksByGender', async(gender, thunkAPI)=>{
        return getBooksByGenderThunk('/book/search/genre/' + gender, thunkAPI);
})

export const getBook = createAsyncThunk(
    'book/getBook', 
    async (isbn13, thunkAPI) => {
        return getBookThunk('/book/search/isbn/' + isbn13, thunkAPI);
})


const allBooksSlice = createSlice({
    name: 'allBooks',
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
        builder.addCase(getAllBooks.pending, (state) =>{
            state.isLoading = true;
        }).addCase(getAllBooks.fulfilled, (state,{payload}) =>{
            state.isLoading = false;
            state.books = payload.books;
        }).addCase(getAllBooks.rejected, (state,{payload}) =>{
            state.isLoading = false;
            toast.error(payload);
        }).addCase(getBooksByTitle.pending, (state) =>{
            state.isLoading = true;
        }).addCase(getBooksByTitle.fulfilled, (state,{payload}) =>{
            state.isLoading = false;
            state.books = payload.books;
        }).addCase(getBooksByTitle.rejected, (state,{payload}) =>{
            state.isLoading = false;
            toast.error(payload);
        }).addCase(getBooksByAuthor.pending, (state) =>{
            state.isLoading = true;
        }).addCase(getBooksByAuthor.fulfilled, (state,{payload}) =>{
            state.isLoading = false;
            state.books = payload.books;
        }).addCase(getBooksByAuthor.rejected, (state,{payload}) =>{
            state.isLoading = false;
            toast.error(payload);
        }).addCase(getBooksByGender.pending, (state) =>{
            state.isLoading = true;
        }).addCase(getBooksByGender.fulfilled, (state,{payload}) =>{
            state.isLoading = false;
            state.books = payload.books;
        }).addCase(getBooksByGender.rejected, (state,{payload}) =>{
            state.isLoading = false;
            toast.error(payload);
        }).addCase(getBook.pending, (state) =>{
            state.isLoading = true;
        }).addCase(getBook.fulfilled, (state,{payload}) =>{
            state.isLoading = false;
            state.books = payload.books;
        }).addCase(getBook.rejected, (state,{payload}) =>{
            state.isLoading = false;
            toast.error(payload);
        });
    }
});

export const {showLoading, hideLoading, handleChange, clearFilters} = allBooksSlice.actions;
export default allBooksSlice.reducer;