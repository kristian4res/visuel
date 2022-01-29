import React from 'react';

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
                        <a href="#" className="navigation__link">
                            Home
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">
                            Login
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">
                            Register
                        </a>
                    </li>
                </ul>
            </nav>
      </div>
    )
};

export default Navigation;