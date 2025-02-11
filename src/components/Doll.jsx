import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

const Doll = ({ dressed, dressDoll, removeItem }) => {

 

  const images = ['retro yellow purple.svg', 'polka red white.svg', 'polka blue green.svg', 'sky hills.svg', 'summoner.svg'];
  const [index, setIndex] = useState(0);

  const advanceImage = () => {
    setIndex((index + 1) % images.length);
  };
  const goBackImage = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <>
    <div

      className="doll-container"
      style={{
        
        width: '300px',
        height: '500px',
        position: 'relative',
        margin: '0 auto',
      }}
      
    >
      
      {/* Doll base image */}
      <img 
        src={`/bg/${images[index]}`}  // Place your doll base image in the public/images folder
        style={{ width: '100%', height: '100%', position: 'absolute' , left: -15}}
      />
      <img
        src="/images/character.svg"  // Place your doll base image in the public/images folder
        alt="Doll Base"
        style={{ width: '100%', height: '100%' , position: 'absolute',}}
      />
      
      {/* Render each dropped clothing item as an absolutely positioned image */}
      {Object.entries(dressed).map(([type, image]) => (
        <img
          key={type}
          src={`/images/${image}.svg`}
          alt={type}

          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            cursor: 'pointer', // indicate that the item is clickable
            // Make sure pointer events are active so the click registers:
            pointerEvents: 'auto',
          }}
        />
      ))}
    </div>
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
      <button onClick={goBackImage}>Back</button>
      <button onClick={advanceImage}>Next</button>
      
    </div>
    </>

  );
};

export default Doll;
