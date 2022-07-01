import axios from "axios";

const myHeaders = new Headers();
myHeaders.append("apikey", "XQ9IaZMBajBwQ7aP2igUdQV9LwFkisjy");

const requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

export default function fetchAPI() {
   return fetch(
      "https://api.apilayer.com/exchangerates_data/latest?symbols=UAH,GBP,EUR,USD&base=UAH",
      requestOptions
    )
};


const instance = axios.create({
  baseURL: "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11"
});

export const apiRequest = {
  getRates() {
    return instance.get()
  }
};

