import React from 'react';

const ImageDisplay = ({ imgUrl }) => {
  return (
      <div className='center'>
          <img src={imgUrl} width='500px' height='auto' alt='A Person' />
      </div>
  );
};

export default ImageDisplay;