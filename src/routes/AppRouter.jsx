import React from 'react'
import { Error, Landing, Register } from '../pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import'react-toastify/dist/ReactToastify.css';
import { Stats, SharedLayout, AllBooks, AllUsers, AllIssues, AddBook, AddIssue,  ProfileForm, AddUser } from '../pages/dashboard';
import ProtectedRoute from '../pages/dashboard/ProtectedRoute';
import BookDetail from '../pages/bookDetail/BookDetail';
import BookList from '../pages/bookList/BookList';
import BookInfoPage from '../pages/book/BookInfoPage';
import Profile from '../pages/profile/Profile';
import { useContext } from "react";
import { DarkModeContext } from '../context/darkModeContext';

    const AppRouter = () => {
      const { darkMode } = useContext(DarkModeContext);
        return (
                <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 6 }}>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={

                  <ProtectedRoute>
                    <SharedLayout/>
                  </ProtectedRoute>
                  
                  }>
                  <Route index element={<Stats/>}/>
                  <Route path='all-books' element={<AllBooks/>}/>
                  <Route path='all-issues' element={<AllIssues/>}/>
                  <Route path='all-users' element={<AllUsers/>}/>

                  <Route path='add-book' element={<AddBook/>}/>
                  <Route path='add-issue' element={<AddIssue/>}/>
                  <Route path='add-user' element={<AddUser/>}/>
                  <Route path='profile' element={<ProfileForm/>}/>
                  <Route path="profile/:id" element={<Profile />} />
                  <Route path='book-list' element={<BookList/>}/>
                  <Route path="book/:isbn13" element={<BookInfoPage />} />
                </Route>
                <Route path='landing' element={<Landing/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path="book-detail/:isbn13" element={<BookDetail />} />
                <Route path='*' element={<Error/>}/>
              </Routes>
              <ToastContainer position='top-center'/>
            </BrowserRouter>
                      </div>
                      </div>
                    </div>
          )
    }
    
    export default AppRouter