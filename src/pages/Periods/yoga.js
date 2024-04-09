import React, { useState } from 'react';
import './Styles/yoga.css';

function Yoga() {
  const [preference, setPreference] = useState('');
  const [poses, setPoses] = useState([]);

  const handlePreferenceSelection = (selectedPreference) => {
    setPreference(selectedPreference);
    switch (selectedPreference) {
      case 'menstrual':
        setPoses([
          { name: 'Child\'s Pose', image: 'childs-pose.jpg' },
          { name: 'Seated Forward Bend', image: 'seated-forward-bend.jpg' },
          { name: 'Supine Twist', image: 'supine-twist.jpg' }
        ]);
        break;
      case 'sleeping':
        setPoses([
          { name: 'Legs Up the Wall', image: 'legs-up-the-wall.jpg' },
          { name: 'Corpse Pose', image: 'corpse-pose.jpg' },
          { name: 'Reclining Bound Angle Pose', image: 'reclining-bound-angle-pose.jpg' }
        ]);
        break;
      case 'energizing':
        setPoses([
          { name: 'Sun Salutation', image: 'sun-salutation.jpg' },
          { name: 'Warrior II', image: 'warrior-ii.jpg' },
          { name: 'Cobra Pose', image: 'cobra-pose.jpg' }
        ]);
        break;
      case 'mindfulness':
        setPoses([
          { name: 'Tree Pose', image: 'tree-pose.jpg' },
          { name: 'Seated Meditation', image: 'seated-meditation.jpg' },
          { name: 'Cat-Cow Stretch', image: 'cat-cow-stretch.jpg' }
        ]);
        break;
      default:
        setPoses([]);
        break;
    }
  };

  return (
    <div className="yoga-container">
      <h2>What type of yoga are you interested in?</h2>
      <div className="preferences">
        <button onClick={() => handlePreferenceSelection('menstrual')}>Menstrual Relief</button>
        <button onClick={() => handlePreferenceSelection('sleeping')}>Sleeping</button>
        <button onClick={() => handlePreferenceSelection('energizing')}>Energizing</button>
        <button onClick={() => handlePreferenceSelection('mindfulness')}>Mindfulness</button>
      </div>
      {preference && (
        <div className="poses">
          <h3>Suggested poses for {preference}:</h3>
          <div className="pose-list">
            {poses.map((pose, index) => (
              <div key={index} className="pose">
                <img src={pose.image} alt={pose.name} />
                <p>{pose.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Yoga;
