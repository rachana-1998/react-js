
import './App.css';
import  ChildComponent1 from './components/ChildComponent1'
import    ChildComponent2 from './components/ChildComponent2'
import    ChildComponent3 from './components/ChildComponent3'
const App=() => {
  return (
    
      <div className="App">we are learning react
      <h1>App</h1>
      <br />
      react is awesome
      < ChildComponent1 />
      <ChildComponent2 />
      <ChildComponent3 />
      </div>  
  );
}

export default App;
