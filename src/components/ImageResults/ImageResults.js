import React from 'react';

const ImageResults = ({ imgUrl, imgConcepts }) => {
  return (
    <section className='food-detector__image-results'>
      <div className='food-detector__display'>
        <img className='food-detector__image' src={imgUrl} alt="food" />
      </div>
      <div className="food-detector__results">
        <ul className='food-detector__list'>
          <li className='food-detector__list-item'>
            <span>
              {`${Number(imgConcepts[0].value * 100).toPrecision(4)}%`}
            </span>
            <span className="vertical-divider"></span>
            <span className="food-detector__item-label">
              {imgConcepts[0].name}
            </span>
          </li>
          <li className='food-detector__list-item'>
            <span className="food-detector__item-result">
              {`${Number(imgConcepts[1].value * 100).toPrecision(4)}%`}
            </span>
            <span className="vertical-divider"></span>
            <span className="food-detector__item-label">
              {imgConcepts[1].name}
            </span>
          </li>
          <li className='food-detector__list-item'>
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