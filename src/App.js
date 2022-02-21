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

import './App.scss';

function App() {
  const [userLoggedIn, setuserLoggedIn] = useState(false);
  const [user, setUser] = useState({
    userDetails: {}
  });

  useEffect(() => {
    try  {
      const userSession = JSON.parse(window.localStorage.getItem("visuel-user"));
      if (Object.keys(userSession).length !== 0) {
        loadUser(userSession);
        setuserLoggedIn(true);
      }
      else {
        return "No user in session";
      }
    }
    catch (err) {
      return "Unexpected error occured while trying to find user session";
    }
  }, [setUser]);

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      window.localStorage.setItem("visuel-user", JSON.stringify(user.userDetails));
    }
    else {
      return "No user details set";
    }
  }, [user]);

  const loadUser = (userData) => {
    setUser({
      userDetails: {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        image_entries: userData.entries,
        joined: userData.joined
      }
    });
  }

  return (
    <div className='app'>
      <div className="page-container">
        <Navigation userLoggedIn={userLoggedIn} setUser={setUser} setuserLoggedIn={setuserLoggedIn} />
        <main className="food-detector">
          <Routes>
            <Route exact path="/" element={<FoodDetector userLoggedIn={userLoggedIn} userDetails={user.userDetails} setUser={setUser} />} />
            <Route exact path="/register" element={
              userLoggedIn 
              ? <Navigate to="/" />
              : <RegistrationForm userLoggedIn={userLoggedIn} />
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