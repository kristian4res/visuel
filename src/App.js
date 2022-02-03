import React, { useState } from 'react';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import FoodDetector from './pages/food-detector/food-detector.component';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
// import ParticleBackdrop from './components/ParticleBackdrop/ParticleBackdrop';

import './App.scss';

function App() {
  const [userLoggedIn, setuserLoggedIn] = useState(false);

  return (
    <div className='app'>
      {/* <ParticleBackdrop /> */}
      <Navigation userLoggedIn={userLoggedIn} />
      <main className="food-detector">
        <Routes>
          <Route exact path="/" element={<FoodDetector userLoggedIn={userLoggedIn} />} />
          <Route exact path="/register" element={
            userLoggedIn 
            ? <Navigate to="/" />
            : <RegistrationForm />
          } />
          <Route exact path="/login" element={
            userLoggedIn 
            ? <Navigate to="/" />
            : <LoginForm />
          } />
        </Routes>
      </main>  
      {/* <footer className="footer">
        <div className="footer__logo-box">
          <span>&#60;🥞&#62;</span>
        </div>
        <div className="footer__copyright">
          <p class="footer__copyright">
              Built by <a href="https://github.com/Enigma-cloud" target="__blank" rel="noopener noreferrer" class="footer__link">Kristian Torres</a>.<br/>
          </p>
        </div>
      </footer> */}
    </div>
  );
}

export default App;