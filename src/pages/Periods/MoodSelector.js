import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/MoodSelector.css';

function MoodSelector() {
  const [mood, setMood] = useState('');
  const navigate = useNavigate();

  const affirmations = {
    happy: "It's great to see you happy! Let's carry this positivity throughout the day. What about Reading or Learning today?",
    sad: "It's okay to feel sad. Let's find something to brighten your day.",
    anxious: "Take deep breaths. You're going to get through this.Why not try some Motor games to keep you engaged?",
    excited: "Your excitement is contagious! What adventure awaits us today?",
    tired: "Remember to rest. You deserve relaxation and rejuvenation.Let's Deep Dive into Sensory Rooms and promote self-care"
  };

  const handleMoodSelection = (selectedMood) => {
    setMood(selectedMood);
  };
  const navigateToNextComponent = () => {
    navigate('/Q2');
  };

  return (
    <div className="container">
      <h2>How's your mood today?</h2>
      <div className="button-container">
        <button onClick={() => handleMoodSelection('happy')}>Happy</button>
        <button onClick={() => handleMoodSelection('sad')}>Sad</button>
        <button onClick={() => handleMoodSelection('anxious')}>Anxious</button>
        <button onClick={() => handleMoodSelection('excited')}>Excited</button>
        <button onClick={() => handleMoodSelection('tired')}>Tired</button>
      </div>
      {mood && <p className="affirmation">{affirmations[mood]}</p>}
      {mood && <button className="next-button" onClick={navigateToNextComponent}>Next Page</button>}
    </div>
  );
}

export default MoodSelector;
