import { useContext, useEffect } from 'react';
import { UserContext } from '../../Components/Context/user-context.jsx';
import './login-component.scss';

function LogIn(){
    /*
    const { setIsLogIn } = useContext(UserContext);

    useEffect(() =>{
        setIsLogIn(true);
    });
    */


    return(
        <div >
            <form className='text-center registerForm' method='get' action="">
                <div className='form-group pt-3'>
                    <label htmlFor="loginEmail"></label>
                    <input className='border-info inputDetailconfiguration' type="text" name='e-mail' aria-label='E-mail' placeholder='Coloque o seu e-mail' maxLength='30' required />
                </div>
                <div className='form-group pt-4 pb-2'>
                    <label htmlFor="loginPassword"></label>
                    <input className='border-info inputDetailconfiguration' type="password" name='loginPassword' placeholder='Coloque a sua password' minLength='3' maxLength='30' required />
                </div>
                <div className='form-group pt-3'>
                    <label htmlFor="loginCheckBox">
                        <input type="checkbox" name='loginCheckBox' aria-label='loginCheckBox' />Guardar os meus dados
                    </label>
                </div>
                <div className='pt-3'>
                    <button className='btn btn-secondary' type='submit'>Entrar</button>
                </div>
            </form>
        </div>
    )
}

export default LogIn;