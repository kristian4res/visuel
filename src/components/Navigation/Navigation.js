import React from 'react';

import './Navigation.scss';

const Navigation = () => {
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__background">&nbsp;</div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">
                            <span className="navigation__item-number">01</span>
                            Home
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">
                            <span className="navigation__item-number">02</span>
                            About Visuel
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">
                            <span className="navigation__item-number">03</span>
                            Contacts
                        </a>
                    </li>
                    <li className="navigation__item navigation__item--group">
                        <a href="#" className="navigation__link-duo">
                            Login
                        </a>
                        <a href="#" className="navigation__link-duo">
                            Register
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Navigation;