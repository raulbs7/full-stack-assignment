import { Currency, ICurrencyRepository } from "../../domain";
import { Nullable } from "../../../utils";
import CurrencySchema from "../schema/mongoose-currency.schema";

export class MongooseCurrencyRepository implements ICurrencyRepository {
  private toDomain(currencyDB) {
    return Currency.fromPrimitives({
      id: currencyDB._id,
      code: currencyDB.code,
      hasSubscription: currencyDB.hasSubscription,
    });
  }

  async findAllSubscriptions(): Promise<Currency[]> {
    const subscribedCurrencies = await CurrencySchema.find({
      hasSubscription: true,
    });

    return subscribedCurrencies.map((currency) => this.toDomain(currency));
  }
}
