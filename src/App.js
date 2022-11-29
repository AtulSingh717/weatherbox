import { useState, useEffect } from 'react';
import Countries from './modules/countries';

import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    fetch('https://countriesnow.space/api/v0.1/countries')
      .then(response => response.json())
      .then(data => {
        setCountries(data.data);
        // console.log(data.data)
      });
  }, []);

  return (
    <div className="App">
      <div className="country-list">
          {countries.length > 0  ? countries.map((country, index) => Countries(country, index)) : 'Loading...'}
      </div>
    </div>
  );
}

export default App;
