import React from 'react';

const RegistrationForm = () => {
  return (
    <main className="food-detector food-detector__registration">
      <div className="form">
          <form action="#" className="form__register">
                <div className='heading-container'>
                    <h2 className="heading__text heading__text--main">
                        Register
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
                <div className="form__group">
                    <input className="form__input" type="password" name='confirmPassword' placeholder='Confirm password' />
                    <label className="form__label" htmlFor="confirmPassword">Confirm Password</label>
                </div>
                <div className="form__group form__group--btn">
                    <button className="btn btn--colored-single" type="submit">Register</button>
                </div>
          </form>
      </div>
    </main>
  );
};

export default RegistrationForm;
