
import './App.css';
import React, { useEffect, useState } from 'react';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'https://api.frankfurter.app/latest?from=EUR';
function App() {

  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [currencyData, setCurrencyData] = React.useState({});
  const [toCurrency, setToCurrency] = React.useState();
  const [exchangeRate, setExchangeRate] = React.useState();
  const [fromCurrency, setFromCurrency] = React.useState();
  const [amount, setAmount] = React.useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = React.useState(true);



  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }
 
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        const options = [data.base, ...Object.keys(data.rates)];
        setCurrencyOptions(options);
        setCurrencyData(options);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency])
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
  
  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false);
  }
return (
  <>
    <h1>Hello World</h1>
    <h2>I am creating a react currency converter</h2>
    <CurrencyRow 
    currencyOptions={currencyOptions}
    currencyData={currencyData}g
    selectCurrency = {fromCurrency}
    onChangeCurrency = {e => setFromCurrency(e.target.value)}
  onChangeAmount={handleFromAmountChange}
    amount={fromAmount}
    />
    <div>=</div>
    <CurrencyRow
        currencyOptions={currencyOptions}
            selectCurrency = {toCurrency}
            onChangeCurrency = {e => setToCurrency(e.target.value)}
            onChangeAmount={handleToAmountChange}
            amount={toAmount} />

   </>
);
}

export default App;