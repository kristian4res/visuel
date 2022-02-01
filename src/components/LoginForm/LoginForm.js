import React from 'react';

const LoginForm = () => {
  return (
    <main className="food-detector food-detector__login">
      <div className="form">
          <form action="#" className="form__login">
                <div className='heading__container'>
                    <h2 className="heading__text heading__text--main">
                        Login
                    </h2>
                </div>
                <div className="form__group">
                    <input className="form__input" type="email" name='email' placeholder='Enter email' />
                    <label className="form__label" htmlFor="email">Email Address</label>
                </div>
                <div className="form__group">
                    <input className="form__input" type="password" name='password' placeholder='Enter password' />
                    <label className="form__label" htmlFor="password">Password</label>
                </div>
                <div className="form__group form__group--btn">
                    <button className="btn btn--colored-single" type="submit">Sign in</button>
                </div>
          </form>
      </div>
    </main>
  );
};

export default LoginForm;
