import React from 'react';
import './Navbar.css';
import Login from '../pages/Login';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Signup from '../pages/Signup';
import shikshasync from '../assets/shikshasync.png';
import Home from '../pages/Home';

const Navbar = (props) => {
    const isLoggedIn = props.isLoggedIn;
    const isSetLoggedIn = props.isSetLoggedIn;

    return (
        <div className='nav-container'>
 <div className='inner-cont'>
            {/* Left Nav */}
            <Link to='/' className='left-nav'>
                <img src={shikshasync} width={30} height={38} loading='lazy' alt='Shiksha Logo' />
                <h1>Shiksha</h1>
            </Link>

            {/* Mid Nav */}
            <nav>
                <ul className='mid-nav'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>

            {/* Right Nav */}
            <div className='right-nav'>
                {!isLoggedIn && (
                    <Link to="/Login">
                        <button onClick={() => <Login isSetLoggedIn={isSetLoggedIn} />}>Login</button>
                    </Link>
                )}
                {!isLoggedIn && (
                    <Link to="/Signup">
                        <button onClick={() => <Signup />}>Signup</button>
                    </Link>
                )}
                {isLoggedIn && (
                    <Link to="/Dashboard">
                        <button>Dashboard</button>
                    </Link>
                )}
                {isLoggedIn && (
                    <Link to="/">
                        <button onClick={() => {
                            isSetLoggedIn(false);
                            toast.success("Logged Out");
                          

                        }}>Logout</button>
                    </Link>
                )}
            </div>
            </div>
        </div>
    );
};

export default Navbar;
