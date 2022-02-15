import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const LoginForm = ({ userLoggedIn, setuserLoggedIn }) => {
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
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        return response.json();
    }

    const onSubmitLoginCredentials = async (e) => {
        e.preventDefault();

        postData().then(
            (serverResponse) => {
                if (!userLoggedIn && serverResponse === "Success") {
                    setErrorText('');
                    setuserLoggedIn(true);
                    navigate(`/`);
                }
                else {
                    setErrorText(serverResponse);
                    navigate(`/login`);
                }
                
                setEmail('');
                setPassword('');
            }
        );
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
                <span className="form__error-text" style={{ 'display': `${errorText.length !== 0 ? 'inline-block' : 'none'}`}}>{errorText ? errorText.passwordError : ''}</span>
            </div>
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