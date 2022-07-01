import CurrencyInput from "../Currecy-exchange/Currency-exchange";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import fetchAPI from "../fetch-api";
import s from "./App.module.css";

function App() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrensy1] = useState("UAH");
  const [currency2, setCurrensy2] = useState("USD");
  const [rate, setRate] = useState([]);

  useEffect(() => {
    fetchAPI()
      .then((response) => response.text())
      .then((result) => {
        const ratesParset = JSON.parse(result);
        setRate(ratesParset.rates);
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    if (!!rate) {
      handleAmount1Change(amount1);
    }
  }, [rate]);

  function formatNumber(number) {
    return number.toFixed(2);
  }

  function handleAmount1Change(amount1) {
    setAmount2(formatNumber((amount1 * rate[currency2]) / rate[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(formatNumber((amount1 * rate[currency2]) / rate[currency1]));
    setCurrensy1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(formatNumber((amount2 * rate[currency1]) / rate[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(formatNumber((amount2 * rate[currency1]) / rate[currency2]));
    setCurrensy2(currency2);
  }

  return (
    <div className={s.container}>
      <Header />
      <section className={s.exchange}>
      <h2 className={s.exchngeName}>Средний коммерческий курс в пунктах обмена Украины</h2>
      <CurrencyInput
        onAmaontChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rate)}
        amount={amount1}
        currency={currency1}
      />
      <CurrencyInput
        onAmaontChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rate)}
        amount={amount2}
        currency={currency2}
      />
      </section>
    </div>
  );
}

export default App;
