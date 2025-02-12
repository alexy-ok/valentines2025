import React from 'react';
import { useDrag } from 'react-dnd';

const ClothingItem = ({ type, image, dressed, dressDoll, removeItem }) => {
  // Configure drag behavior
  const [{ isDragging }, dragRef] = useDrag({
    type: 'CLOTHING',
    item: { type, image },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  // Handle click to dress the doll
  const handleClick = () => {
    console.log(dressDoll);
    if (dressed && dressed[type] == image) {
      // If the item is already dressed, remove it
      removeItem(type);
      return;
    }
    dressDoll({ type, image });
  };

  return (
    <>
    <div
    className="clothing-item-container"
    onClick={handleClick}
    style={{
      cursor: 'pointer',
      width: '50px',      // Set container width
      height: '50px',     // Set container height
      overflow: 'hidden',  // Hide anything outside the container
      margin: '0px',
      border: '1px solid black', // Optional: visual boundary
      background: 'white',
      borderRadius: '15px',
    }}
  >
    <img
      ref={dragRef}
      src={`/thumbnails/${image}.svg`}
      alt={type}
      style={{
        // Adjust these values depending on your SVG’s structure:
        width: 'auto',
        height: '100%',
        objectFit: 'cover',   // Ensures the image covers the container
        objectPosition: 'center', // Focus on the central part of the SVG
        opacity: isDragging ? 0.5 : 1,
      }}
    />
   
  </div>
   <h2 style={{fontSize:'10px',  fontFamily: "'MS Sans Serif', Tahoma, sans-serif"}}>{image}</h2>
  </>
  );
};

export default ClothingItem;
