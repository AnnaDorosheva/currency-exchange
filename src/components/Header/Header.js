import React, { useState, useEffect } from "react";
import s from "./Header.module.css";
import {apiRequest} from "../fetch-api";

const Currency = () => {
  const [currency, setCurrency] = useState([
    { cur: "USD", buy: 0, sale: 0, id: 1 },
    { cur: "EUR", buy: 0, sale: 0, id: 2 },
  ]);

// получаем данные о курсах валют от Приватбанка и записывает в обьект currensy:
  useEffect(() => {
    apiRequest
      .getRates()
      .then((responce) => responce.data)
      .then((data) => {
        currency.map(item => {
          data.filter(getItem => {
            if(getItem.ccy === item.cur) {
              item.buy = Math.floor(getItem.buy * 100) / 100;
              item.sale = Math.floor(getItem.sale * 100) / 100;
            }
          });
        });
        setCurrency(prev => [...currency]);
      });
  }, [currency]);

  return (
    
    <section className={s.currency}>
      <h1 className={s.header}>Курс покупки и продажи валюты</h1>
      <div className={s.headerText}>по отношению к гривне в Приватбанке Украины</div>
      <div className={s.headerContainer}>
        <ul className={s.headerInfo}>
          <li>
            <h3 className={s.name}>Валюта</h3>
            <div className={s.info}>Покупка</div>
            <div className={s.info}>Продажа</div>
          </li>

          {currency.map((itemCurrency) => (
            <li key={itemCurrency.id}>
              <h3 className={s.name}>{itemCurrency.cur}</h3>
              <div className={s.info}>{itemCurrency.buy}</div>
              <div className={s.info}>{itemCurrency.sale}</div>
            </li>
          ))}
        </ul>
        <div></div>
      </div>
    </section>
    
  );
};

export default Currency;