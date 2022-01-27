import React from 'react';

const ImageResults = ({ imgUrl }) => {
  return (
    <section className='food-detector__image-results'>
      <div className='food-detector__display'>
        <img className='food-detector__image' src={imgUrl ? imgUrl : 'https://preppykitchen.com/wp-content/uploads/2019/08/Pancakes-recipe-1200.jpg'} alt="food" />
      </div>
      <div className="food-detector__results">
        <ul className='food-detector__list'>
          <li className='food-detector__list-item'>
            <span>99% Tonkatsu</span>
          </li>
          <li className='food-detector__list-item'>
            <span>99% Tonkatsu</span>
          </li>
          <li className='food-detector__list-item'>
            <span>99% Tonkatsu</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ImageResults;