import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './bookInfoPage.scss';
import { Button, Stack } from '@chakra-ui/react';
import { getUserFromLocalStorage } from '../../utils/localStorage';

const BookInfoPage = () => {
  const user = getUserFromLocalStorage();
  const { isbn13 } = useParams();
  const [bookInfo, setBookInfo] = useState(null);

  useEffect(() => {
    const fetchBookInfo = async () => {
      try {
        const response = await fetch(`http://localhost:8080/book/search/isbn/${isbn13}`);
        const data = await response.json();
        setBookInfo(data);
      } catch (error) {
        console.error('Error fetching book information:', error);
      }
    };

    fetchBookInfo();
  }, [isbn13]);

  const handleAddToList = async (listId) => {
    try {
      const response = await fetch(`http://localhost:8080/list/add/${user.id}/${isbn13}/${listId}`);
      if (response.ok) {
        console.log('Book added to list successfully');
        // Perform any additional actions upon successful addition to the list
      } else {
        console.error('Error adding book to list:', response.status);
      }
    } catch (error) {
      console.error('Error adding book to list:', error);
    }
  };

  return (
    <>
    <div className="bookInfoPage">
      {bookInfo ? (
        <>
          <div className="bookCoverContainer">
            <img src={bookInfo.thumbnail} alt={bookInfo.title} className="bookCover" />
          </div>
          <div className="bookDetailsContainer">
            <h1 className="bookTitle">{bookInfo.title}</h1>
            <div className="bookInfo">
              <div className="bookDetail">
                <span className="detailLabel">ISBN-13:</span> {bookInfo.isbn13}
              </div>
              <div className="bookDetail">
                <span className="detailLabel">ISBN-10:</span> {bookInfo.isbn10}
              </div>
              <div className="bookDetail">
                <span className="detailLabel">SubTitle:</span> {bookInfo.subTitle}
              </div>
              <div className="bookDetail">
                <span className="detailLabel">Authors:</span> {bookInfo.authors.join(', ')}
              </div>
              <div className="bookDetail">
                <span className="detailLabel">Categories:</span> {bookInfo.categories.join(', ')}
              </div>
              <div className="bookDetail">
                <span className="detailLabel">Description:</span> {bookInfo.description}
              </div>
              <div className="bookDetail">
                <span className="detailLabel">Published Year:</span> {bookInfo.publishedYear}
              </div>
              <div className="bookDetail">
                <span className="detailLabel">Average Rating:</span> {bookInfo.averageRating}
              </div>
              <div className="bookDetail">
                <span className="detailLabel">Copies:</span> {bookInfo.copies}
              </div>
              <div className="bookDetail">
                <span className="detailLabel">Item Status:</span> {bookInfo.ItemStatus}
              </div>
            </div>
            <div className="buttonsContainer">
              
            <Stack direction='row' spacing={4}>
            <Button
            size='md'
            height='48px'
            width='200px'
            border='2px'
            borderColor='green.500' 
            onClick={() => handleAddToList(0)}
            >
              Add to Reading List
              </Button>
            <Button
            size='md'
            height='48px'
            width='200px'
            border='2px'
            borderColor='blue.500' 
            onClick={() => handleAddToList(1)}
            >
              Add to Read List
            </Button>
            <Button
            size='md'
            height='48px'
            width='200px'
            border='2px'
            borderColor='pink.500' 
            onClick={() => handleAddToList(2)}
            >
              Add to Plan to Read List
            </Button>
            </Stack>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
    </>
  );
};

export default BookInfoPage;
