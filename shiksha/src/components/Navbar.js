import React from 'react'
import './Navbar.css'
import Login from '../pages/Login'
import {toast} from 'react-hot-toast'
import { Link } from 'react-router-dom'
import Signup from '../pages/Signup'
const Navbar = (props) => {
    let isLoggedIn=props.isLoggedIn;
    let isSetLoggedIn=props.isSetLoggedIn
  return (

    <div className='nav-container'>

        {/* left nav */}
<Link to='/' className='left-nav'>
        <img src='shikshasync.png' width={30} height={38} loading='lazy'></img>
        <h1>Shiksha</h1>
        </Link>

       <nav>

        {/* mid nav */}
        <ul className='mid-nav'>
            
                <Link to="/">Home</Link>
           
            
                <Link to="/About">About</Link>
           
            
                <Link to="/Contact">Contact</Link>
           
            
        </ul>
    
   
      
       </nav>
 {/* Right nav */}

 <div className='right-nav'>
    { 
    !isLoggedIn &&
        <Link to="/Login">
            <button onClick={
                <Login/>
            }>Login</button>
        </Link>
    }
     {
    !isLoggedIn &&
        <Link to="/Signup">
            <button onClick={<Signup/>}>Signup</button>
        </Link>
    }
     {
        isLoggedIn &&
        <Link to="/Dashboard">
            <button>Dashboard</button>
        </Link>
    }
     {
        isLoggedIn &&
        <Link to="/Logout">
            <button onClick={()=>{
                isSetLoggedIn(false);
                toast.success("Logged Out");
            }}>Logout</button>
        </Link>
    }
 </div>
    </div>
  )
}

export default Navbar