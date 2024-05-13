import React, { useState } from 'react'
// import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link } from 'react-router-dom';
const Signupform = () => {
const [isStudent,setIsStudent]=useState(true);
const [formData,setFormData]=useState({firstname:"",lastname:"",email:"",crpassword:"",cfpassword:""});
const [showPassword,setShowPassword]=useState(false);
function changeHandler(event){
  setFormData((prevData)=>({...prevData,
    [event.target.name]:event.target.value}
  ))
}
console.log(formData.lastname);
  return (
    <div>
     
      <Link>
      <button onClick={()=>{
        setIsStudent(true);
      }}>Student</button>
      <button onClick={()=>{
        setIsStudent(false);
      }}>Instructor</button>
      </Link>

      <form>
        {
          isStudent &&
        <label>
       <p>First name<sup>*</sup></p>
       <input
       type='text'
       value={formData.firstname}
       name='firstname'
       onChange={changeHandler}
       
       ></input>
       <p>Last Name<sup>*</sup></p>
       <input
       type='text'
       value={formData.lastname}
       name='lastname'
       onChange={changeHandler}
       
       ></input>
       <p>Email Address<sup>*</sup></p>
       <input
       type='email'
       value={formData.email}
       name='email'
       onChange={changeHandler}
       
       ></input>
       <p>Create Password <sup>*</sup></p>
       <input
       type={showPassword?'text':'password'}
       value={formData.crpassword}
       name='crpassword'
       onChange={changeHandler}
       
       ></input>
       {/* <span onClick={()=>
        setShowPassword((prev)=> !prev)
       }>{
        showPassword?<AiOutlineEye/> :<AiOutlineEyeInvisible/>
        }</span> */}
<p>Confirm Password <sup>*</sup></p>
<input
       type={showPassword?'text':'password'}
       value={formData.cfpassword}
       name='cfpassword'
       onChange={changeHandler}
       
       ></input>
       {/* <span onClick={()=>
        setShowPassword((prev)=> !prev)
       }>{
        showPassword?<AiOutlineEye/> :<AiOutlineEyeInvisible/>
        }</span> */}
        </label>
        
        }
        {
          !isStudent &&
          <span>
            Instructor
          </span>
        }
        <button>Create Account</button>
       
      </form>

      
    </div>
  )
}

export default Signupform