import {FormRow, FormRowSelect} from "../../components"; 
import Wrapper from "../../assets/wrappers/DashboardFormPage.js";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearValues, createUser, editUser, handleChange } from "../../features/user/userSlice";


const AddUser = () => {

  const {
    user,
    name,
    nickname,
    email,
    password,
    role,
    isLoading,
    isEditing,
    editUserId,
  } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const roleList = ['administrator', 'librarian','student','teacher'];
  const handleSubmit = (event) =>{
    event.preventDefault();
    if(!nickname || !password ||  !email || !name){
      toast.error("Please fill out all fields");
      return;
    }
    
    if(isEditing){
      dispatch(editUser({userId: editUserId, user:{ name, nickname, email, password, role}}));
      return;
    }
    dispatch(createUser({ name, nickname, email, password, role}));
  };

  const handleChangeInput = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    dispatch(handleChange({name, value}));
  }

  

  return (
    <Wrapper>
      <form className="form" >
        <h3>{isEditing ? 'edit user' : 'add user'}</h3>
        <div className="form-center">
          {/* position */}
          <FormRow 
                type='text'
                name='name'
                value={name}
                handleChange={handleChangeInput}
            />
            <FormRow 
            type='email'
            name='email'
            value={email}
            handleChange={handleChangeInput}
        />
           <FormRowSelect 
           labelText='role'
           name='role'
           value={role}
           handleChange={handleChangeInput}
           list={roleList}
         />


            {/*nickname filed*/}
            <FormRow 
                type='text'
                name='nickname'
                value={nickname}
                handleChange={handleChangeInput}
            />

            {/*password filed*/}
            <FormRow 
                type='password'
                name='password'
                value={password}
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

export default AddUser