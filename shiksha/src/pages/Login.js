import React from 'react'
import Templete from '../components/Templete'
import  welcomeforlogin from '../assets/welcomeforlogin.png'

const Login = ({isSetLoggedIn}) => {
  return (
    <div>
        <Templete
          title="Welcome Back"
          desc1="Build skills for today,tommorrow, and beyond."
          desc2="Education to future-proof your career."
          image={welcomeforlogin}
          formtype="Login"
          isSetLoggedIn={isSetLoggedIn}
        >
            
        </Templete>
    </div>
  )
}

export default Login