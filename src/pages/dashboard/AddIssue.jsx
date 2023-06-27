import {FormRow, FormRowSelect, FormRowSelect2} from "../../components"; 
import Wrapper from "../../assets/wrappers/DashboardFormPage.js";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearValues, createUser, editUser, handleChange } from "../../features/user/userSlice";
import { createIssue, editIssue } from "../../features/issue/issueSlice";
import { getAllUsers } from "../../features/allUsers/allUsersSlice";
import { getAllBooks } from "../../features/allBooks/allBooksSlice";
import { useEffect } from "react";


const AddIssue = () => {

  const {
    user,
    book,
    borrowDate,
    dueDate,
    isLoading,
    isEditing,
    editIssueId,
  } = useSelector((store) => store.issue);
  const {users} = useSelector((store) => store.allUsers);
  const {books} = useSelector((store) => store.allBooks);


  const dispatch = useDispatch();
  const handleSubmit = (event) =>{
    event.preventDefault();
    if(!user || !book ||  !borrowDate || !dueDate){
      toast.error("Please fill out all fields");
      return;
    }
    
    if(isEditing){
      dispatch(editIssue({issueId: editIssueId, issue:{  user, book, borrowDate, dueDate,}}));
      return;
    }
    dispatch(createIssue({ user, book, borrowDate, dueDate}));
  };

  const handleChangeInput = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    dispatch(handleChange({name, value}));
  }

  useEffect(() => {
    setTimeout(() => {
          dispatch(getAllUsers())   
          dispatch(getAllBooks())    
    }, 2000);
    
  }, [])


  return (
    <Wrapper>
      <form className="form" >
        <h3>{isEditing ? 'edit issue' : 'add issue'}</h3>
        <div className="form-center">

        
        <FormRowSelect2 
        labelText='user'
        name='user'
        value={user}
        handleChange={handleChangeInput}
        property='name'
        list={users}
      />

      <FormRowSelect2 
      labelText='book'
      name='book'
      value={book}
      handleChange={handleChangeInput}
      property='title'
      list={books}
    />

          <FormRow 
                labelText='borrow date'
                type='date'
                name='borrowDate'
                value={borrowDate}
                handleChange={handleChangeInput}
            />


            <FormRow 
            labelText='due date'
            type='date'
            name='dueDate'
            value={dueDate}
            handleChange={handleChangeInput}
        />

          <div className="btn-container">
            <button
              type="button" 
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearValues())}>
              clear
            </button>
            <button
              type="submit" 
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}>
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddIssue