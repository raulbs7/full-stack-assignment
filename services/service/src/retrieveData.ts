// IMPLEMENT YOUR SOLUTION HERE!!
import axios from "axios";

var url =
  "https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=EUR&to_symbol=USD&apikey=demo";

export const retrieveData = async () => axios
    .get(url)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {});
