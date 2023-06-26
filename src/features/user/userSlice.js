import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from '../../utils/localStorage';
import { createUserThunk, deleteUserThunk, editUserThunk, loginUserThunk, registerUserThunk, updateUserThunk } from './userThunk';


const initialState = {
    user: getUserFromLocalStorage(),
    name:'',
    nickname:'',
    email:'',
    password:'',
    role:'',
    isLoading: false,
    isSidebarOpen: false,
    isEditing: false,
    editUserId: '',

}



export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (user, thunkAPI) =>{
        console.log(`Register user: ${JSON.stringify(user)}`)
        console.log(registerUserThunk('/user/register', user, thunkAPI));
        return registerUserThunk('/user/register', user, thunkAPI);
    }
);

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user, thunkAPI) => {
        return loginUserThunk('/user/login', user, thunkAPI);
    }
);
export const updateUser = createAsyncThunk(
    'user/updateUser',
    async (user, thunkAPI) =>{
        return updateUserThunk('/user/update', user, thunkAPI);
    }
);



export const createUser = createAsyncThunk(
    'user/createUser',
    async (user, thunkAPI) => {
        return createUserThunk('/user/register', user, thunkAPI);
    }
); 

export const editUser = createAsyncThunk(
    'user/editUser',
    async ({userId, user},thunkAPI) => {
        console.log(userId);
        console.log(user);
        return editUserThunk('/user/edit/' + userId, user,thunkAPI);
    }
);

export const deleteUser = createAsyncThunk(
    'user/deleteUser',
    async (userId, thunkAPI) => {
        return deleteUserThunk('/user/delete/' + userId, thunkAPI);
    }
);
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        logoutUser: (state, {payload})=>{
            state.user = null;
            state.isSidebarOpen = false;
            removeUserFromLocalStorage();
            if(payload){
                toast.success(payload);
            }
        },
        handleChange: (state, {payload:{name, value}})=>{
            state[name] = value;
        },
        clearValues: ()=>{
            return {
                ...initialState
            };
        },
        setEditUser: (state, {payload})=>{
            return {...state, isEditing: true, ...payload};
        },
    },
    extraReducers: (builder) =>{
        builder.addCase(registerUser.pending, (state) => {
            console.log('Here in Pending');

            state.isLoading = true;
        }).addCase(registerUser.fulfilled, (state, {payload}) =>{
            console.log('Here in Fulfilled');
            console.log(payload.user)

            state.isLoading = false;
            const {user} = payload;
            state.user = user;
            addUserToLocalStorage(user);
            toast.success(`Hello There ${user.name}`);
        }).addCase(registerUser.rejected, (state, {payload})=>{
            console.log('Here in Rejected');

            state.isLoading = false;
            toast.error(payload);
        }).addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        }).addCase(loginUser.fulfilled, (state, {payload}) =>{
            state.isLoading = false;
            const {user} = payload;
            state.user = user;
            addUserToLocalStorage(user);
            toast.success(`Welcome Back ${user.name}`);
        }).addCase(loginUser.rejected, (state, {payload})=>{
            state.isLoading = false;
            toast.error(payload);
        }).addCase(updateUser.pending, (state)=>{
            state.isLoading = true;
        }).addCase(updateUser.fulfilled, (state, {payload}) =>{
            state.isLoading = false;
            const {user} = payload;
            state.user = user;
            addUserToLocalStorage(user);
            toast.success(`User Updated`)
        }).addCase(updateUser.rejected, (state, {payload}) =>{
            state.isLoading = false;
            toast.error(payload);
        }).addCase(createUser.pending, (state) =>{
            state.isLoading = true;
        }).addCase(createUser.fulfilled, (state) =>{
            state.isLoading = false;
            toast.success('Job Created');
        }).addCase(createUser.rejected, (state,{payload}) =>{
            state.isLoading = false;
            toast.error(payload);
        }).addCase(editUser.pending, (state) =>{
            state.isLoading = true;
        }).addCase(editUser.fulfilled, (state) =>{
            state.isLoading = false;
            toast.success('Job Modified...');
        }).addCase(editUser.rejected, (state,{payload}) =>{
            state.isLoading = false;
            toast.error(payload);
        }).addCase(deleteUser.fulfilled, (state, {payload}) =>{
            toast.success(payload);
        }).addCase(deleteUser.rejected, (state,{payload}) =>{
            toast.error(payload);
        });;
    }
});


export const {toggleSidebar, logoutUser, handleChange, clearValues, setEditUser} = userSlice.actions;
export default userSlice.reducer;