import React from 'react';

const LoginForm = () => {
  return (
      <div className="form">
          <form action="#" className="form__sign-in">
                <div style={{ 'margin-bottom': '2rem'}}>
                    <h2 className="header-text--main">
                        Login
                    </h2>
                </div>
                <div className="form__group">
                    <input className="form__input" type="email" name='email' placeholder='Enter email' />
                    <label className="form__label" htmlFor="email">Email Address</label>
                </div>
                <div className="form__group">
                    <input className="form__input" type="password" name='password' placeholder='Enter password' />
                    <label className="form__label" htmlFor="email">Password</label>
                </div>
                <div className="form__group">
                    <button className="btn" type="submit">Sign in</button>
                </div>
          </form>
      </div>
  );
};

export default LoginForm;
