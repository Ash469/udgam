import React from 'react';
import Wagon from './wagon'
import './Speakers.css';

// Images
import wagon1 from '../assets/speaker1.svg';
import wagon2 from '../assets/speaker2.svg';
import engine from '../assets/engine.png';
import engine2 from '../assets/engine2.png';
import wagon3 from '../assets/speaker3.svg'; 
import wagon4 from '../assets/speaker4.svg';
import wagon5 from '../assets/speaker5.svg';
import wagon6 from '../assets/speaker6.svg';
import wagon7 from '../assets/speaker7.svg';
import wagon8 from '../assets/speaker8.svg';
import wagon9 from '../assets/speaker9.svg';
import wagon10 from '../assets/speaker10.svg';
import wagon11 from '../assets/speaker11.svg';
import wagon12 from '../assets/speaker12.svg';

function Speakers() {
  // Data for train components
  const wagons = [
    { imageUrl: wagon1, title: 'N.R. Narayan Murthy', designation:'Founder' ,pastcompany: 'Infosys' },
    { imageUrl: wagon2, title: 'Ashneer Grover', designation:'Co-Founder' , pastcompany: 'BharatPe' },
    { imageUrl: wagon3, title: 'Ankush Singla', designation:'Co-Founder' , pastcompany: 'Coding Ninjas' },
    { imageUrl: wagon4, title: 'Charlie Cheever', designation:'Co-Founder' , pastcompany: 'Quora' },
    { imageUrl: wagon5, title: 'Jimmy Wales', designation:'Founder' , pastcompany: 'Wikipedia' },
    { imageUrl: wagon12, title: 'Pulkit Jain', designation:'Co-Founder' , pastcompany: 'Vedantu' },
    { imageUrl: wagon6, title: 'Kevin Harrington', designation:'Original Shark' , pastcompany: 'Shark Tank' },
    { imageUrl: wagon7, title: 'Amod Malviya', designation:'Co-Founder' , pastcompany: 'Udaan' },
    { imageUrl: wagon8, title: 'Michael Seibel', designation:'CEO' , pastcompany: 'Y Combinator' },
    { imageUrl: wagon9, title: 'Rohit Kapoor', designation:'CEO' , pastcompany: 'Swiggy' },
    { imageUrl: wagon10, title: 'Ankur Warikoo', designation:'Founder' , pastcompany: 'Nearbuy' },
    { imageUrl: wagon11, title: 'Ankit Nagori', designation:'Founder' , pastcompany: 'Cure.Fit' },
  ];

  return (
    <div className="train-wrapper">


      <div className="train-container">
        <div className="engine" style={{ transform: 'translateY(10px)' }}>
          <img src={engine} alt="Front Engine" />
        </div>
        {wagons.map((wagon, index) => (
          <Wagon
            key={index}
            imageUrl={wagon.imageUrl}
            title={wagon.title}
            designation={wagon.designation}
            pastcompany={wagon.pastcompany}
          />
        ))}
        <div className="engine" style={{ transform: 'translateY(8px)' }}>
          <img src={engine2} alt="Back Engine" />
        </div>
      </div>
    </div>
  );
}

export default Speakers;
