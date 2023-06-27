import React, { useEffect } from 'react'
import {UsersContainer, UsersSearch} from '../../components';
import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { getAllUsers } from '../../features/allUsers/allUsersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, setEditUser } from '../../features/user/userSlice';
import { Link } from 'react-router-dom';

const lightTheme = createTheme({
    palette: {
        mode:'light'
    }
})

const AllUsers = () => {
  const {users, isLoading} = useSelector((store) => store.allUsers);
  const dispatch = useDispatch(); 

  
  console.log(users);


  useEffect(() => {
    setTimeout(() => {
          dispatch(getAllUsers())    
    }, 2000);
    
  }, [])

const columns =[
{
    name: "id",
    label: "ID"
},
{
    name: "name",
    label: "NAME"
},
{
    name: "nickname",
    label: "NICKNAME"
},
{
    name: "email",
    label: "EMAIL"
},
{
    name: "password",
    label: "PASSWORD"
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
            to='/add-user'
            >            
                <IconButton aria-label="edit" onClick={()=>dispatch(setEditUser({
              editUserId: tableMeta.rowData[0],
              name: tableMeta.rowData[1],
              nickname: tableMeta.rowData[2],
              email:tableMeta.rowData[3],
              password:tableMeta.rowData[4],
              role: tableMeta.rowData[5],
            }))} >
                    <ModeEditIcon />
                </IconButton>
              </Link>
              <IconButton aria-label="delete" onClick={()=>dispatch(deleteUser(tableMeta.rowData[0]))} >
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
        tittle={"user list"}
        data={users}
        columns={columns}
        options={options}
      />
      </ThemeProvider>
    </>
  )
}

export default AllUsers