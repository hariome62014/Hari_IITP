import React from 'react';
import './Tempelete.css'
import Loginform from './Loginform';
import Signupform from './Signupform';
import {FcGoogle} from 'react-icons/fc'

const Template = ({ title, desc1, desc2, image, formtype, isSetLoggedIn }) => {
    return (
        <div className='template-container'>
            {/* Left Section */}
            <div className='left-section'>
                <h1>{title}</h1>
                <p>
                    <span className='span1'>{desc1}</span>
                   <br/> <span className='span2'>{desc2}</span>
                </p>
                <div className='form-container'>
                    {formtype === "signup" ? (
                        <Signupform isSetLoggedIn={isSetLoggedIn} />
                    ) : (
                        <Loginform isSetLoggedIn={isSetLoggedIn} />
                    )}
                </div>
                <div className='or-divider'>
                    <div className='left-dash'></div>
                    <p>OR</p>
                    <div className='right-dash'></div>
                </div>

                <button className='google-signup-btn'>
                    <FcGoogle className='google-font'/>
                    <p>Sign Up with Google</p>
                </button>
            </div>
            {/* Right Section */}
            <div className='right-section'>
                <img src='frame.jpg' width={450} height={350} loading='lazy' alt='Frame' className='img1' />
                <img src={image} width={450} height={350} loading='lazy' alt='Content' className='img2'  />
            </div>
        </div>
    );
};

export default Template;
