import React from 'react';
import TypeAnimation from 'react-type-animation';

const ImageResults = ({ imgUrl, imgConcepts }) => {
  return (
    <section className='food-detector__image-results'>
      <div className="keyword-animation">
        <h2 className='heading__text--sub'>Image keyword:</h2>
        {/* Change sequence to include type 3 keywords */}
        <TypeAnimation
            className="heading__text--sub typed-text"
            cursor={true}
            repeat={Infinity}
            sequence={[ '', 1300,
                        'Syrup', 1600,
                        '', 1300,
                        'Sweet', 1600,
                        '', 1300, 
                        'Pancake', 1600]}
            wrapper="h3"
        />
      </div>
      <div className='food-detector__display'>
        <img className='food-detector__image' src={imgUrl} alt="food" />
      </div>
      <div className="food-detector__results">
        <ul className='food-detector__list'>
          <li className='food-detector__list-item food-detector__list-item--1'>
            <span>
              {`${Number(imgConcepts[0].value * 100).toPrecision(4)}%`}
            </span>
            <span className="vertical-divider"></span>
            <span className="food-detector__item-label">
              {imgConcepts[0].name}
            </span>
          </li>
          <li className='food-detector__list-item food-detector__list-item--2'>
            <span className="food-detector__item-result">
              {`${Number(imgConcepts[1].value * 100).toPrecision(4)}%`}
            </span>
            <span className="vertical-divider"></span>
            <span className="food-detector__item-label">
              {imgConcepts[1].name}
            </span>
          </li>
          <li className='food-detector__list-item food-detector__list-item--3'>
            <span>
              {`${Number(imgConcepts[2].value * 100).toPrecision(4)}%`}
            </span>
            <span className="vertical-divider"></span>
            <span className="food-detector__item-label">
              {imgConcepts[2].name}
            </span>
          </li>  
        </ul>
      </div>
    </section>
  );
};

export default ImageResults;