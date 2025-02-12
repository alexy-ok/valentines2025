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
        <div className="game-container" style={{
          display:'flex', 
          flexDirection: 'row', 
          justifyContent: 'center', 
          backgroundColor:'#c0c0c0',
          fontFamily: "'MS Sans Serif', Tahoma, sans-serif", 
          gap:'0px', height: 'auto', 
          borderRadius:'5%',
          padding: '10px',
          boxShadow: 'inset -2px -2px #fff, inset 2px 2px #000, inset -1px -1px #dfdfdf, inset 1px 1px #404040',
          border: '2px solid #808080',

          }}>
          {/* Doll Drop Target */}
          <div style={{flex:"1", width:'100%'}}>
            <Doll dressed={dressed} dressDoll={dressDoll} />
          </div>
          {/* Clothing Items */}
          <div className="clothing-items-container" style={{flex: '1', display: 'flex', flexDirection: 'row'}}>
             <div className="clothing-items" >
              <h2 style={{}}>Hair</h2>
            
              <ClothingItem type="hair" image="short bangs" dressed={dressed} dressDoll={dressDoll} removeItem={removeItem} />  
                <h2 style={{}}>Acc.</h2>
                <ClothingItem type="eye" image="glasses" dressed={dressed} dressDoll={dressDoll} removeItem={removeItem} />
                <ClothingItem type="earring" image="miffy earring" dressed={dressed} dressDoll={dressDoll} removeItem={removeItem} />
                <ClothingItem type="cement" image="cement" dressed={dressed} dressDoll={dressDoll} removeItem={removeItem} />

              
              </div>
      
              <div className="clothing-items" >
                <h2>Tops</h2>
                <ClothingItem type="out" image="UCI" dressed={dressed} dressDoll={dressDoll} removeItem={removeItem} />
                <ClothingItem type="out" image="h and m" dressed={dressed} dressDoll={dressDoll} removeItem={removeItem} />
                <ClothingItem type="out" image="zipup" dressed={dressed} dressDoll={dressDoll} removeItem={removeItem} />
                <ClothingItem type="toptop" image="white button" dressed={dressed} dressDoll={dressDoll} removeItem={removeItem} />
                <ClothingItem type="top" image="green top" dressed={dressed} dressDoll={dressDoll} removeItem={removeItem} />
                <ClothingItem type="top" image="white top" dressed={dressed} dressDoll={dressDoll} removeItem={removeItem} />
                <ClothingItem type="shirt" image="tyler shirt" dressed={dressed} dressDoll={dressDoll} removeItem={removeItem} />
                <ClothingItem type="shirt" image="kiss shirt" dressed={dressed} dressDoll={dressDoll} removeItem={removeItem} />
                  
              </div>
              
              <div className="clothing-items" >
                <h2>Bottoms</h2>
            
                <ClothingItem type="bottom" image="cat skirt" dressed={dressed} dressDoll={dressDoll} removeItem={removeItem} />
                <ClothingItem type="bottom" image="black cargo" dressed={dressed} dressDoll={dressDoll} removeItem={removeItem} />
                <ClothingItem type="bottom" image="long skirt" dressed={dressed} dressDoll={dressDoll} removeItem={removeItem} />
                <ClothingItem type="bottom" image="long white skirt" dressed={dressed} dressDoll={dressDoll} removeItem={removeItem} />

                <h2>Shoes</h2>
                <ClothingItem type="shoes" image="Converse" dressed={dressed} dressDoll={dressDoll} removeItem={removeItem} />    
                <ClothingItem type="shoes" image="white shoes" dressed={dressed} dressDoll={dressDoll} removeItem={removeItem} />            
              </div>
          </div>
        </div>
      </div>
    </DndProvider>
    
  );
};

export default App;
