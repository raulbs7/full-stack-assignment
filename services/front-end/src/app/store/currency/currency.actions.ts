import { Action, createAction, props } from "@ngrx/store";
import { Currency } from "src/app/shared";

export const ADD_CURRENCY = "[Currency List] Subscribe Currency";

export const addCurrency = createAction(
  ADD_CURRENCY,
  props<{ currency: Currency }>()
);

export const REMOVE_CURRENCY = "[Currency List] Unsubscribe Currency";

export const removeCurrency = createAction(
  REMOVE_CURRENCY,
  props<{ code: string }>()
);

export const GET_CURRENCY_LIST = "[Currency List] Retrieved Currencies";

export const getCurrencyList = createAction(
  GET_CURRENCY_LIST,
  props<{ currencies: Currency[] }>()
);
