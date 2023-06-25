
import { FormRow, FormRowSelect } from '../components';
import {useState, useEffect} from 'react'
import Wrapper from '../assets/wrappers/RegisterPage'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const initialState = {
    name:'',
    nickname:'',
    email:'',
    password:'',
    role:'',
    isMember: true,
}

const Register = () => {
    const [values, setValues] = useState(initialState);
    const roleList = ['administrator', 'librarian','student','teacher'];
    const {isLoading, user} = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        setValues({...values, [name]:value});

    }
    const onSubmit = ( e) =>{
        e.preventDefault();
        const { name, nickname, email, password, role, isMember } = values;
        console.log(values)
        if(!nickname || !password || (!isMember && !role && !email && !name)){
            toast.error('Please Fill Out All Fields');
            return;
        }
        if(isMember){
            console.log(values)
            dispatch(loginUser({nickname: nickname, password: password}));
        }
        console.log(values)
        dispatch(registerUser({ name, nickname, email, password, role}))
    }
    const toggleMember = ()=>{
        setValues({...values, isMember: !values.isMember});
    }

    useEffect(() => {
      if(user)
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }, [user])
    

  return (
    <Wrapper>
        <form className='form' onSubmit={onSubmit}>
            <h3 >essence</h3>

            <h3>{values.isMember ? 'Login': 'Register'}</h3>

            {/*hide filed*/}
            {!values.isMember && (
              <> 
           <FormRow 
                type='text'
                name='name'
                value={values.name}
                handleChange={handleChange}
            />
            <FormRow 
            type='email'
            name='email'
            value={values.email}
            handleChange={handleChange}
        />
           <FormRowSelect 
           labelText='role'
           name='role'
           value={values.role}
           handleChange={handleChange}
           list={roleList}
         />
         </> 
              )
            }

            {/*nickname filed*/}
            <FormRow 
                type='text'
                name='nickname'
                value={values.nickname}
                handleChange={handleChange}
            />

            {/*password filed*/}
            <FormRow 
                type='password'
                name='password'
                value={values.password}
                handleChange={handleChange}
            />


            <button type="submit" className='btn btn-block' disabled={isLoading}>
                submit
            </button>

            <p>
                {values.isMember ?'Not a member yet?' : 'Already a member?'}
                <button type='button' className='member-btn' onClick={toggleMember}>
                    {values.isMember ?'Register' : 'Login'}
                </button>
            </p>
        </form>
    </Wrapper>
  )
}

export default Register