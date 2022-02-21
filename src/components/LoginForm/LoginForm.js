import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const LoginForm = ({ userLoggedIn, setuserLoggedIn, loadUser }) => {
    const API_BASE = "https://visuel-api-en.herokuapp.com/";
    
    const navigate = useNavigate();

    const [errorText, setErrorText] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const postData = async () => {
        const response = await fetch(`${API_BASE}login`, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        return response.json();
    }

    const onSubmitLoginCredentials = async (e) => {
        e.preventDefault();

        const dataResponse = await postData();

        if (dataResponse) {
            if (!userLoggedIn && dataResponse.success) {
                // Set user details and login status
                loadUser(dataResponse.user);
                setuserLoggedIn(true);

                navigate(`/`);
            }
            else {
                // Set error text
                setErrorText(dataResponse);
                // Reset state
                setEmail('');
                setPassword('');

                navigate(`/login`);
            }
        }
        else {
            return "error with submitting login credentials";
        }
    };

  return (
    <form className="form" onSubmit={onSubmitLoginCredentials}>
        <div className="form__login">
            <div className='heading__container'>
                <h2 className="heading__text heading__text--main">
                    Login
                </h2>
            </div>
            <div className="form__group">
                <label className="form__label" htmlFor="email">Email Address</label>
                <input className="form__input" onChange={onEmailChange} value={email} type="email" name='email' placeholder='Enter email' required />
                <span className="form__error-text" style={{ 'display': `${errorText.length !== 0 ? 'inline-block' : 'none'}`}}>{errorText ? errorText.emailError : ''}</span>
            </div>
            <div className="form__group">
                <label className="form__label" htmlFor="password">Password</label>
                <input className="form__input" onChange={onPasswordChange} value={password} type="password" name='password' placeholder='Enter password' required />
                <span className="form__error-text" style={{ 'display': `${errorText.length !== 0 ? 'inline-block' : 'none'}`}}>{errorText ? errorText.error : ''}</span>
            </div>
            <span className="form__error-text" style={{ 'display': `${errorText.length !== 0 ? 'inline-block' : 'none'}`}}>{errorText ? errorText.passwordError : ''}</span>
            <div className="form__group form__group--btn">
                <button className="btn btn--colored-single" type='submit'>Log in</button>
            </div>
        </div>
        <div className="form-options">
            <Link className="form-options__link" to="/register">Don't have an account?</Link>
        </div>
    </form>
  );
};

export default LoginForm;