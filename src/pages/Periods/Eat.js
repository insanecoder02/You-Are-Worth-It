import React, { useState } from 'react';
import './Styles/Eat.css';

import cakeImage from './Styles/cake.png';
import iceCreamImage from './Styles/ice-cream.png';
import chocolateImage from './Styles/chocolate.png';
import tacosImage from './Styles/tacos.png';
import pizzaImage from './Styles/pizza.png';
import curryImage from './Styles/curry.png';
import frenchFriesImage from './Styles/french-fries.png';
import popcornImage from './Styles/popcorn.png';
import pretzelsImage from './Styles/pretzels.png';

function Eat() {
  const [preference, setPreference] = useState('');
  const [options, setOptions] = useState([]);

  const handlePreferenceSelection = (selectedPreference) => {
    setPreference(selectedPreference);
    switch (selectedPreference) {
      case 'sweet':
        setOptions([
          { name: 'Cake', image: cakeImage },
          { name: 'Ice Cream', image: iceCreamImage },
          { name: 'Chocolate', image: chocolateImage }
        ]);
        break;
      case 'spicy':
        setOptions([
          { name: 'Pizza', image: pizzaImage },
          { name: 'Tacos', image: tacosImage },
          { name: 'Curry', image: curryImage }
        ]);
        break;
      case 'salty':
        setOptions([
          { name: 'French Fries', image: frenchFriesImage },
          { name: 'Popcorn', image: popcornImage },
          { name: 'Pretzels', image: pretzelsImage }
        ]);
        break;
      default:
        setOptions([]);
        break;
    }
  };

  return (
    <div className="eat-container">
      <h2>What would you like to eat?</h2>
      <div className="preferences">
        <button onClick={() => handlePreferenceSelection('sweet')}>Sweet</button>
        <button onClick={() => handlePreferenceSelection('spicy')}>Spicy</button>
        <button onClick={() => handlePreferenceSelection('salty')}>Salty</button>
      </div>
      {preference && (
        <div className="options">
          <h3>Options for {preference} lovers:</h3>
          <div className="option-list">
            {options.map((option, index) => (
              <div key={index} className="option">
                <img src={option.image} alt={option.name} />
                <p>{option.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Eat;
