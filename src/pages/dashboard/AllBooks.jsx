import React, { useEffect } from 'react'
import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllBooks } from '../../features/allBooks/allBooksSlice';
import { BookmarkRemoveSharp } from '@mui/icons-material';
import { deleteBook, setEditBook } from '../../features/book/bookSlice';

const lightTheme = createTheme({
    palette: {
        mode:'light'
    }
})

const AllBooks = () => {
  const {books, isLoading} = useSelector((store) => store.allBooks);
  const dispatch = useDispatch(); 

  


  useEffect(() => {
    setTimeout(() => {
          dispatch(getAllBooks())    
    }, 2000);
    
  }, [])

  let bookList = books.map(book => {
    return {
      ...book,
      description: book.description.substring(0, 10) + "...",
      thumbnail: book.thumbnail.substring(0, 10) + "...",
    };
  });


const columns =[
{
    name: "isbn13",
    label: "ISBN13"
},
{
    name: "isbn10",
    label: "ISBN10"
},
{
    name: "title",
    label: "TITLE"
},
{
    name: "subTitle",
    label: "SUBTITLE"
},
{
    name: "authors",
    label: "AUTHORS"
},
{
    name: "categories",
    label: "CATEGORIES"
},
{
    name: "thumbnail",
    label: "THUMBNAIL"
},
{
    name: "description",
    label: "DESCRIPTION"
},
{
    name: "publishedYear",
    label: "PUBLISHED-YEAR"
},
{
    name: "averageRating",
    label: "AVERAGE-RATING"
},
{
    name: "copies",
    label: "COPIES"
},
{
    name: "ItemStatus",
    label: "ITEM-STATUS"
},{
  name: 'actions',
  label: "Actions",
  options: {
      customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <Link
            to='/add-book'
            >            
                <IconButton aria-label="edit" onClick={()=>dispatch(setEditBook({
              editBookId: tableMeta.rowData[0],
              isbn13: tableMeta.rowData[1],
              isbn10: tableMeta.rowData[2],
              title: tableMeta.rowData[3],
              subTitle: tableMeta.rowData[4],
              authors: tableMeta.rowData[5][0],
              categories: tableMeta.rowData[6][0],
              thumbnail: tableMeta.rowData[7],
              description:tableMeta.rowData[8],
              publishedYear:tableMeta.rowData[9],
              averageRating:tableMeta.rowData[10],
              copies:tableMeta.rowData[11],
              ItemStatus:tableMeta.rowData[12],
            }))} >
                    <ModeEditIcon />
                </IconButton>
              </Link>
              <IconButton aria-label="delete" onClick={()=>dispatch(deleteBook(tableMeta.rowData[0]))} >
                  <DeleteIcon />
              </IconButton>


            </>
          )
      }
  }
}];
const options = {
  filterType: 'checkbox',
};

  return (
    <>

    <ThemeProvider theme={lightTheme}>
      <MUIDataTable 
        tittle={"book list"}
        data={bookList}
        columns={columns}
        options={options}
      />
      </ThemeProvider>
    </>
  )
}

export default AllBooks