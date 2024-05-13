import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";

const Loginform = () => {
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
  return (
    <div>
    <form>
        <label>
            <p>
                Email Address<sup>* </sup>
                </p>
                <input
                required
                type='email'
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter email id'
                name='email'
                />
               

                
           
        </label>
{/* For password */}
        <label>
            <p>
                Password<sup>* </sup>
                </p>
                <input
                required
                value={formData.password}
                type={showPassword? "text":("Password")}
                onChange={changeHandler}
                placeholder='Enter Password'
                name='password'
                />
               

             {/* <span onClick={()=> setShowPassword((prev) => !prev)}>{
                showPassword?<AiOutlineEye/>:<AiOutlineEyeInvisible/>
                }
                </span>    */}
          <Link to="#"><p>forgot password
          </p>
          </Link>
        </label>
         <button>
          
                Sign In
           
         </button>
    </form>
    </div>
  )
}

export default Loginform