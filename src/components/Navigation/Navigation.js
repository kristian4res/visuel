import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ userLoggedIn, setUser, setuserLoggedIn }) => {
    return (
        <div className="navigation">
            <div className='navigation__logo'>
                <Link className="navigation__link navigation__link--logo" to="/">
                    <span>&#60;🥞&#62;</span>
                </Link>
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
                                {/* Hacky Logout => use button + useNavigate instead */}
                                <a href="/" className="navigation__link" onClick={() => {
                                    if (window.confirm("Are you sure you want to log out?")) {
                                        setUser({userDetails: {}});
                                        setuserLoggedIn(false);
                                        window.localStorage.removeItem("visuel-user");
                                    }
                                }}>
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