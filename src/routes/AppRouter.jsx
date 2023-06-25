import React from 'react'
import { Error, Landing, Register } from '../pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import'react-toastify/dist/ReactToastify.css';
import { Stats, SharedLayout, AllBooks, AllUsers, AllIssues, AddBook, AddIssue,  Profile, AddUser } from '../pages/dashboard';
import ProtectedRoute from '../pages/dashboard/ProtectedRoute';

    const AppRouter = () => {

        return (
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
                  <Route path='profile' element={<Profile/>}/>
                </Route>
                <Route path='landing' element={<Landing/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path='*' element={<Error/>}/>
              </Routes>
              <ToastContainer position='top-center'/>
            </BrowserRouter>
          )
    }
    
    export default AppRouter