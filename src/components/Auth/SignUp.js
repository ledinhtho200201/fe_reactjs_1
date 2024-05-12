import { useState } from 'react';
import './SignUp.scss'
import { postRegister } from '../../services/apiServices';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa";



const SignUp = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [showHidePassword, setShowHidePassword] = useState(false);
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSignUp = async () => {
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
        // submit apis
        let data = await postRegister(email, password, username)
        console.log(">>> check data: ", data)
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate("/login");
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
    }

    return (
        <div className='signup-container'>
            <div className='header '>
                <span>Already have an account?</span>
                <button onClick={() => { navigate("/login") }}>Login</button>
            </div>
            <div className='title'>
                Pildo barkery
            </div>
            <div className='welcome col-4 mx-auto'>
                Start your journey?
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email (*)</label>
                    <input type={'email'}
                        className='form-control'
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='form-group pass-input'>
                    <label>Password (*)</label>
                    <input type={
                        showHidePassword ? "text" : "password"
                    }
                        className='form-control'
                        value={password}
                        required

                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className='show-hide-pass' onClick={() => setShowHidePassword(!showHidePassword)}>
                        {showHidePassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                <div className='form-group'>
                    <label>Username</label>
                    <input type={'text'}
                        className='form-control'
                        value={username}
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <button className='btn-submit' onClick={() => handleSignUp()}>
                        Create my free account
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

export default SignUp;