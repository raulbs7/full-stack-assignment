const HOST = "http://localhost:4200";
const CURRENCY_LIST_URL = "https://www.alphavantage.co/physical_currency_list/";

export const environment = {
  baseUrl: HOST,
  apiUrl: `${HOST}/api`,
  production: false,
  currencyListUrl: CURRENCY_LIST_URL,
};
