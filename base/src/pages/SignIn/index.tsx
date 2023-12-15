import './styles.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

function SignIn() {
    return (
        <div className='container container-sign-in'>
            <div className='sign-in'>
                <img src={logo} alt="logo" />

                <form>
                    <input type='text' placeholder='E-mail' />
                    <input type='password' placeholder='Password' />

                    <span>
                        Não tem cadastro?
                        <Link to="/sign-Up">Clique aqui!</Link>
                    </span>

                    <button className='btn-pink '>Login</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn