import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/Q2.css';

function Q2() {
  const navigate = useNavigate();

  const handleNavigation = (option) => {
    switch (option) {
      case 'eat':
        navigate('/eat');
        break;
      case 'yoga':
        navigate('/yoga');
        break;
      case 'relax':
        navigate('/relax');
        break;
      case 'draw':
        navigate('/draw');
        break;
      case 'watch-movie':
        navigate('/movie');
        break;
      case 'play-motor-games':
        navigate('/gesture');
        break;
      case 'read':
        navigate('/learn');
        break;
      case 'organize-our-day':
        navigate('/todo');
        break;
      default:
        break;
    }
  };

  return (
    <div className="options-container">
      <h2>What would you like to do?</h2>
      <div className="button-container">
        <button onClick={() => handleNavigation('eat')}>Eat</button>
        <button onClick={() => handleNavigation('yoga')}>Yoga</button>
        <button onClick={() => handleNavigation('relax')}>Relax</button>
        <button onClick={() => handleNavigation('draw')}>Draw</button>
        <button onClick={() => handleNavigation('watch-movie')}>Watch a Movie</button>
        <button onClick={() => handleNavigation('play-motor-games')}>Play Motor Games</button>
        <button onClick={() => handleNavigation('read')}>Read</button>
        <button onClick={() => handleNavigation('organize-our-day')}>Organize Our Day</button>
      </div>
    </div>
  );
}

export default Q2;
