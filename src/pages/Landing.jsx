import React, { useEffect } from 'react'
import Logo from '../components/Logo'
import Wrapper from '../assets/wrappers/LandingPage'

import { useDispatch, useSelector } from 'react-redux';
import { getAllBooks, getBooksByAuthor, getBooksByGender, getBooksByTitle } from '../features/allBooks/allBooksSlice';
import { addBookToLocalStorage } from '../utils/localStorage';
import { Flex, Spacer } from '@chakra-ui/react';
import AppNavBar from '../components/AppNavBar';
import {Link} from 'react-router-dom';
import { useForm } from '../hooks/userForm'

const Landing = () => {
  const {books, isLoading} = useSelector((store) => store.allBooks);
  const dispatch = useDispatch(); 
  const [values, handleInputChange] = useForm({
    searchByTitle: '',
    searchByAuthor: '',
    searchByGender:'',
   })

   const { searchByTitle, searchByAuthor, searchByGender} = values
  
   const handleSearch = (e) => {
    e.preventDefault();
    setTimeout(() => {
      console.log(searchByGender)
      dispatch(getBooksByGender(searchByGender))  
}, 2000);

console.log(books);

}

  console.log(books);

  //    useEffect(() => {
  //     setTimeout(() => {
  //       dispatch(getBooksByTitle(searchByTitle))    
  // }, 2000);
  //    }, [searchByTitle])

  // useEffect(() => {
  //     setTimeout(() => {
  //       dispatch(getBooksByAuthor(searchByAuthor))    
  // }, 2000);
  //    }, [searchByAuthor])


  useEffect(() => {
    setTimeout(() => {
          dispatch(getAllBooks())    
    }, 3000);
    
  }, [])

  return (
    <Wrapper>
      <AppNavBar/>
      <section class="wrapper">
  <div class="container-wrapper">
      <div class="brand-center">

          <h3 class="title-hero">Welcome,</h3>
            <h3 class="text-hero">It is out pleasure to offer you the best books!</h3>

            <div class="main-search">
                <input name="searchByTitle" id="searchByTitle" class="main-search__type" placeholder='Search by Title' value={searchByTitle} onChange={handleInputChange}/>
                <input name="searchByAuthor" id="searchByAuthor" class="main-search__status" placeholder='Search by Author' value={searchByAuthor} onChange={handleInputChange}/>
          <form action="" class="search-form" id="searchForm" onSubmit={handleSearch}>
                    <input type="text" class="search-form__input" name="searchByGender" id="searchByGender" placeholder='Search by Gender' value={searchByGender} onChange={handleInputChange}/>
                    <button type="submit" class="search-form__button">Find Book</button>
                </form>
            </div>
      </div>
  </div>

</section>
 <section className="container-content">
          
         
  <ul className="cards">
      
        {
          books.map((book) =>(
            <li className="card_" key={book.isbn13} >
              <span className="card__code">🔖 author: <strong>{book.authors[0]}</strong></span>
              <img src={book.thumbnail} className="card__image" alt="" />
              <div className="card__header">
                <div className="card__header-text">
                      <h3 className="card__title">📖 {book.title}</h3>
                      <p className="card_body"><small>{book.categories[0]}</small></p>            
                      
                      <Flex>
                      <span className="card__status">year: {book.publishedYear} </span>
                      <Spacer />
                        <Link 
                        className="btn btn-info" 
                        to={`/book-detail/${book.isbn13}`}
                        onClick={()=>addBookToLocalStorage(book)} 
                        >
                            Detail
                        </Link>
                    </Flex>
                  </div>
              </div>  
              </li>  
          ))
        }
       
    </ul>
</section>

    </Wrapper>
  )
}

export default Landing