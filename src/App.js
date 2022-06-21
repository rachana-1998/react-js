import React from 'react';
import './App.css';
import Counter from './component/Counter';

const App=() => {
  return (
    
      <div className="App"> 
      <h1>App</h1>
      {/* react is awesome
      < ChildComponent1 />
      <ChildComponent2 />
      <ChildComponent3 /> */}
      <Counter />
      </div>  
  );
};

export default App;
