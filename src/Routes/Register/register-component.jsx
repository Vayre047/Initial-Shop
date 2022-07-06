import { useContext } from 'react';
import { UserContext } from '../../Context/user-context.jsx';
import './register-component.scss';

function Register(){

    const { setIsSignIn } = useContext(UserContext);
    const onSubmit = (event) => {
        event.preventDefault();
        setIsSignIn(true);
    }

    return(
        <form onSubmit={onSubmit} className='text-center pt-2'>
            <div className='pt-3 form-group'>
                <label htmlFor="firstName"></label>
                <input
                className='border-info inputRegisterInput'
                type="text"
                placeholder="Digite o seu nome"
                name='firstName'
                required
                />
            </div>
            <div className='pt-3 form-group'>
                <label htmlFor="lastName"></label>
                <input 
                className='border-info inputRegisterInput'
                type="text" 
                placeholder="Digite o seu apelido"
                name='lastName' 
                required
                />
            </div>
            <div className='pt-3 form-group'>
                <label htmlFor="bornDate"></label>
                <input
                className='border-info inputRegisterInput'
                type="date"
                name='bornDate'
                required
                />
            </div>
            <div className='pt-3 form-group'>
                <label htmlFor="phoneNumber"></label>
                <input
                className='border-info inputRegisterInput'
                type="tel"
                placeholder='Digite o seu contacto'
                name='phoneNumber'
                required
                />
            </div>
            <div className='pt-3 form-group'>
                <label htmlFor="adress"></label>
                <input
                    className='border-info inputRegisterInput'
                    type="text"
                    placeholder='Digite a sua morada'
                    name='adress'
                    required
                />
            </div>
            <div className='pt-3 form-group'>
                <label htmlFor="country"></label>
                <input
                    className='border-info inputRegisterInput'
                    type="country"
                    placeholder='Digite a sua nacionalidade'
                    name='country'
                    required
                />
            </div>
            <div className='pt-3 form-group'>
                <label htmlFor="loginName"></label>
                <input
                    className='border-info inputRegisterInput'
                    type="text"
                    placeholder='Digite o seu nome de LogIn'
                    name='logInName'
                    required
                />
            </div>
            <div className='pt-3 form-group'>
                <label htmlFor="email"></label>
                <input 
                className='border-info inputRegisterInput' 
                type="email" 
                placeholder="Digite o seu e-mail" 
                name='email'
                required
                />
            </div>
            <div className='pt-3 form-group'>
                <label htmlFor="password"></label>
                <input 
                className='border-info inputRegisterInput' 
                type="password" 
                placeholder="Digite a sua password"
                name='password' 
                required
                />
            </div>
            <div className='pt-3 form-group'>
                <label htmlFor="repeatPassword"></label>
                <input 
                className='border-info inputRegisterInput' 
                type="password" 
                placeholder="Digite novamente a sua password" 
                name='repeatPassword'
                required
                />
            </div>
            <div className='pt-3'>
                <button className='btn btn-secondary' type='submit'>Sign In</button>
            </div>
        </form>
    )
}

export default Register;