import React, { useState } from 'react';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import FoodDetector from './pages/food-detector/food-detector.component';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
// import ParticleBackdrop from './components/ParticleBackdrop/ParticleBackdrop';

import './App.scss';

function App() {
  const [userLoggedIn, setuserLoggedIn] = useState(false);
  const [user, setUser] = useState({
    user: {
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: ''
    }
  });

  const loadUser = (data) => {
    setUser({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      } 
    })
  }

  return (
    <div className='app'>
      <div className="page-container">
        {/* <ParticleBackdrop /> */}
        <Navigation userLoggedIn={userLoggedIn} setuserLoggedIn={setuserLoggedIn} />
        <main className="food-detector">
          <Routes>
            <Route exact path="/" element={<FoodDetector userLoggedIn={userLoggedIn} user={user} setUser={setUser} />} />
            <Route exact path="/register" element={
              userLoggedIn 
              ? <Navigate to="/" />
              : <RegistrationForm userLoggedIn={userLoggedIn} setuserLoggedIn={setuserLoggedIn} />
            } />
            <Route exact path="/login" element={
              userLoggedIn 
              ? <Navigate to="/" />
              : <LoginForm userLoggedIn={userLoggedIn} setuserLoggedIn={setuserLoggedIn} loadUser={loadUser} />
            } />
          </Routes>
        </main>  
      </div>
      <Footer />
    </div>
  );
}

export default App;