import './login-component.scss';

function LogIn(){
    return(
        <div>
            <form method='get' action="">
                <input type="text" name='e-mail' aria-label='E-mail' placeholder='Coloque o seu e-mail' maxLength='30' required />

                <label htmlFor="loginPassword"></label>
                <input type="password" name='loginPassword' placeholder='Coloque a sua password' minLength='3' maxLength='30' required />

                <div>
                    <label htmlFor="loginCheckBox">
                        <input type="checkbox" name='loginCheckBox' aria-label='loginCheckBox' />Guardar os meus dados
                    </label>
                </div>
                <button type='submit'>Entrar</button>
            </form>
        </div>
    )
}

export default LogIn;