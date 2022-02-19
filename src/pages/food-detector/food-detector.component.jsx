import React, { useState, useEffect } from 'react';

import ImageForm from '../../components/ImageForm/ImageForm';
import ImageResults from '../../components/ImageResults/ImageResults';

const FoodDetector = ({ userLoggedIn, user, setUser }) => {
    const [input, setInput] = useState('');
    const [url, setUrl] = useState('https://preppykitchen.com/wp-content/uploads/2019/08/Pancakes-recipe-1200.jpg');
    const [concepts, setConcepts] = useState([{}, {}, {}]);
  
    useEffect(() => {
      callClarifaiAPI();
    }, [url]);
  
    const filterPredictions = (data) => {
      const imagePredictions = data.outputs[0].data.concepts;
    
      return imagePredictions;
    };

    // const updateUserEntries = async (response) => {
    //   if (response) {
    //     const res = await fetch('http://localhost:3001/api/image', 
    //       {
    //           method: 'PUT',
    //           headers: {'Content-Type': 'application/json'},
    //           body: JSON.stringify({
    //             user: {
    //               id: user.id,
    //               email: user.email
    //             },
    //             image: {
    //               url: url
    //             }
    //           })  
    //       });
        
    //     if (res.success.length > 0) {
    //       setUser({user: Object.assign(user, {entries: res.entries})})
    //     }
    //   }
    // }
  
    const callClarifaiAPI = async () => {
      const response = await fetch('http://localhost:3001/api/image', 
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              user: {
                id: user.id,
                email: user.email
              },
              image: {
                url: url
              }
            })  
        });

      if (response.keywords) {
        setConcepts(filterPredictions(response.image.keywords));
      }
      if (response.user.entries) {
        setUser({user: Object.assign(user, {entries: response.user.entries})})
      }
      else {
        return "error with request";
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