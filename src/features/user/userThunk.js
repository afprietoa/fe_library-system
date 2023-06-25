import customFetch from '../../utils/axios';

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
        return thunkAPI.rejectWithValue(error.response.data.msg);
    };
}