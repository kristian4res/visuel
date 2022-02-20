import React, { useEffect, useState } from 'react';
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
    userDetails: {
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: ''
    }
  });

  useEffect(() => {
    try  {
      const userDetails = JSON.parse(window.localStorage.getItem("visuel-user"));
      setUser({userDetails: userDetails});
    }
    catch (err) {
      return "No user in session";
    }
  }, [setUser]);

  useEffect(() => {
    window.localStorage.setItem("visuel-user", JSON.stringify(user.userDetails));
  }, [user]);

  return (
    <div className='app'>
      <div className="page-container">
        {/* <ParticleBackdrop /> */}
        <Navigation userLoggedIn={userLoggedIn} setUser={setUser} setuserLoggedIn={setuserLoggedIn} />
        <main className="food-detector">
          <Routes>
            <Route exact path="/" element={<FoodDetector userLoggedIn={userLoggedIn} userDetails={user.userDetails} setUser={setUser} />} />
            <Route exact path="/register" element={
              userLoggedIn 
              ? <Navigate to="/" />
              : <RegistrationForm userLoggedIn={userLoggedIn} setuserLoggedIn={setuserLoggedIn} />
            } />
            <Route exact path="/login" element={
              userLoggedIn 
              ? <Navigate to="/" />
              : <LoginForm userLoggedIn={userLoggedIn} setuserLoggedIn={setuserLoggedIn} setUser={setUser} />
            } />
          </Routes>
        </main>  
      </div>
      <Footer />
    </div>
  );
}

export default App;