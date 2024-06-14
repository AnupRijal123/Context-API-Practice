import './App.css';
import CompA from './CompA';
import { createContext } from 'react';

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <div className="App">
      <FirstName.Provider value={'Ram'}>
        <LastName.Provider value="Thapa">
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>

    </div>
  );
}

export default App;
export { FirstName, LastName };
