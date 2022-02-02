import React from 'react';
import { Link } from 'react-router-dom';

// import './Navigation.scss';

const Navigation = ({ userLoggedIn }) => {
    return (
        <div className="navigation">
            <div className='navigation__logo'>
                <span>&#60;🥞&#62;</span>
            </div>

            <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__background">&nbsp;</div>

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
                                <a href="#" className="navigation__link" onClick={() => console.log('Logged Out')}>
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