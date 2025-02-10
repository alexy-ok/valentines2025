import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

const Doll = ({ dressed, dressDoll, removeItem }) => {

  // Configure the drop target using useDrop
  const [{ isOver }, dropRef] = useDrop({
    accept: 'CLOTHING', // Items of type "CLOTHING" can be dropped here
    drop: (item) => {
      // When an item is dropped, update the state
      setDressed(prev => ({
        ...prev,
        [item.type]: item.image,  // Overwrite if an item of the same type already exists
      }));
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });


  return (
    <div
      ref={dropRef}
      className="doll-container"
      style={{
        border: isOver ? '2px solid green' : '2px solid gray',
        width: '300px',
        height: '500px',
        position: 'relative',
        margin: '0 auto',
      }}
    >
      {/* Doll base image */}
      <img
        src="/images/character.svg"  // Place your doll base image in the public/images folder
        alt="Doll Base"
        style={{ width: '100%', height: '100%' }}
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
          title={`Click to remove ${type}`}
        />
      ))}
    </div>
  );
};

export default Doll;
