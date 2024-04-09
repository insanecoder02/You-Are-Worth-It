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
           { name: 'Child\'s Pose', image: childsPose },
           { name: 'Seated Forward Bend', image: seatedForwardBend },
           { name: 'Supine Twist', image: supineTwist }
         ]);
         break;
       case 'sleeping':
         setPoses([
           { name: 'Legs Up the Wall', image: legsUpTheWall },
           { name: 'Corpse Pose', image: corpsePose },
           { name: 'Reclining Bound Angle Pose', image: recliningBoundAnglePose }
         ]);
         break;
       case 'energizing':
         setPoses([
           { name: 'Sun Salutation', image: sunSalutation },
           { name: 'Warrior II', image: warriorII },
           { name: 'Cobra Pose', image: cobraPose }
         ]);
         break;
       case 'mindfulness':
         setPoses([
           { name: 'Tree Pose', image: treePose },
           { name: 'Seated Meditation', image: seatedMeditation },
           { name: 'Cat-Cow Stretch', image: catCowStretch }
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
