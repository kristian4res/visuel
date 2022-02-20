import React, { useState, useEffect } from 'react';

import ImageForm from '../../components/ImageForm/ImageForm';
import ImageResults from '../../components/ImageResults/ImageResults';

const FoodDetector = ({ userLoggedIn, userDetails, setUser }) => {
  const [input, setInput] = useState('');
  const [url, setUrl] = useState('https://preppykitchen.com/wp-content/uploads/2019/08/Pancakes-recipe-1200.jpg');
  const [concepts, setConcepts] = useState([
    {"name": "syrup", "value": 0.99935526}, 
    {"name": "pancake", "value": 0.9991899,}, 
    {"name": "sweet", "value": 0.99900854,}]
  );

  useEffect(() => {
    startAPICall();
  }, [url]);
  
  const filterPredictions = (data) => {
    const imagePredictions = data.outputs[0].data.concepts;
    return imagePredictions;
  };

  const callClarifaiAPI = async (userDetails) => {
    if (userDetails.id) {
      const response = await fetch('http://localhost:3001/api/image', 
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

  const updateUserEntries = async (response, userDetails) => {
    if (response && userDetails.id) {
      const res = await fetch('http://localhost:3001/profile/entries', 
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
      
      if (res.success.length > 0) {
        setUser({user: Object.assign(userDetails, {entries: res.entries})})
        return 'success';
      }
      return 'Could not update user entries';
    }
    else {
      return 'Error with entries update request'
    }
  }

  const startAPICall = async () => {
    const response = await callClarifaiAPI(userDetails);

    try {
      if (response.success.length !== 0) {
        setConcepts(filterPredictions(response.image.keywords));
      }
  
      if (userDetails && userLoggedIn && response.success.length !== 0) {
        updateUserEntries(response, userDetails);
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
        <ImageForm userLoggedIn={userLoggedIn} onInputChange={onInputChange} input={input} onUrlSubmit={onUrlSubmit} />
        <ImageResults imgUrl={url} imgConcepts={concepts} />
      </>
  );
}

export default FoodDetector;