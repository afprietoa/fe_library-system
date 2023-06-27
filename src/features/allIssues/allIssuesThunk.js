import customFetch from '../../utils/axios';
export const getAllIssuesThunk = async (url, thunkAPI) =>{
    try {
        const resp = await customFetch.get(url);
        console.log(resp.data);
        const issues =[...resp.data];
        return {issues};
    } catch (error) {
        return thunkAPI.rejectWithValue('There was an error');
    }
}