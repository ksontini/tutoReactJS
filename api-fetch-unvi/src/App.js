import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [list, setList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?country=Tunisia")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result', result)
          setList(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setError(error);
        }
      )
  });

  const items = list.map((univ) =>
    <li>{univ.name}</li>
  );
  return (
    <div className="App">
      {error != "" &&
        <h2 style={{ color: 'red' }}>
          Erreur au chargement des données
        </h2>
      }
      <ul>
        {items}
      </ul>
    </div >
  );
}

export default App;
