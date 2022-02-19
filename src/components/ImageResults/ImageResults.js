import React from 'react';
import Keyword from '../Keyword/Keyword';
import TypeAnimation from 'react-type-animation';

const ImageResults = ({ imgUrl, imgConcepts }) => {
  return (
    <section className='food-detector__image-results'>
      <div className="keyword-animation">
        <h2 className='heading__text--sub'>Top 3 keywords:</h2>
        <TypeAnimation
            className="heading__text--sub typed-text"
            cursor={true}
            repeat={Infinity}
            sequence={[ '', 1300,
                        imgConcepts[0].name, 1600,
                        '', 1300,
                        imgConcepts[1].name, 1600,
                        '', 1300, 
                        imgConcepts[2].name, 1600]}
            wrapper="h3"
        />
      </div>
      <div className='food-detector__display'>
        <img className='food-detector__image' src={imgUrl} alt="food" />
      </div>
      <div className="food-detector__results">
        <ul className='food-detector__list'>
          {
            imgConcepts.map((keyword, idx) => (
              <Keyword key={idx} value={keyword.value} name={keyword.name} />
            ))
          }
        </ul>
      </div>
    </section>
  );
};

export default ImageResults;