import React from 'react'
import Templete from '../components/Templete'
import community from '../assets/community.png'
const Signup = ({isSetLoggedIn}) => {
  return (
    <div>
      <Templete
      title="Join the millions learning to code with Shiksha for free"
      desc1="Build skills for today,tommorrow, and beyond."
          desc2="Education to future-proof your career."
          image={community}
          formtype="signup"
          isSetLoggedIn={isSetLoggedIn}
      />
    </div>
  )
}

export default Signup