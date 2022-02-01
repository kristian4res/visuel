import React, { useState, useEffect } from 'react';

import ImageForm from '../../components/ImageForm/ImageForm';
import ImageResults from '../../components/ImageResults/ImageResults';

// Clarifai API -REMOVE LATER
import Clarifai from 'clarifai';

const clarifaiApp = new Clarifai.App({
 apiKey: '922a077a1cfc441db5a1a3ec2e2b93e0'
});

const FoodDetector = () => {
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
  
    const callClarifaiAPI = () => {
      clarifaiApp.models
        .predict(
          Clarifai.FOOD_MODEL,
          url  
          )
        .then(response => setConcepts(filterPredictions(response)))
        .catch(err => console.log(err)); 
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
            <main className='food-detector'>
                <ImageForm onInputChange={onInputChange} onUrlSubmit={onUrlSubmit} />
                <ImageResults imgUrl={url} imgConcepts={concepts} />
            </main>
        </>
    );
}

export default FoodDetector;