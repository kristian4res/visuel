import React from 'react';
import { Link } from 'react-router-dom';

// import './Navigation.scss';

const Navigation = ({ userLoggedIn, setuserLoggedIn }) => {
    return (
        <div className="navigation">
            <div className='navigation__logo'>
                <span>&#60;🥞&#62;</span>
            </div>

            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__background">
                <div className="navigation__background--1">
                    &nbsp;
                </div>
            </div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <Link className="navigation__link" to="/">
                            Home
                        </Link>
                    </li>
                    {
                        userLoggedIn 
                        ? (<li className="navigation__item">
                                <a href="#" className="navigation__link" onClick={() => setuserLoggedIn(false)}>
                                    Log Out
                                </a>
                            </li>)
                        : <>
                            <li className="navigation__item">
                                <Link className="navigation__link" to="/login">
                                    Login
                                </Link>
                            </li>
                            <li className="navigation__item">
                                <Link className="navigation__link" to="/register">
                                    Register
                                </Link>
                            </li>
                        </>
                    }                 
                </ul>
            </nav>
      </div>
    )
};

export default Navigation;