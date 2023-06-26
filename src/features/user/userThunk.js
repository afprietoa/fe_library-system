import customFetch from '../../utils/axios';
import { getAllUsers } from '../allUsers/allUsersSlice';
import { clearValues } from './userSlice';

export const registerUserThunk = async(url, user, thunkAPI) =>{
    try {
        const resp = await customFetch.post(url, user);
        user = {...resp.data};
        return {user};
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}

export const loginUserThunk = async(url, user, thunkAPI)=>{
    try {
        const resp = await customFetch.post(url, user);
        user = {...resp.data};
        return {user};
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}

export const updateUserThunk = async (url, user, thunkAPI) =>{
    try {
        const resp = await customFetch.patch(url , user);
    console.log(resp.data);
        user = {...resp.data};
        return {user};
    }catch (error) {
        return thunkAPI.rejectWithValue(error);
    };
}

export const createUserThunk = async (url, user, thunkAPI) =>{
   
    try {
        
        const resp = await customFetch.post(url, user);
        
        thunkAPI.dispatch(clearValues());
        console.log(resp.data);
        user = {...resp.data};
        return {user};
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}

export const editUserThunk = async (url, user, thunkAPI) =>{
   
    try {
        
        const resp = await customFetch.patch(url, user);
        
        thunkAPI.dispatch(clearValues());
        console.log(resp.data);
        user = {...resp.data};
        return {user};
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}

export const deleteUserThunk = async (url, thunkAPI) => {
    try {
        
        const resp = await customFetch.delete(url);
        
        thunkAPI.dispatch(getAllUsers());
        console.log(resp.data);
        return "Success! user removed";
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}