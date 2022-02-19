import React from 'react'

const Keyword = ({ value, name }) => {
  return (
    <li className='food-detector__list-item'>
        <span className={`food-detector__list-text food-detector__list-text--value`}>
            {`${Number(value * 100).toPrecision(4)}%`}
        </span>
        <span className={`vertical-divider vertical-divider${value > .98 ? '--green' : '--orange'}`}></span>
        <span className="food-detector__list-text">
            {name}
        </span>
    </li>
  )
}

export default Keyword;