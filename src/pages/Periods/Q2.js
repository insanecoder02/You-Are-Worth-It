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
    <div className="ocontainer">
      <h2>What would you like to do?</h2>
      <div className="button-container">
      <button className="button-eat" onClick={() => handleNavigation('eat')}>🍽️ Eat</button>
        <button className="button-yoga" onClick={() => handleNavigation('yoga')}>🧘‍♀️ Yoga</button>
        <button className="button-relax" onClick={() => handleNavigation('relax')}>🛀 Relax</button>
        <button className="button-draw" onClick={() => handleNavigation('draw')}>🎨 Draw</button>
        <button className="button-movie" onClick={() => handleNavigation('watch-movie')}>🎬 Watch a Movie</button>
        <button className="button-games" onClick={() => handleNavigation('play-motor-games')}>🎮 Play Motor Games</button>
        <button className="button-read" onClick={() => handleNavigation('Learn &Read')}>📚 Read</button>
        <button className="button-organize" onClick={() => handleNavigation('organize-our-day')}>📅 Organize Our Day</button>
      </div>
    </div>
  );
}

export default Q2;
