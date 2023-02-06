import { createReducer, on } from "@ngrx/store";
import { Currency } from "src/app/shared";
import {
  addCurrency,
  getCurrencyList,
  removeCurrency,
} from "./currency.actions";

export const initialState: readonly Currency[] = [];

export const currencyReducer = createReducer(
  initialState,
  on(removeCurrency, (state, { code }) =>
    state.filter((item) => item._code !== code)
  ),
  on(addCurrency, (state, { currency }) => {
    console.log(state);
    return [...state, currency];
  }),
  on(getCurrencyList, (state, { currencies }) => {
    console.log(currencies);
    return currencies;
  })
);
