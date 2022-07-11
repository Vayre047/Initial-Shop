import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import './header-component.scss';
import NavBar from './NavBar/navbar-component.jsx';
import { UserContext } from '../../Context/user-context';
import { Customers } from '../Profile/customers-db.jsx';


function Header(){
    
    const { isSignIn, isLogIn, currentUser } = useContext(UserContext);

    let customer = [];

    function customerDetail(){
        customer = Customers.filter((x) => 
            x.email.includes(currentUser.email)
        );

        console.log(JSON.stringify(customer.first_name));
        return JSON.stringify(customer.first_name);
    }

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
                <div className='col text-end pt-5'>
                {
                    (isLogIn === true || isSignIn === true) ? 
                          
                        <div>
                            <p>Bem Vindo, {customerDetail()}</p>
                        </div>
                        : 
                        <div>
                            <Link id='isLoggedIn' className='configurationLinks pe-5 text-dark' to='/register'>Sign In</Link>
                            <Link id='isSignedIn' className='configurationLinks text-dark' to='/login'>Log In</Link>
                        </div>
                }
                </div>
            </div>
            <NavBar />
        </div>
    )
}

export default Header;