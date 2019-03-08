import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    const [currentUser, setCurrentUser] = useState(null);
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async history => {
        let data = {
            username: user,
            password,
        };
        axios
            .post(`${API_BASE_URL}/auth/login`, data)
            .then(res => {
                if (res.data.reason) {
                    alert(res.data.message);
                    return "login";
                } else {
                    const token = res.data.authToken;
                    console.log(res.data);
                    localStorage.setItem("jwtToken", token);
                    const decoded = jwt_decode(token);
                    setCurrentUser(decoded);
                    let mytoken = localStorage.getItem("jwtToken");
                    return "dashboard";
                }
            })
            .then(destination => {
                history.push(`/${destination}`);
            });
    };
    return <div className='login-flex'>
        <div className=''>
            <Link to='/' className=''>
                <i className='material-icons left'>keyboard_backspace</i>
                Back to home
            </Link>
            <div className=''>
                <h4>Login below</h4>
                <p className='grey-text text-darken-1'>
                    Don't have an account?{" "}
                    <Link className="register" to='/register'>Register</Link>
                </p>
            </div>
            <form
                className='login-form'
                noValidate
                onSubmit={e => e.preventDefault()}>

                <label className="emailLabel" htmlFor='email'>
                </label>
                <input
                    id='email'
                    type='text'
                    placeholder='Username'
                    onChange={e => setUser(e.target.value)}
                />

                <label className="passwordLabel" htmlFor='password'></label>
                <input
                    id='password'
                    type='password'
                    placeholder='Password'
                    onChange={e =>
                        setPassword(e.target.value)
                    }
                />

                <button
                    onClick={() => loginUser(history)}
                    type='submit'
                    className='login-form-submit-button'>
                    Log In
                    </button>

            </form>
        </div>
    </div>
}