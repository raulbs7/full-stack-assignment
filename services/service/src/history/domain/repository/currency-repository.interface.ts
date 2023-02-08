import { Currency } from "../models/currency";

export interface ICurrencyRepository {
  findAllSubscriptions(): Promise<Currency[]>;
}
