import { useContext, useEffect } from 'react';
import { UserContext } from '../../Context/user-context.jsx';
import './login-component.scss';

function LogIn(){
    
    const { setIsLogIn } = useContext(UserContext);
    const onSubmit = (event) => {
        setIsLogIn(true);
    }

    return(
        <div>
            <form onSubmit={onSubmit} className='text-center registerForm' >
                <div className='form-group pt-3'>
                    <label htmlFor="loginEmail"></label>
                    <input className='border-info inputDetailconfiguration' 
                    type="text"
                    name='e-mail'
                    aria-label='E-mail'
                        placeholder='Type your e-mail'
                    minLength='3'
                    maxLength='30'
                    required />
                </div>
                <div className='form-group pt-3'>
                    <label htmlFor="loginPassword"></label>
                    <input className='border-info inputDetailconfiguration' type='password'
                    name='password'
                    aria-label='password'
                    placeholder='Type your password'
                    minLength='3'
                    maxLength='20'
                    required 
                    />
                </div>
                <div className='form-group pt-3
                '>
                    <label htmlFor="loginCheckBox">
                        <input type="checkbox" name='loginCheckBox' aria-label='loginCheckBox' />Remember me
                    </label>
                </div>
                <div className='pt-3'>
                    <button className='btn btn-secondary' type='submit'>Enter</button>
                </div>
            </form>
        </div>
    )
}

export default LogIn;