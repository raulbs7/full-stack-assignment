const HOST = "https://staging.planetdataset.com";
const CURRENCY_LIST_URL = "https://www.alphavantage.co/physical_currency_list/";

export const environment = {
  baseUrl: HOST,
  apiUrl: `${HOST}/api`,
  production: true,
  currencyListUrl: CURRENCY_LIST_URL,
};
