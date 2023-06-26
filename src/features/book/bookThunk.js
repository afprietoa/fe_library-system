import customFetch from '../../utils/axios';
import { getAllBooks } from '../allBooks/allBooksSlice';
import { clearValues } from './bookSlice';

export const createBookThunk = async (url, book, thunkAPI) =>{
   
    try {
        
        const resp = await customFetch.post(url, book);
        
        thunkAPI.dispatch(clearValues());
        console.log(resp.data);
        book = {...resp.data};
        return {book};
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}

export const editBookThunk = async (url, book, thunkAPI) =>{
   
    try {
        
        const resp = await customFetch.put(url, book);
        
        thunkAPI.dispatch(clearValues());
        console.log(resp.data);
        book = {...resp.data};
        return {book};
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}

export const deleteBookThunk = async (url, thunkAPI) => {
    try {
        
        const resp = await customFetch.delete(url);
        
        thunkAPI.dispatch(getAllBooks());
        console.log(resp.data);
        return "Success! book removed";
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}