import customFetch from '../../utils/axios';
export const getAllBooksThunk = async (url, thunkAPI) =>{
    try {
        const resp = await customFetch.get(url);
        console.log(resp.data);
        const books =[...resp.data];
        return {books};
    } catch (error) {
        return thunkAPI.rejectWithValue('There was an error');
    }
}

export const getBooksByTitleThunk = async (url, thunkAPI) =>{
    try {
        const resp = await customFetch.get(url);
        console.log(resp.data);
        const books =[...resp.data];
        return {books};
    } catch (error) {
        //return thunkAPI.rejectWithValue('There was an error');
    }
}

export const getBooksByAuthorThunk = async (url, thunkAPI) =>{
    try {
        const resp = await customFetch.get(url);
        console.log(resp.data);
        const books =[...resp.data];
        return {books};
    } catch (error) {
        //return thunkAPI.rejectWithValue('There was an error');
    }
}

export const getBooksByGenderThunk = async (url, thunkAPI) =>{
    try {
        const resp = await customFetch.get(url);
        console.log(resp.data);
        const books =[...resp.data];
        return {books};
    } catch (error) {
        return thunkAPI.rejectWithValue('There was an error');
    }
}

export const getBookThunk = async (url, thunkAPI) =>{
   
    try {
        
        const resp = await customFetch.get(url);
    
        console.log(resp.data);
        const book = {...resp.data};
        return {book};
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}