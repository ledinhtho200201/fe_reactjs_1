import { useState } from 'react';
import './Login.scss'
import { postLogin } from '../../services/apiServices';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action/userAction';
import { ImSpinner3 } from "react-icons/im";


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleLogin = async () => {
        // validate
        const isValidEmail = validateEmail(email);
        console.log('isValidEmail', isValidEmail)
        if (!isValidEmail) {
            toast.error("Invalid email")
            return;
        }
        if (!password) {
            toast.error("Invalid password ")
            return;
        }
        setIsLoading(true);
        // submit apis
        let data = await postLogin(email, password)
        if (data && data.EC === 0) {
            dispatch(doLogin(data));
            toast.success(data.EM);
            setIsLoading(false);
            navigate("/");
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)
            setIsLoading(false);
        }
    }

    const handleKeyDown = (event) => {
        if (event && event.keyCode === 13) {
            handleLogin();
        }
    }

    return (
        <div className='login-container'>
            <div className='header '>
                <span>Don't have an account yet?</span>
                <button onClick={() => { navigate("/signup") }}>Sign up</button>
            </div>
            <div className='title'>
                Pildo barkery
            </div>
            <div className='welcome col-4 mx-auto'>
                Hello, who's this?
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input type={'email'}
                        className='form-control'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type={'password'}
                        className='form-control'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e)}
                    />
                </div>
                <span className='forgot-password'>Forgot password ?</span>
                <div >
                    <button className='btn btn-submit'
                        // type="button"
                        disabled={isLoading}
                        onClick={() => handleLogin()}>
                        {isLoading === true && <ImSpinner3 className="loader-icon" />}
                        <span>Login</span>
                    </button>
                </div>
                <div className='text-center'>
                    <span className='back' onClick={() => { navigate("/") }}>
                        &#60;&#60;Go back home
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Login;