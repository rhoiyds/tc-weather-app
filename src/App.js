import React from 'react';
import { Counter } from './features/counter/Counter';
import { Weather } from './features/weather/Weather';
import './App.css';

function App() {
  return (
   <div>
     <Counter />
     <Weather />
   </div>
        
  );
}

export default App;
