import React from 'react';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../../Components/Context/user-context.jsx';
import './header-component.scss';

function Header(){
    const { isSignIn, isLogIn } = useContext(UserContext);

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/'>
                        <img className='ps-3 pt-2' src="../../../Images/homepage-icon.png" alt="Homepage Icon" />
                    </Link>
                </div>
                    {
                        (isSignIn === true || isLogIn === true) ?
                                <div></div>
                        :
                            <div className='col-6 text-center pt-3'>
                                <input className='preferences-input text-center' type="text" placeholder='Search whatever you want' />
                            </div>
                    }
                {console.log(isSignIn)}
                <div className='col text-center pt-3'>
                    <Link className='configurationLinks pe-5 text-dark' to='/register'>Sign In</Link>
                    <Link className='configurationLinks text-dark' to='/login'>Log In</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;