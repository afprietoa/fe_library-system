import customFetch from '../../utils/axios';
import { getAllIssues } from '../allIssues/allIssuesSlice';
import { clearValues } from './issueSlice';

export const createIssueThunk = async (url, issue, thunkAPI) =>{
   
    try {
        
        const resp = await customFetch.post(url, issue);
        
        thunkAPI.dispatch(clearValues());
        console.log(resp.data);
        issue = {...resp.data};
        return {issue};
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}

export const editIssueThunk = async (url, issue, thunkAPI) =>{
   
    try {
        
        const resp = await customFetch.put(url, issue);
        
        thunkAPI.dispatch(clearValues());
        console.log(resp.data);
        issue = {...resp.data};
        return {issue};
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}

export const deleteIssueThunk = async (url, thunkAPI) => {
    try {
        
        const resp = await customFetch.delete(url);
        
        thunkAPI.dispatch(getAllIssues());
        console.log(resp.data);
        return "Success! issue removed";
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}