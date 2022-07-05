import { useContext, useEffect } from 'react';
import { UserContext } from '../../Context/user-context.jsx';
import './register-component.scss';

function Register(){
    /*
    const { setCurrentUser, setSignIn } = useContext(UserContext);
    useEffect(() => {        
        setSignIn(true);
    });
    */


    return(
        <form onSubmit={onsubmit} className='text-center pt-2'>
            <div className='pt-3 form-group'>
                <label htmlFor="firstName"></label>
                <input className='border-info inputRegisterInput' type="text" placeholder="Digite o seu nome" required/>
            </div>
            <div className='pt-3 form-group'>
                <label htmlFor="lastName"></label>
                <input className='border-info inputRegisterInput' type="text" placeholder="Digite o seu apelido" required/>
            </div>
            <div className='pt-3 form-group'>
                <label htmlFor="email"></label>
                <input className='border-info inputRegisterInput' type="email" placeholder="Digite o seu e-mail" required/>
            </div>
            <div className='pt-3 form-group'>
                <label htmlFor="password"></label>
                <input className='border-info inputRegisterInput' type="password" placeholder="Digite a sua password" required/>
            </div>
            <div className='pt-3 form-group'>
                <label htmlFor="repeatPassword"></label>
                <input className='border-info inputRegisterInput' type="password" placeholder="Digite novamente a sua password" required/>
            </div>
            <div className='pt-3 form-group'>
                <label htmlFor="burnDate"></label>
                <input className='border-info inputRegisterInput' type="date" required/>
            </div>
            <div className='pt-3'>
                <button className='btn btn-secondary' type='submit'>Sign In</button>
            </div>
        </form>
    )
}

export default Register;