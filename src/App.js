import React, { useState, useEffect } from 'react';
// import Logo from './components/Logo/Logo';
// import Navigation from './components/Navigation/Navigation';
// import Rank from './components/Rank/Rank';
// import Header from './components/Navigation/Navigation';
// import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
// import ImageDisplay from './components/ImageDisplay/ImageDisplay';
// import ParticleBackdrop from './components/ParticleBackdrop/ParticleBackdrop';

import './App.scss';

// Clarifai API -REMOVE LATER
import Clarifai from 'clarifai';

const clarifaiApp = new Clarifai.App({
 apiKey: '922a077a1cfc441db5a1a3ec2e2b93e0'
});

function App() {
  const [input, setInput] = useState('');
  const [url, setUrl] = useState('');

  // useEffect(() => {
  //   callClarifaiAPI();
  // }, [url]);

  const callClarifaiAPI = () => {
      clarifaiApp.models
        .predict(
          Clarifai.FOOD_MODEL,
          url  
        )
        .then(
          function(response) {
            console.log(response);
          },
          function(err) {
            console.log(err);
          }
        );
  }

  const onInputChange = (event) => {
    setInput(event.target.value);
  }

  const onUrlSubmit = (e) => {
    e.preventDefault();
    setUrl(input);
    setInput('');
  }

  return (
    <div className='app'>
      {/* <ParticleBackdrop /> */}
      {/* <Navigation /> */}
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
                        register
                    </a>
                </li>
            </ul>
        </nav>
      </div>
      <main className='food-detector'>
        <section className='food-detector__image-form'>
          <header className='food-detector__header'>
            <h1 className='food-detector__header-text--main'>Visuel</h1>
            <h4 className="food-detector__header-text--sub">A food image recognition app</h4>
          </header>
          <form className='food-detector__form'>
            <div className="food-detector__form-group">
              <input className='food-detector__input' type="text" pattern="https://.*" placeholder='Paste image URL' />
              <button className='btn' type="submit">Detect</button>
            </div>
          </form>
        </section>
        <section className='food-detector__result'>
          <div className='food-detector__display'>
            <img className='food-detector__image' src="https://s23209.pcdn.co/wp-content/uploads/2013/09/IMG_6081edit.jpg" alt="food" />
          </div>
          {/* <ImageDisplay imgUrl={url} /> */}
          {/* <Rank /> */}
          {/* <ImageLinkForm onInputChange={onInputChange} onUrlSubmit={onUrlSubmit} /> */}
        </section>
      </main>
    </div>
  );
}

export default App;