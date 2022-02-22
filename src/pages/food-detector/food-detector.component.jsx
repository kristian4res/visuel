import React, { useState, useEffect } from 'react';

import ImageForm from '../../components/ImageForm/ImageForm';
import ImageResults from '../../components/ImageResults/ImageResults';

const FoodDetector = ({ userLoggedIn, userDetails, setUser }) => {
  const API_BASE = "https://visuel-api-en.herokuapp.com/";

  const [input, setInput] = useState('');
  const [url, setUrl] = useState('https://preppykitchen.com/wp-content/uploads/2019/08/Pancakes-recipe-1200.jpg');
  const [concepts, setConcepts] = useState([
    {"name": "syrup", "value": 0.99935526}, 
    {"name": "pancake", "value": 0.9991899,}, 
    {"name": "sweet", "value": 0.99900854,}]
  );

  useEffect(() => {
    if (Object.keys(userDetails).length !== 0) {
      startAPICall();
    }
  }, [url, userDetails]);
  
  const filterPredictions = (data) => {
    const imagePredictions = data.outputs[0].data.concepts;
    return imagePredictions;
  };

  const callClarifaiAPI = async (userDetails) => {
    if (userDetails) {
      const response = await fetch(`${API_BASE}api/image`, 
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              user: {
                id: userDetails.id,
                email: userDetails.email
              },
              image: {
                url: url
              }
            })  
        });
  
      return response.json();
    }
    return "No user ID received";
  }

  const updateUserEntries = async () => {
    if (userDetails.id) {
      const res = await fetch(`${API_BASE}profile/entries`, 
        {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              user: {
                id: userDetails.id,
                email: userDetails.email
              }
            })  
          });
          return res.json();
    }
    else {
      return "No user credentials found";
    }
  }

  const startAPICall = async () => {
    const imageResponse = await callClarifaiAPI(userDetails);
    const entriesResponse = await updateUserEntries();

    try {
      if (imageResponse.success.length !== 0) {
        setConcepts(filterPredictions(imageResponse.image.keywords));
        setUser({userDetails: Object.assign(userDetails, {image_entries: entriesResponse.user.entries})});
      }
      else {
        return "Error while trying submit image";
      }
    }
    catch (err) {
      return "Error with request";
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
        <ImageForm userDetails={userDetails} userLoggedIn={userLoggedIn} onInputChange={onInputChange} input={input} onUrlSubmit={onUrlSubmit} />
        <ImageResults imgUrl={url} imgConcepts={concepts} />
      </>
  );
}

export default FoodDetector;