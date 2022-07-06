import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import './header-component.scss';
import NavBar from './NavBar/navbar-component.jsx';
import { UserContext } from '../../Context/user-context';

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
                    (isLogIn === true || isSignIn === true) ? <div></div> : <div className='col-6 text-center pt-3'>
                        <input className='preferences-input text-center' type="text" placeholder='Search whatever you want' />
                    </div>
                }
                <div className='col text-end pt-3'>
                    <Link id='isLoggedIn' className='configurationLinks pe-5 text-dark' to='/register'>Sign In</Link>
                    <Link id='isSignedIn' className='configurationLinks text-dark' to='/login'>Log In</Link>
                </div>
            </div>
            <NavBar />
        </div>
    )
}

export default Header;