import React, { useEffect } from 'react'
import './bookDetail.scss';
import { useNavigate, useParams } from 'react-router-dom';
import {FaArrowLeft} from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { getBook } from '../../features/allBooks/allBooksSlice';
import AppNavBar from '../../components/AppNavBar';

const BookDetail = () => {
    const { isbn13 } = useParams();
    const {book, isLoading} = useSelector((store) => store.allBooks);
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    
    console.log(book);
  
  
    useEffect(() => {
      setTimeout(() => {
            dispatch(getBook(isbn13))    
      }, 2000);
      
    }, [])


  return (
    <>
    <AppNavBar/>
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/landing")}>
          <FaArrowLeft size = {22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src = {book?.thumbnail} alt = "cover img" />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{book?.title}</span>
            </div>
            <div className='book-details-item description'>
              <span>{book?.categories[0]}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Author: </span>
              <span className='text-italic'>{book?.authors[0]}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Published Year: </span>
              <span className='text-italic'>{book?.publishedYear}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Description: </span>
              <span>{book?.description}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default BookDetail