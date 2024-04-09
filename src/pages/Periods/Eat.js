import React, { useState } from 'react';
import './Styles/Eat.css';

function Eat() {
  const [preference, setPreference] = useState('');
  const [options, setOptions] = useState([]);

  const handlePreferenceSelection = (selectedPreference) => {
    setPreference(selectedPreference);
    switch (selectedPreference) {
      case 'sweet':
        setOptions([
          { name: 'Cake', image: 'cake.jpg' },
          { name: 'Ice Cream', image: 'ice-cream.jpg' },
          { name: 'Chocolate', image: 'chocolate.jpg' }
        ]);
        break;
      case 'spicy':
        setOptions([
          { name: 'Pizza', image: 'pizza.jpg' },
          { name: 'Tacos', image: 'tacos.jpg' },
          { name: 'Curry', image: 'curry.jpg' }
        ]);
        break;
      case 'salty':
        setOptions([
          { name: 'French Fries', image: 'french-fries.jpg' },
          { name: 'Popcorn', image: 'popcorn.jpg' },
          { name: 'Pretzels', image: 'pretzels.jpg' }
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
