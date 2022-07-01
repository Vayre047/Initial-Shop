import React from 'react';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../../Components/Context/user-context.jsx';
import './header-component.scss';
import NavBar from './NavBar/navbar-component.jsx';

function Header(){
    /*
    const { isSignIn, isLogIn } = useContext(UserContext);
    
    const isLoggedIn = document.getElementById("isLoggedIn");
    const isSignedIn = document.getElementById("isSignedIn");

    isLoggedIn === true || isSignedIn === true ? 
    */

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/'>
                        <img className='ps-3 pt-2' src="../../../Images/homepage-icon.png" alt="Homepage Icon" />
                    </Link>
                </div>
                    <div className='col-6 text-center pt-3'>
                        <input className='preferences-input text-center' type="text" placeholder='Search whatever you want' />
                    </div>
                <div className='col text-center pt-3'>
                    <Link id='isLoggedIn' className='configurationLinks pe-5 text-dark' to='/register'>Sign In</Link>
                    <Link id='isSignedIn' className='configurationLinks text-dark' to='/login'>Log In</Link>
                </div>
            </div>
            <NavBar />
        </div>
    )
}

export default Header;