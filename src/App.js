import './App.css';
import CompA from './CompA';
import { createContext } from 'react';

const FirstName = createContext();

function App() {
  return (
    <div className="App">
      <FirstName.Provider value={'Ram'}>
        <CompA />
      </FirstName.Provider>

    </div>
  );
}

export default App;
export { FirstName };
