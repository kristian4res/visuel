import React, { useState, useEffect } from 'react';

import ImageForm from '../../components/ImageForm/ImageForm';
import ImageResults from '../../components/ImageResults/ImageResults';

// Clarifai API -REMOVE LATER
import Clarifai from 'clarifai';

const clarifaiApp = new Clarifai.App({
 apiKey: '922a077a1cfc441db5a1a3ec2e2b93e0'
});

const FoodDetector = ({ userLoggedIn, user, setUser }) => {
    const [input, setInput] = useState('');
    const [url, setUrl] = useState('https://preppykitchen.com/wp-content/uploads/2019/08/Pancakes-recipe-1200.jpg');
    const [concepts, setConcepts] = useState([{}, {}, {}]);
  
    useEffect(() => {
      callClarifaiAPI();
    }, [url]);
  
    const filterPredictions = (data) => {
      const imagePredictions = data.outputs[0].data.concepts;
      // Get top 3 predictions
      const topPredictions = imagePredictions.slice(0, 3);
      
      return topPredictions;
    };

    const updateUserEntries = async (response) => {
      if (response) {
        const res = await fetch('http://localhost:3001/image', 
          {
              method: 'PUT',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                id: user.id
              })  
          });
        
        if (res.success.length > 0) {
          setUser({user: Object.assign(user, {entries: res.entries})})
        }
        
      }
    }
  
    const callClarifaiAPI = async () => {
      const response = await clarifaiApp.models
        .predict(
          Clarifai.FOOD_MODEL,
          url  
          );
      if (response) {
        setConcepts(filterPredictions(response));
      }
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
        <>
          <ImageForm userLoggedIn={userLoggedIn} onInputChange={onInputChange} onUrlSubmit={onUrlSubmit} />
          <ImageResults imgUrl={url} imgConcepts={concepts} />
        </>
    );
}

export default FoodDetector;