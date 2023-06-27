import React, { useEffect } from 'react'
import {UsersContainer, UsersSearch} from '../../components';
import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { getAllIssues } from '../../features/allIssues/allIssuesSlice';
import { deleteIssue, setEditIssue } from '../../features/issue/issueSlice';

const lightTheme = createTheme({
    palette: {
        mode:'light'
    }
})

const AllIssues = () => {
  const {issues, isLoading} = useSelector((store) => store.allIssues);
  const dispatch = useDispatch(); 

  
  console.log(issues);


  useEffect(() => {
    setTimeout(() => {
          dispatch(getAllIssues())    
    }, 2000);
    
  }, [])

const columns =[
{
    name: "id",
    label: "ID"
},
{
    name: "user",
    label: "USER"
},
{
    name: "book",
    label: "BOOK"
},
{
    name: "borrowDate",
    label: "BORROW DATE"
},
{
    name: "dueDate",
    label: "DUE DATE"
},
{
    name: "role",
    label: "ROLE"
},{
  name: 'actions',
  label: "Actions",
  options: {
      customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <Link
            to='/add-issue'
            >            
                <IconButton aria-label="edit" onClick={()=>dispatch(setEditIssue({
              editIssueId: tableMeta.rowData[0],
              user: tableMeta.rowData[1].name,
              book: tableMeta.rowData[2].title,
              borrowDate:tableMeta.rowData[3],
              dueDate:tableMeta.rowData[4]
            }))} >
                    <ModeEditIcon />
                </IconButton>
              </Link>
              <IconButton aria-label="delete" onClick={()=>dispatch(deleteIssue(tableMeta.rowData[0]))} >
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
        tittle={"issue list"}
        data={issues}
        columns={columns}
        options={options}
      />
      </ThemeProvider>
    </>
  )
}

export default AllIssues