import customFetch from '../../utils/axios';
export const getAllUsersThunk = async (url, thunkAPI) =>{
    try {
        const resp = await customFetch.get(url);
        console.log(resp.data);
        const users =[...resp.data];
        return {users};
    } catch (error) {
        return thunkAPI.rejectWithValue('There was an error');
    }
}