import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="form">
        <div className="form__login">
            <div className='heading__container'>
                <h2 className="heading__text heading__text--main">
                    Login
                </h2>
            </div>
            <div className="form__group">
                <label className="form__label" htmlFor="email">Email Address</label>
                <input className="form__input" type="email" name='email' placeholder='Enter email' />
            </div>
            <div className="form__group">
                <label className="form__label" htmlFor="password">Password</label>
                <input className="form__input" type="password" name='password' placeholder='Enter password' />
            </div>
            <div className="form__group form__group--btn">
                <button className="btn btn--colored-single" type="submit">Sign in</button>
            </div>
        </div>
        <div className="form-options">
            <Link className="form-options__link" to="/register">Don't have an account?</Link>
        </div>
    </div>
  );
};

export default LoginForm;
