import React, { useState, useEffect } from 'react';
import './App.css';  
import petImage from './tinypet.png';  // Replace with your pet's image

function App() {
  const [happiness, setHappiness] = useState(50);  
  const [hunger, setHunger] = useState(50);  

  const playWithPet = () => setHappiness((prev) => Math.min(prev + 10, 100));  
  const feedPet = () => setHunger((prev) => Math.max(prev - 10, 0));  

  useEffect(() => {
    const interval = setInterval(() => {
      setHappiness((prev) => Math.max(prev - 5, 0));  
      setHunger((prev) => Math.min(prev + 5, 100));  
    }, 5000);  
    return () => clearInterval(interval);  
  }, []);

  return (
    <div className="app">
      <h1>🐾 Virtual Pet Companion 🐾</h1>

      <div className="pet-container">
        {/* Pet Image */}
        <img
          src={petImage}
          alt="Virtual Pet"
          className={`pet-image ${happiness > 50 ? 'happy' : 'sad'}`}  // Animation based on happiness
        />

        {/* Message Bubble */}
        <div className="message-bubble">
          {happiness > 50 ? (
            <p>I'm feeling happy! 😊</p>
          ) : hunger > 50 ? (
            <p>I'm hungry... 🍔</p>
          ) : (
            <p>I'm sad... 🥺</p>
          )}
        </div>
      </div>

      <div className="stats">
        <p>Happiness: {happiness}%</p>
        <p>Hunger: {hunger}%</p>
      </div>

      <div className="button-container">
        <button onClick={playWithPet}>Play with Pet 🎾</button>
        <button onClick={feedPet}>Feed Pet 🍔</button>
      </div>
    </div>
  );
}

export default App;

