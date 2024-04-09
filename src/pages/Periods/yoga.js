import React, { useState } from 'react';
import './Styles/yoga.css';

import childsPoseImage from './Styles/childs-pose.png';
import seatedForwardBendImage from './Styles/seatedForwardBend.png';
import supineTwistImage from './Styles/supineTwist.png';
import legsUpTheWallImage from './Styles/legsUpTheWall.png';
import corpsePoseImage from './Styles/corpsePose.png';
import recliningBoundAnglePoseImage from './Styles/recliningBoundAnglePose.png';
import sunSalutationImage from './Styles/sunSalutation.png';
import warriorIIImage from './Styles/warriorII.png';
import cobraPoseImage from './Styles/cobraPose.png';
import treePoseImage from './Styles/treePose.png';
import seatedMeditationImage from './Styles/seatedMeditation.png';
import catCowStretchImage from './Styles/catCowStretch.png';

function Yoga() {
  const [preference, setPreference] = useState('');
  const [poses, setPoses] = useState([]);

  const handlePreferenceSelection = (selectedPreference) => {
    setPreference(selectedPreference);
    switch (selectedPreference) {
       case 'menstrual':
         setPoses([
           { name: 'Child\'s Pose', image: childsPoseImage },
           { name: 'Seated Forward Bend', image: seatedForwardBendImage },
           { name: 'Supine Twist', image: supineTwistImage }
         ]);
         break;
       case 'sleeping':
         setPoses([
           { name: 'Legs Up the Wall', image: legsUpTheWallImage },
           { name: 'Corpse Pose', image: corpsePoseImage },
           { name: 'Reclining Bound Angle Pose', image: recliningBoundAnglePoseImage }
         ]);
         break;
       case 'energizing':
         setPoses([
           { name: 'Sun Salutation', image: sunSalutationImage },
           { name: 'Warrior II', image: warriorIIImage },
           { name: 'Cobra Pose', image: cobraPoseImage }
         ]);
         break;
       case 'mindfulness':
         setPoses([
           { name: 'Tree Pose', image: treePoseImage },
           { name: 'Seated Meditation', image: seatedMeditationImage },
           { name: 'Cat-Cow Stretch', image: catCowStretchImage }
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
