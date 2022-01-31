import React from 'react';
import { Link } from 'react-router-dom';

// import './Navigation.scss';

const Navigation = () => {
    return (
        <div className="navigation">
            <div className='navigation__logo'>
                <span>&#60;🥞&#62;</span>
            </div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <Link className="navigation__link" to="/">
                            Home
                        </Link>
                    </li>
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
                </ul>
            </nav>
      </div>
    )
};

export default Navigation;