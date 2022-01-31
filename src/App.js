import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import FoodDetector from './pages/food-detector/food-detector.component';
import LoginForm from './components/LoginForm/LoginForm';
import ParticleBackdrop from './components/ParticleBackdrop/ParticleBackdrop';

import './App.scss';

function App() {
  return (
    <div className='app'>
      {/* <ParticleBackdrop /> */}
      <Navigation />  
      <Routes>
        <Route exact path="/" element={<FoodDetector />} />
        <Route exact path="/register" element={<LoginForm />} />
        <Route exact path="/login" element={<LoginForm />} />
      </Routes>
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