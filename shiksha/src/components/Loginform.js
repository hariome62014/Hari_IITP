import React, { useState } from 'react'
import './Loginform.css';
import { Link,useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";

const Loginform = ({isSetLoggedIn}) => {
    const navigate  = useNavigate();

    const [formData ,setFormData]=useState({
email:"",password:""
    })
 
    const[showPassword,setShowPassword]=useState(false);
    function changeHandler(event){
        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value}
        ))
    }
    function submitHandler(event){
        event.preventDefault();
        isSetLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }
  return (
    <div>
    <form onSubmit={submitHandler}
    className='login-form-container'
    >
        <label className='email-label'>
            <p className='email'>
                Email Address<sup>* </sup>
                </p>
                <input
                required
                type='email'
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter email address'
                name='email'
                className='email-input'
                />
               

                
           
        </label>
{/* For password */}
        <label className='password-label'>
            <p className='password'>
                Password<sup>* </sup>
                </p>
                <input
                required
                value={formData.password}
                type={showPassword? "text":("Password")}
                onChange={changeHandler}
                placeholder='Enter Password'
                name='password'
                className='password-input'
                />
               

             <span 
             className='visibility-icon'
             onClick={()=> setShowPassword((prev) => !prev)}>{
                showPassword?<AiOutlineEye/>:<AiOutlineEyeInvisible/>
                }
                </span>   
          <Link to="#" className='forgot'><p className='forgot-text'>Forgot password
          </p>
          </Link>
        </label>
         <button className='signin-btn'>
          
                Sign In
           
         </button>
    </form>
    </div>
  )
}

export default Loginform