import './App.css';
import Calculatrice from './Calculatrice';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState(null);
  return (
    <div className="App" >
      <h1>Composant APP</h1>
      Resultat  = {result}
      <Calculatrice updateResult={setResult}></Calculatrice>
    </div>
  );
}

export default App;
