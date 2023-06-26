import userSlice from "./features/user/userSlice";
import allUsersSlice from "./features/allUsers/allUsersSlice";
import allBooksSlice from "./features/allBooks/allBooksSlice";
import bookSlice from "./features/book/bookSlice"
import issueSlice from "./features/issue/issueSlice";
import {configureStore} from '@reduxjs/toolkit';


export const store = configureStore({
    reducer:{
        user: userSlice,
        allUsers: allUsersSlice,
        book: bookSlice,
        allBooks: allBooksSlice,
        issue: issueSlice,
    },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false
          }),
        
    
})