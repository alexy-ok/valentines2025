import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Doll from './components/Doll';
import ClothingItem from './components/ClothingItem';
import './App.css';
const App = () => {
  const [dressed, setDressed] = useState({});

  const dressDoll = (item) => {
    setDressed(prev => ({
      ...prev,
      [item.type]: item.image, // Overwrites if the same type exists
    }));
  };

  // (Optional) Function to remove an item (if you want click-to-remove on the doll)
  const removeItem = (type) => {
    setDressed(prev => {
      const updated = { ...prev };
      delete updated[type];
      return updated;
    });
  };

  return (

    <DndProvider backend={HTML5Backend}>
      <div className="App" style={{ textAlign: 'center', padding: '20px', width:'100%' }}>
        <h1 style={{color:'black'}}>The Game</h1>
        <div className="game-container" style={{display:'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor:'white'}}>
          {/* Doll Drop Target */}
          <div style={{flex:"1", width:'100%'}}>
            <Doll dressed={dressed} dressDoll={dressDoll} />
          </div>
          {/* Clothing Items */}
          <div className="clothing-items-container" style={{flex: '1', display: 'flex', flexDirection: 'row'}}>
            <div className="clothing-items" style={{ marginLeft: '20px' }}>
              <h2 style={{}}>Accessories</h2>
          
              <ClothingItem type="earring" image="miffy earring" dressed={dressed} dressDoll={dressDoll} removeItem={removeItem} />

            
            </div>
            <div className="clothing-items" style={{ marginLeft: '20px' }}>
              <h2>Tops</h2>
              <ClothingItem type="top" image="green top" dressed={dressed} dressDoll={dressDoll} removeItem={removeItem} />
                
            </div>
            
            <div className="clothing-items" style={{ marginLeft: '20px' }}>
              <h2>Bottoms</h2>
          
              <ClothingItem type="bottom" image="cat skirt" dressed={dressed} dressDoll={dressDoll} removeItem={removeItem} />
              <ClothingItem type="bottom" image="black cargo" dressed={dressed} dressDoll={dressDoll} removeItem={removeItem} />
              <ClothingItem type="bottom" image="long skirt" dressed={dressed} dressDoll={dressDoll} removeItem={removeItem} />

            
            </div>
            <div className="clothing-items" style={{ marginLeft: '20px' }}>
              <h2>Shoes</h2>
              <ClothingItem type="shoes" image="Converse" dressed={dressed} dressDoll={dressDoll} removeItem={removeItem} />            
            </div>
        </div>
        </div>
      </div>
    </DndProvider>
    
  );
};

export default App;
