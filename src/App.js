import React, { useState, useEffect } from 'react';
// import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import ImageForm from './components/ImageForm/ImageForm';
import ImageResults from './components/ImageResults/ImageResults';
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
      <Navigation />
      <main className='food-detector'>
        <ImageForm onInputChange={onInputChange} onUrlSubmit={onUrlSubmit} />
        <ImageResults imgUrl={url} />
      </main>
    </div>
  );
}

export default App;