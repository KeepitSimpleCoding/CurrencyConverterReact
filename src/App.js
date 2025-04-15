
import './App.css';
import React, { useEffect } from 'react';
import CurrencyRow from './CurrencyRow';
const BASE_URL = 'https://api.frankfurter.app/latest?from=EUR';
function App() {
  const [currencyData, setCurrencyData] = React.useState({});

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        setCurrencyData(data);
      })
      .catch(error => console.error('Error fetching currency data:', error));
  }, []);
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }, []);
  

  return <>
  
 <h1> Hello World</h1>
 <h2> I am creating a react currency converter </h2>
 <CurrencyRow />
 <div> = </div>
 <CurrencyRow />
  </>
}

export default App;