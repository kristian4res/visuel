import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegistrationForm = ({ userLoggedIn }) => {
    const API_BASE = "https://visuel-api-en.herokuapp.com/";

    const navigate = useNavigate();
    
    const [errorText, setErrorText] = useState({});
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onNameChange = (event) => {
        setName(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    }

    const postData = async () => {
        const response = await fetch(`${API_BASE}register`, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })

        return response.json();
    }

    const onSubmitRegistrationDetails = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password.valueOf() !== confirmPassword.valueOf()) {
            setErrorText({passwordError: 'Passwords do not match'});
            return null;
        }

        const dataResponse = await postData();

        if (dataResponse) {
            if (!userLoggedIn && dataResponse.success) {
                // Redirect to login
                navigate(`/login`);
            }
            else {
                // Set error and reload
                setErrorText(dataResponse);
                navigate(`/register`);
            }
        }
        else {
            return "No data received back";
        }
    };

    return (
        <form className="form" onSubmit={onSubmitRegistrationDetails}>
            <div className="form__register">
                <div className='heading__container'>
                    <h2 className="heading__text heading__text--main">
                        Register
                    </h2>
                </div>
                <div className="form__group">
                    <label className="form__label" htmlFor="name">Name</label>
                    <input className="form__input" onChange={onNameChange} value={name} type="text" name='name' placeholder='Enter name' required />
                    <span className="form__error-text" style={{ 'display': `${errorText.length !== 0 ? 'inline-block' : 'none'}`}}>{errorText ? errorText.nameError : ''}</span>
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
                <div className="form__group">
                    <label className="form__label" htmlFor="confirmPassword">Confirm Password</label>
                    <input className="form__input" onChange={onConfirmPasswordChange} value={confirmPassword} type="password" name='confirmPassword' placeholder='Confirm password' required />
                </div>
                <span className="form__error-text" style={{ 'display': `${errorText.length !== 0 ? 'inline-block' : 'none'}`}}>{errorText ? errorText.error : ''}</span>
                <div className="form__group form__group--btn">
                    <button className="btn btn--colored-single" type="submit">Register</button>
                </div>
            </div>
            <div className="form-options">
                <Link className="form-options__link" to="/login">Already have an account?</Link>
            </div>
        </form>
    );
};

export default RegistrationForm;