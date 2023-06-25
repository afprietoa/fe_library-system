import { useState } from "react";
import {FormRow, FormRowSelect} from "../../components"; 
import Wrapper from "../../assets/wrappers/DashboardFormPage.js";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUser } from "../../features/user/userSlice";


const Profile = () => {
  const {isLoading, user} = useSelector((store) =>store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name:user?.name || '',
    nickname:user?.nickname || '',
    email:user?.email || '',
    password:user?.password || '',
    role:user?.role || '',
  });
  const roleList = ['administrator', 'librarian','student','teacher'];

  const onSubmit = (event)=>{
    event.preventDefault();
    const {name, nickname, email, password, role} = userData;
    if(!name || !nickname || !email || !password || !role){
      toast.error('Please fill out all fields.');
      return;
    }
    dispatch(updateUser(userData));
    
  }   

  const handleChange = (event)=>{
    const name = event.target.name;
    const value = event.target.value;

    setUserData({...userData, [name]: value});
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <h3>Profile</h3>
        <div className="form-center">

           <FormRow 
                type='text'
                name='name'
                value={userData.name}
                handleChange={handleChange}
            />
            <FormRow 
            type='email'
            name='email'
            value={userData.email}
            handleChange={handleChange}
        />
           <FormRowSelect 
           labelText='role'
           name='role'
           value={userData.role}
           handleChange={handleChange}
           list={roleList}
         />


            {/*nickname filed*/}
            <FormRow 
                type='text'
                name='nickname'
                value={userData.nickname}
                handleChange={handleChange}
            />

            {/*password filed*/}
            <FormRow 
                type='password'
                name='password'
                value={userData.password}
                handleChange={handleChange}
            />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile