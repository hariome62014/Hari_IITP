import React, { useState } from 'react'
import {toast} from 'react-hot-toast'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link,useNavigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import './Signupform.css'

const Signupform = ({isSetLoggedIn}) => {
  const navigate=useNavigate();
const [formData,setFormData]=useState({firstname:"",lastname:"",email:"",crpassword:"",cfpassword:""});
const [accountType,setAccountType]=useState('student');

const [showPassword,setShowPassword]=useState({crpassword:false,cfpassword:false});
function changeHandler(event){
  setFormData((prevData)=>({...prevData,
    [event.target.name]:event.target.value}
  ))
}
function togglePasswordVisibility(field) {
  setShowPassword((prev) => ({
    ...prev,
    [field]: !prev[field]
  }));
}
function submitHandler(event){
  event.preventDefault();
  if(formData.cfpassword!==formData.crpassword) {toast.error("Passwords are not same")
    return;
  };
  isSetLoggedIn(true);
  toast.success("Account Created");
        navigate("/dashboard");


}
// console.log(formData.lastname);
  return (
    <div className='signup-container'>
     
     <div className={accountType==='student'?('student-clicked'):('instructor-clicked')}>
         <button onClick={()=> setAccountType('student') } className='student'>Student</button>
      <button onClick={()=>setAccountType('instructor')} className='instructor'>Instructor</button>
      </div>
     
    

      <form onSubmit={submitHandler}
      className='signup-form-container'
      >
        <div className='name'>
        
        <label className='firstname-label'>
          

          
       <p className='firstname'>First Name<sup>*</sup></p>
       {
       
         <input
         className='firstname-input'
         required
         type='text'
         value={formData.firstname}
         name='firstname'
         onChange={changeHandler}
         placeholder='Xyzabc Abc'
         
         >
  
         </input>
       }
      </label>
<label className='lastname-label'>
       <p className='lastname'>Last Name<sup>*</sup></p>
       <input
       className='lastname-input'
        required
       type='text'
       value={formData.lastname}
       name='lastname'
       onChange={changeHandler}
       placeholder='Kumar'
       
       ></input>
</label>
</div>
       <label className='email-label'>
       <p className='email'>Email Address<sup>*</sup></p>
       <input
       className='email-input'
        required
       type='email'
       value={formData.email}
       name='email'
       onChange={changeHandler}
       placeholder="example@gmail.com"
       
       ></input>
       </label>
       <div className='password-container'>
       <label className='password-label'>
       <p className='password'>Create Password <sup>*</sup></p>
       <input
       className='password-input'
        required
       type={showPassword.crpassword?'text':'password'}
       value={formData.crpassword}
       name='crpassword'
       onChange={changeHandler}
       
       ></input>
     
       <span className='visibility-icon' onClick={()=>togglePasswordVisibility("crpassword")}>{
        showPassword.crpassword?<AiOutlineEye/> :<AiOutlineEyeInvisible/>
        }</span>
          </label>
        <label className='password-label'>
<p className='password'>Confirm Password <sup>*</sup></p>
<input
className='password-input'
 required
       type={showPassword.cfpassword?'text':'password'}
       value={formData.cfpassword}
       name='cfpassword'
       onChange={changeHandler}
       
       ></input>
       <span className='visibility-icon' onClick={()=> togglePasswordVisibility('cfpassword')}>{
        showPassword.cfpassword?<AiOutlineEye/> :<AiOutlineEyeInvisible/>
        }</span>
        </label>
       
        </div>
        
        
        <button className='create-account-btn'>Create Account</button>
       
      </form>

      
    </div>
  )
}

export default Signupform