import React from 'react'
import Loginform from './Loginform'
import Signupform from './Signupform'
const Templete = ({title,desc1,desc2,image,formtype,isSetloggedIn}) => {
  return (
    <div>
      <div>
     <h1>{title}</h1>
     <p>
        <span>{desc1}</span>
        <span>{desc2}</span>
     </p>
     {
        formtype==="signup"?(<Loginform/>):(<Signupform/>)
     }
     <div>
        <div></div>
        <p>OR</p>
        <div></div>
     </div>
     <button>
        <p>Sign Up with Google</p>
     </button>
        </div>  
        <div>
         <img src='frame.jpg' width={558} height={504} loading='lazy'/> 
         <img src='register.jpg' width={558} height={490} loading='lazy'/> 


            </div> 
    </div>
  )
}

export default Templete