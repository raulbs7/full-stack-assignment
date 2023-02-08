import { Currency, History } from "../src/history";
import axios from "axios";
import { GetSubscribedCurrencies, UpdateHistoryCurrency } from "./history";
import { HistoryApi } from "./utils";

const API_KEY: string = 'TQO6S8ONWLP6KEOP';

// IMPLEMENT YOUR SOLUTION HERE!!

const getSubscribedCurrencies = new GetSubscribedCurrencies({});
const updateHistoryCurrency = new UpdateHistoryCurrency({});

const DATA_VARIABLE_JSON = "Time Series FX (Daily)";

export const retrieveData = async () => {
  getCurrenciesArray().then((currencies) => {
    currencies.map(async (currency) => {
      await updateHistory(currency);
    });
  });
};

async function getCurrenciesArray(): Promise<string[]> {
  let currencies: string[] = [];
  const subscribedCurrencies: Currency[] =
    await getSubscribedCurrencies.execute();

  subscribedCurrencies.map((currency) => {
    currencies.push(currency.code);
  });
  return currencies;
}

function updateHistory(code: string) {
  var url =
    "https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=" +code + "&to_symbol=EUR&apikey=" + API_KEY;
  console.log(url)
  axios
    .get(url)
    .then((response) => {
      let responseData: { [key: string]: HistoryApi } =
        response.data[DATA_VARIABLE_JSON];
      for (let date in responseData) {
        console.debug(
          date,
          code,
          responseData[date]["2. high"],
          responseData[date]["3. low"]
        );
        updateHistoryCurrency.execute(code, date, responseData[date]);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
